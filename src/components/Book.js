import React from 'react'

const Book = ({ bookData, onChange }) => {

  const updateBookShelf = (e) => {
    onChange(bookData, e.target.value)
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookData.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={updateBookShelf} value={bookData.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookData.title}</div>
        <div className="book-authors">{bookData.authors[0]}</div>
      </div>
    </li>
          
  )
}

export default Book
