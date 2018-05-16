import React from 'react';

const Book = (props) => {
        const {imageLinks, title, authors, shelf} = props.bookDetails;
        const imageUrl = imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : '';
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: "url(" + imageUrl + ")"
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(e) => {props.onChangeShelf(e, props.bookDetails, e.target.value)}}>
                                <option value="disabled" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    {authors && authors.length > 0 &&
                        authors.map(author => {
                            return <div className="book-authors" key={author}>{author}</div>
                        })
                    }  
                </div>
            </li>
        )
}

export default Book;