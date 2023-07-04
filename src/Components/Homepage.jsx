import lib from '../assets/lib.png';
import RegisterForm from './Register';
import './homePage.css'
import LoginForm from './loginForm';
import { useState } from 'react';


 const Homepage = () => {
    const [isLoginForm, setIsLoginForm] = useState(false);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };
    return (
        <>
        <div className="homepage">
             <div className='image'>
                <img src={lib} alt="libImage" />
                </div>
                {isLoginForm ? (
                    <RegisterForm onFormChange={toggleForm} />
                ) : (
                    <LoginForm onFormChange={toggleForm} /> 
                    )}    
     </div>
        </>       
    )};

export default Homepage;
