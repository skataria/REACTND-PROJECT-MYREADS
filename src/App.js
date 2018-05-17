import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import Search from './Search'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        BooksAPI.getAll()
            .then(data => { 
            this.setState(() => (
                {books: data}
            ))
        })
    }

    updateBook = (e, book, value) => {
        /*update backend*/
        BooksAPI.update(book, value)
            .then((response) => {
                book.shelf = value;

                this.getAllBooks();
                /*
                this.setState(state => ({
                    books: state.books.filter((bk) => bk.id !== book.id).concat(book)
                }))
                */
            })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() =>
                    <Search 
                        books={this.state.books} 
                        updateBook={this.updateBook}/>
                }/>
                <Route path="/" exact render={() => (
                    <BookShelves 
                        books={this.state.books} 
                        updateBook={this.updateBook}/>

                )}/>
            </div>
        )
  }
}

export default BooksApp
