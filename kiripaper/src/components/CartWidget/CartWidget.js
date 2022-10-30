import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext)


    return (

        <Link to="/cart">
                <div className="IconoCarrito">
            <FaShoppingCart/>
            {totalQuantity}
        </div>
              </Link>
        
        
    )
}

export default CartWidget