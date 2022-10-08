import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    useEffect(() =>{
        getProduct(productId).then(product => {
            setProduct(product)
            
        })
    })


    return (
        <div>
            <h1> Detalle del Producto</h1>
            
            <div>
                <h2> {product.name} </h2>
                <h3>$ {product.price} </h3>
                <p> {product.description} </p>
                <h4> {product.category} </h4>
            </div>
        </div>
    )
}

export default ItemDetailContainer