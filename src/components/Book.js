import React, { useState } from 'react'

const Book = ({ bookData, onChange }) => {

  const [currentShelf, setCurrentShelf] = useState(bookData.shelf)

  const updateBookShelf = (e) => {
    setCurrentShelf(e.target.value)
    onChange(bookData, e.target.value)
  }

  const thumbnail = bookData?.imageLinks?.thumbnail ?? 
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png"
  
  const title = bookData?.title ?? "No title Found"

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 150, height: 200, backgroundImage: `url(${thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={updateBookShelf} value={currentShelf || "none"}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{bookData?.authors?.join(', ')}</div>
      </div>
    </li>
          
  )
}

export default Book
