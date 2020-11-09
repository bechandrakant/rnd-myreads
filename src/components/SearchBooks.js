import React, { useState } from 'react'
import { Link } from "react-router-dom"
import BookList from "./BookList"
import * as BooksAPI from '.././api/BooksAPI'

const SearchBooks = ({ onChange }) => {
  const [matchingBooks, setMatchingBooks] = useState(null)
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value)
    searchBooks(e.target.value)
  }

  const searchBooks = (query) => {
    if (query.length === 0) {
      setMatchingBooks(null)
    }
    else {
      BooksAPI.search(query).then(books => {
        if (books.length > 0) {
          setMatchingBooks(books)
        } else {
          setMatchingBooks(null)
        }
      })
    }
  }

  return (
    <div className="search-books">
    <div className="search-books-bar">
      <div className="close-search">
        <Link to="/"><button>Close</button></Link>  
      </div>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input 
          type="text" 
          placeholder="Search by title or author" 
          value={query}
          onChange={handleChange} />
      </div>
    </div>
    <div className="search-books-results">
      { matchingBooks ? 
        <ol className="books-grid">
          <BookList 
            books={matchingBooks}
            onChange={onChange}
            />
        </ol> : <h4>No matching results found!</h4>}
    </div>
  </div>
  )
}

export default SearchBooks
