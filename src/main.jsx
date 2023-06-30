import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from '../src/context/userContext/context.jsx'
import { CartProvider } from '../src/context/CartContext/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <CartProvider >
          <App />
      </CartProvider>
    </ContextProvider>
  </React.StrictMode>,
)
