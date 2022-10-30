import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState (0)

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithoutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutItem);
  };

  useEffect(()=>{
    const totalQuantity = getTotalQuantity()
    setTotalQuantity(totalQuantity)

  }, [cart])


   const getTotalQuantity = () =>{
    let totalQuantity = 0

    cart.forEach(prod =>{
        totalQuantity += prod.quantity
    })
    return totalQuantity
    }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );

  
};

export default CartContextProvider;
