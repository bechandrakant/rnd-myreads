import React from 'react'
import Book from "./Book";

const BookList = ({ books, onChange }) => {
  
  const bookList = books.map(book => 
                              <Book 
                                key={book.id} 
                                bookData={book} 
                                onChange={onChange}/>)
  
  return (
    <ol className="books-grid">
      {bookList}
    </ol>
  )
}

export default BookList
