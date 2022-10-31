import "./CartItem.css";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <div className="cartViewCard">
            <h2 className="itemCart">
                {name}
            </h2>
            <p className="itemCart">
                {quantity}
            </p>
            <p className="itemCart">
                ${price}
            </p>
            <p className="itemCart">
                Subtotal: ${price * quantity}
            </p>
            <button  onClick={()=> handleRemove(id)} className="itemCart btnCartItem" >x</button>
        </div>
    )
}

export default CartItem