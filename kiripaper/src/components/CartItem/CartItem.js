import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {quantity}
            </p>
            <p>
                ${price}
            </p>
            <p>
                Subtotal: ${price * quantity}
            </p>
            <button onClick={()=> handleRemove(id)} >x</button>
        </div>
    )
}

export default CartItem