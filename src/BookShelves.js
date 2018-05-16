import React, {Component} from 'react';
import ListBooks from './ListBooks.js';
import { Link } from 'react-router-dom';

class BookShelves extends Component {
    render() {
        const books = this.props.books;
        const booksByShelf = {};
        const shelves = ['currentlyReading', 'wantToRead', 'read'];
        shelves.forEach((shelf) => {
            let list = books.filter((book) => (book.shelf === shelf));
            booksByShelf[shelf] = list;
        })
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ListBooks shelfBooks={booksByShelf['currentlyReading']} onChangeShelf={this.props.updateBook}/>                      
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ListBooks shelfBooks={booksByShelf['wantToRead']} onChangeShelf={this.props.updateBook}/>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ListBooks shelfBooks={booksByShelf['read']} onChangeShelf={this.props.updateBook}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )}
}

export default BookShelves