import { addDoc, collection } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase"

const Checkout = () =>{
    const { cart, total } = useContext(CartContext)

    const createOrder = () =>{
        const objOrder = {
            buyer: {
                name: 'ss',
                phone: 'sss',
                email: 'sssss'
    
            },
            items: cart,
            total
        }
        console.log(objOrder)
        const collectionRef = collection(db,'orders')

        addDoc(collectionRef, objOrder)

    }

   
    return(
        <>
        <h1>Checkout</h1>
        <button>Agregar documento</button>
        </>

      

    )
}

export default Checkout