import React, {Component} from 'react';

class Book extends Component {
    
    onChangeShelf = (e) => {
        console.log('new shelf', e.target.value);
    }
    render () {
        const {imageLinks, title, authors, shelf} = this.props.bookDetails;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: "url(" + imageLinks.smallThumbnail + ")"
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(e) => {this.props.onChangeShelf(e, this.props.bookDetails, e.target.value)}}>
                                <option value="none" disabled>Move to...</option>
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
}

export default Book;