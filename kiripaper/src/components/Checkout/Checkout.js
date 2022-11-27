import './checkout.css'
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../service/firebase"
import { useNotification } from "../../notification/Notification"



const Checkout =() =>{
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const {setNotification} = useNotification()
    const [user, setUser] = useState([]) 
    
    const inputCapture = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }
    
    const createOrder = async () =>{
        setLoading(true)
        try{
            const objOrder = {
                buyer: {
                    name: user.name,
                    phone: user.phone,
                    email: user.email
        
                },
                items: cart,
                total
            }

           
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db,'products')
    
            const productsFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []


    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                
    
               
                setNotification("Su orden ha sido generada con exito")
                clearCart()

            }else{
                
            }

        }  catch (error){
            
        } finally{
            setLoading(false)
            if(loading) {
                return <h1>Su orden se esta generando...</h1>
            }
            
        }

        


    }

   
    return(
        <>
        <h1>Ingrese sus datos para realizar la compra</h1>
        <div className='formulario'>
        <form>
            <div className='inputContainer'>
                  
                <input type='text' name='name'  placeholder='Ingrese el nombre de usuario' onChange={inputCapture} value={user.name} />
                  
                <input type='text' name='phone'  placeholder='Ingrese el numero de telefono' onChange={inputCapture} value={user.phone} />
                  
                <input type='text' name='email'  placeholder='Ingrese su correo electronico' onChange={inputCapture} value={user.email} />

            </div>
        </form>
        </div>
        <button onClick={createOrder}>Ingresar Orden</button>
        
        
       
        </>
        

      

    )
}

export default Checkout