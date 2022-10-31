import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../notification/Notification";

const ItemDetail = ({id, name, description, price, category, img, stock}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const {addItem, getProductQuantity} = useContext (CartContext)
  const {setNotification} = useContext(NotificationContext)
  

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = {
      id, name, price, quantity
    }
    addItem(productToAdd)
    setNotification(`Se agrego correctamente ${quantity} ${name}`)
  };

  const productAddedQuantity = getProductQuantity(id)
 

  return (
    <div>
      <h1> Detalle del Producto</h1>

      <div className="contenedorDetalle">
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="contenedorDetalleProducto">
          <h2> {name} </h2>
          <h3>$ {price} </h3>
          <p> {description} </p>
          <h4> {category} </h4>
          <div className="btn">
            {quantityToAdd === 0 ? (
              <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
            ) : (
              <Link to="/cart" className="Option">
                Finalizar compra
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
