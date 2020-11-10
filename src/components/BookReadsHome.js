import React from 'react'
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom"

const BookReadsHome = ({ books, onChange }) => {

  const currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading")
  const wantToReadBooks = books.filter(book => book.shelf === "wantToRead")
  const readBooks = books.filter(book => book.shelf === "read")

  return (   
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads: A Book Lending App</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf 
          title="Currently Reading"
          books={currentlyReadingBooks}
          onChange={onChange}
        />
        <BookShelf 
          title="Want To Read"
          books={wantToReadBooks}
          onChange={onChange}
        />
        <BookShelf 
          title="Read"
          books={readBooks}
          onChange={onChange}
        />
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
