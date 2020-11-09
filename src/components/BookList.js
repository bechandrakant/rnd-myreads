import React from 'react'
import Book from "./Book";

const BookList = ({ books }) => {
  const bookList = books.map(book => <Book bookData={book} />)
  return (
    <div>
      
    </div>
  )
}

export default BookList
