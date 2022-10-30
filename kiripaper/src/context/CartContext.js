import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
    
          setCart([...cart, productToAdd]);
        }
      };
    
      const removeItem = (id) =>{
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }
    
      const isInCart = (id) =>{
        return cart.some(prod=> prod.id ===id)
      }

        const totalQuantity = () =>{
            const totalQuantity = 0

            cart.forEach(prod =>{
                totalQuantity += prod.quantity
            })
        }
      }

    return (

        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
        

    )


export default CartContextProvider