import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./BookDetails.css";
import Rating from "@mui/material/Rating";
// import {useHistory} from 'react-router-dom'

const BookDetailsPopup = ({ book, handleAddToCart, handleClose }) => {
  const [value, setValue] = useState(3);
  return (
    <div className="popup-container">
      <div className="popup">
      <b></b>
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <div className="book-details">
          <img src={book.image} alt="book" />
          <h2>{book.title}</h2>
          <div className="details">
          <div>
          <p>by {book.author_name}</p>
          <Rating
            name="simple-controlled"
            value="3"
            onChange={(event, value) => {
              setValue(value);
            }}
          />
          </div>
          
          <div className="price">
          <p>$ {book.price}</p>
          </div>
          </div>
          <button onClick={() => handleAddToCart(book.book_id)}>
            Add to Cart
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
