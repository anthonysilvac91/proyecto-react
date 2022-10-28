import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {db} from '../../service/firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState (true)

    useEffect(() =>{
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc =>{
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data}

            setProduct(productAdapted)
        }).finally(() =>{
            setLoading(false)
        })   
    })

    if(loading && true) {
        return <h1>Cargando...</h1>
    }


    return (

        <div className='ItemDetailContainer' >
            <ItemDetail  {...product}/>
        </div>
    )
}

export default ItemDetailContainer