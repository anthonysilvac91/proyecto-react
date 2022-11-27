import "./cart.css"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useCart()

    if (totalQuantity ===0){
        return(
            <h1>No hay productos en el carrito</h1>
        )
    }
    return(
        <div className="cartView">
            <h1>Carrito de Compras</h1>
            <div className="cartViewTitle">
                <h2 className="cartTitelItem">Producto</h2>
                <h2 className="cartTitelItem">Cantidad</h2>
                <h2 className="cartTitelItem">Precio Unitario</h2>
                <h2 className="cartTitelItem">Precio Total</h2>
                <h2 className="cartTitelItem">Eliminar</h2>
            </div>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button className="btnCartView" onClick={()=> clearCart()} >Limpiar Carrito</button>
            <Link to="/checkout" className="btnCartView">Comprar</Link>
            
        </div>
    )

}

export default Cart
