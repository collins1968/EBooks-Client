import './books.css'
import { useState, useEffect, useContext } from 'react'; 
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import  BookDetailsPopup  from './BookDetails';
import {CartContext} from '../../context/CartContext/Context'
import { Context } from '../../context/userContext/context';
import { apiDomain } from '../../utils/utils';

export const MainContent = () => {
    const {cartId} = useContext(CartContext);
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const {user} = useContext(Context)

  const FetchBooksByCategories = async () => {
    try {
        const response = await axios.get(`${apiDomain}/books`, 
        { headers: { Authorization: `${user.token}` } }
        );
        setBooks(response.data) ;
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    FetchBooksByCategories()
}, [])


const handleAddToCart = async (bookId) => {
      try {
        const quantity = 1;
        // Make an API request to add the book to the cart
       const response = await axios.post(`${apiDomain}/cart/${cartId}/items`, { bookId, quantity }
       , {headers: {"Authorization": `${user.token}`}}
       );
      //  fetchCartItems();
       console.log(cartId)

        // Show a success message or perform any other necessary actions
        toast.success('Book added to cart successfully!');
      } catch (error) {
        // Handle any errors that occur during the API request
        console.log(error);
        toast.error('Failed to add book to cart.');
      }
    };
  


  const groupByCategory = () => {
    const groupedBooks = {};

    books.forEach(book => {
      const { category_name } = book;

      if (groupedBooks[category_name]) {
        groupedBooks[category_name].push(book);
      } else {
        groupedBooks[category_name] = [book];
      }
    });
    return groupedBooks;
    };

  const renderBooksByCategory = () => {
    const groupedBooks = groupByCategory();

    const handleBookClick = book => {
      setSelectedBook(book);
    };

    return Object.entries(groupedBooks).map(([category_name, books]) => (
      <div key={category_name} className="category">
        <h2>{category_name}</h2>
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>${book.price}</p>
              <button onClick={() => handleBookClick(book)}>Readmore...</button>
            </div>
          ))}
        </div>
      </div>
    ));
    };
 
      
    return (
        <>
        <div className="books-page">
      {renderBooksByCategory()}
      {selectedBook && (
        <BookDetailsPopup
          book={selectedBook}
          handleAddToCart={handleAddToCart}
          handleClose={() => setSelectedBook(null)}
        />
      )}
    </div>
        </>
    )
}



