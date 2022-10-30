import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    return (

        <Link to="/cart">
                <div className="IconoCarrito">
            <FaShoppingCart/>
            1
        </div>
              </Link>
        
        
    )
}

export default CartWidget