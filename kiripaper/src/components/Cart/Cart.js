import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity ===0){
        return(
            <h1>No hay productos en el carrito</h1>
        )
    }
    return(
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} >Limpiar Carrito</button>
            
        </div>
    )

}

export default Cart
