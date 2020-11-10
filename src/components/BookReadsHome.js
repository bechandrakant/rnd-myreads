import React from 'react'
import BookShelf from "./BookShelf"
import { Link } from "react-router-dom"
import { SHELVES } from "./constants/constant"

const BookReadsHome = ({ books, onChange }) => {

  const bookShelves = SHELVES.map((shelf, index) => {
    const bookList = books.filter(book => book.shelf === shelf.id)
    return (
      <BookShelf 
        key={index}
        title={shelf.title}
        books={bookList}
        onChange={onChange}
      />)
  })

  return (   
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads: A Book Lending App</h1>
    </div>
    <div className="list-books-content">
      <div>
        { bookShelves }
      </div>
    </div>
    <Link to="/search">
      <div className="open-search">
        Add a book 
      </div>
    </Link> 
  </div>
  )
}

export default BookReadsHome
