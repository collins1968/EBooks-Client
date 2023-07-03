import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '.././context/userContext/context'
import { CartContext } from '../context/CartContext/Context';
import {toast} from 'react-toastify';
import {apiDomain} from '../utils/utils';
import { useNavigate } from 'react-router-dom';


const CartPage2 = () => {
  const navigate = useNavigate();
  const {cartId} = useContext(CartContext);
  const {user} = useContext(Context);
    const [cartItems, setCartItems] = useState([]);

    // Fetch the cart items from the server
    const fetchCartItems = async () => {
      
      try {
        const response = await axios.get(`${apiDomain}/cart/${cartId}/items`, 
       { headers: { Authorization: `${user.token}` } }
    );
    
        setCartItems(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    useEffect(() => {
      fetchCartItems();
    }, []);
  
// function to remove item from cart
  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`${apiDomain}/cart/${cartId}/items/${itemId}` , 
      { headers: { Authorization: `${user.token}` } });
      navigate('/home')
      toast.success(response.data.message);
      fetchCartItems();
    } catch (error) {
      // console.log(error.response.data);
    }
  };
  
// Function to update the quantity of an item in the cart  
const handleQuantityChange = async (itemId, quantity) => {
      try {
        const response = await axios.put(`${apiDomain}/cart/${cartId}/items/${itemId}`,
        { headers: { Authorization: `${user.token}` } },
        { quantity });
        // alert(response.data.message)
        
        toast.success('added the quantity')
        fetchCartItems();
      } catch (error) {
        console.error('Error updating cart item quantity:', error);
      }
    };


    return (
      <div className="cart-container"> 
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          
          <ul>
            {cartItems.map((item, index) => (
              <li key={item.cart_item_id}>

                <img src={item.image} alt="book" />
                <div className='cart-container-info'>
                <div>
                  <p>id:{item.cart_item_id}</p>
                <span>{item.title}</span>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={(e) =>
                      handleQuantityChange(item.cart_item_id, e.target.value)
                    }
                  />
                  <button onClick={() => handleRemoveFromCart(item.cart_item_id)}>
                    Remove
                  </button>
                </div>
                </div>
                
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

 export default CartPage2; 