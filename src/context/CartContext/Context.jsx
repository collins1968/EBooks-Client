import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartId, setCartId] = useState(() => {
//     return JSON.parse(localStorage.getItem('cartId'));
//   });

//   // Function to update the cartId value
//   const updateCartId = (newCartId) => {
//     setCartId(newCartId);
//   };

//   useEffect(() => {
//     localStorage.setItem('cartId', JSON.stringify(cartId));
//   }, [cartId]);

//   return (
//     <CartContext.Provider value={{ cartId, updateCartId }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

const CartProvider = ({ children }) => {
  
  
  const cartId = JSON.parse(localStorage.getItem('cartId'));
  
  // const cartId = idcart.idcart;
  // Function to update the cartId value
 

  return (
    <CartContext.Provider value={{ cartId }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
