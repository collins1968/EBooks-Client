import CartPage2 from "./cartPage"
import CartSummary from "./cartSummary";
import Header from "./Header"
import "./cart.css"

const Cart = () => {
  return(
    <>
    <Header />
    <h1>cartpage</h1>
    <div className="CartPage">
      <CartPage2/>
     <CartSummary/>
    </div>
    </>
    
    
)}

export default Cart;