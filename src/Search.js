import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';

class Search extends Component {
    state = {
        query: '',
        results: [],
        error: false
    }

    searchBooks(queryStr) {
        BooksAPI.search(queryStr).then((books) => {
            if (books && books.error) {
                this.setState({error: true, results: []});
            } else {
                const booksParsed = books.filter((book) => !book.shelf)
                    .map(book => {
                        book.shelf = 'none';
                        return book;
                    }); 
                //console.log(booksParsed);       

                this.setState({ results: booksParsed, error: false })
            }
        })
    }

    handleUpdateQuery(queryStr) {
        queryStr = queryStr.trim();
        this.setState({query: queryStr});
        if (queryStr) {
            this.searchBooks(queryStr);
        } else {
            this.setState({query: '', results: [], error: false});
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                {/*
                onClick={() => this.setState({ showSearchPage: false })}
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query}
                  onChange={e => this.handleUpdateQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
                {!this.state.error && (
              <ol className="books-grid">
                <ListBooks shelfBooks={this.state.results} onChangeShelf={this.props.updateBook} noMessage={true}/>
              </ol>
                )}

                {this.state.error && (
                    <div> No results found.</div>
                )}
            </div>
          </div>
        )
    }
}

export default Search