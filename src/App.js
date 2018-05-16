import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

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
    console.log(book, value, e);
    /*update state of that book*/

    /*update backend*/
    BooksAPI.update(book, value)
      .then((response) => {
        book.shelf = value;
        console.log('shelf updated...', response);

        //prefer to do this than filtering and concating the updated book
        this.getAllBooks();
      })


  }

  render() {
    const books = this.state.books;
    const booksByShelf = {};
    const shelves = ['currentlyReading', 'wantToRead', 'read'];
    shelves.forEach((shelf) => {
      let list = books.filter((book) => (book.shelf === shelf));
      booksByShelf[shelf] = list;
    })
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ListBooks shelfBooks={booksByShelf['currentlyReading']} onChangeShelf={this.updateBook}/>                      
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks shelfBooks={booksByShelf['wantToRead']} onChangeShelf={this.updateBook}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks shelfBooks={booksByShelf['read']} onChangeShelf={this.updateBook}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
