import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './Components/Homepage'
import Footer from './Components/Footer';
import AdminPage from './Components/Admin/pages/AdminPage';
import BooksOverview from './Components/Books/BooksOverview';
import RegisterForm from './Components/Register';
import Checkout from './Components/Checkout';
import PaymentSucess from './Components/PaymentSucess'


import { Context } from './context/userContext/context';
import Cart from './Components/cart';
function App() {
  const { user } = useContext(Context);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/home" element={user ? <BooksOverview /> : <Homepage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<PaymentSucess />} />

    </Routes>
    <Footer /> 
    <ToastContainer />
    </BrowserRouter>
      
    </>
  )
}

export default App
