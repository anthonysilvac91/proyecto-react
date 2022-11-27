import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../service/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'



const ItemListContainer = ({greeting}) => {
    const { categoryId} = useParams ()
    const { data: products, error, loading } = useAsync(() => getProducts(categoryId), [categoryId])


    if(loading && true) {
        return <h1>Cargando productos...</h1>
    }
    
    return (
        <div> 
            <h1>{greeting}</h1>
        <ItemList products={products} />
            
        </div>
        
    )
}

export default ItemListContainer