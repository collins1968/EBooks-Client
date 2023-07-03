import { Link } from "react-router-dom";
import "./PaymentSuccess.css"
const PaymentSucess = () => {
    return (
        <div className="success-Body">
        <div className="success-page">
          <h1 className="success-page-title">Payment Successful!</h1>
          <p className="success-page-message">
            Thank you for your purchase. Your payment has been successfully processed.
          </p>
          <Link to="/home" className="success-page-link">
            Continue Shopping
          </Link>
        </div>
        </div>
      );
    };


export default PaymentSucess