import React from 'react'
import * as BooksAPI from './api/BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookReadsHome from "./components/BookReadsHome";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount = () => {
    this.fetchBooks()
  }
  
  fetchBooks = () => {
    BooksAPI
      .getAll()
      .then(books => this.setState({ books }))
  }

  updateBook = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(() => this.fetchBooks())
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <BookReadsHome 
            books={this.state.books} 
            onChange={this.updateBook}/>
        </Route>
        <Route exact path="/search">
          <SearchBooks books={this.state.books} onChange={this.updateBook} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
