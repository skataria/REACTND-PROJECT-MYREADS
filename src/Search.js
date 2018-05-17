import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import * as _ from 'lodash';

class Search extends Component {
    state = {
        query: '',
        results: [],
        error: false
    }

    searchBooks(queryStr) {
        const selectedBooks = this.props.books;
        BooksAPI.search(queryStr).then((books) => {
            if (books && books.error) {
                this.setState({error: true, results: []});
            } else {
               const booksParsed = books.map((bk) => {
                    let match = _.find(selectedBooks, {id: bk.id});
                    if (match && !_.isEmpty(match)) {
                        bk.shelf = match.shelf;
                    } else {
                        bk.shelf = 'none';
                    }

                    return bk;
                })
                
                this.setState({ results: booksParsed, error: false })
            }
        })
    }

    handleUpdateQuery(queryStr) {
        this.setState({query: queryStr});
        if (queryStr.trim()) {
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