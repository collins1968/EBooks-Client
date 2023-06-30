import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext/Context'
import { Link } from 'react-router-dom';
import { apiDomain } from '../utils/utils';
import { Context } from '../context/userContext/context';

const CartSummary = () => {
    const {user} = useContext(Context);
    const {cartId} = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const fetchTotalAmount = async () => {
        try {
          const response = await axios.get(`${apiDomain}/cart/${cartId}/total`, { headers: { Authorization: `${user.token}` } });
          const totalAmount = response.data.total_amount;
          
          setTotalAmount(totalAmount);
        } catch (error) {
          console.error('Error fetching total amount:', error);
        }
      };
      useEffect(() => {
        fetchTotalAmount();
      }, [])
      

    return(
        <div className="cartSummary">
            <h2 >CART SUMMARY</h2>
            <p>subtotal: {totalAmount}</p>
           <Link to="/checkout"><button>Checkout  ${totalAmount}</button></Link>
        </div>
    )
}

export default CartSummary;
