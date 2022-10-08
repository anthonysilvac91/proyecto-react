import './item.css'
import { Link } from "react-router-dom";



const Item = ({prod}) => {
    return(
        <div className='contenedorProducto'>
            <h2> {prod.name} </h2>
            <h3>$ {prod.price} </h3>
            <p> {prod.description} </p>
            <Link to={`/detail/${prod.id}`}>Ver Detalle</Link>

        </div>
    )
}

export default Item