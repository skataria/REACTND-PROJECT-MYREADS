import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import Search from './Search'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: [],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(data => { 
            this.setState(() => (
                {books: data}
            ))
            console.log('data', data);
        })
    }

    getAllBooks() {
        BooksAPI.getAll()
            .then(data => { 
            this.setState(() => (
                {books: data}
            ))
            console.log('data', data);
        })
    }

    updateBook = (e, book, value) => {
        /*update backend*/
        BooksAPI.update(book, value)
            .then((response) => {
                book.shelf = value;

                //prefer to do this than filtering and concating the updated book
                this.getAllBooks();
            })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() =>
                    <Search updateBook={this.updateBook}/>
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
