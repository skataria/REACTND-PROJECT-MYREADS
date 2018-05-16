import React from 'react';
import Book from './Book.js';

const ListBooks = (props) => {
    const shelfBooks = props.shelfBooks;
    return (
        <div>
            {shelfBooks && shelfBooks.length > 0 ? (
                <ol className="books-grid">
                    {shelfBooks.map(book => {
                        return <Book key={book.id}
                                bookDetails={book}
                                onChangeShelf={props.onChangeShelf}/>
                    })}
                </ol>
            ) : (
                    <div>{props.noMessage ? '' : 'There are currently no books on this shelf'}</div>
                )
            }
        </div>
    )
}

export default ListBooks