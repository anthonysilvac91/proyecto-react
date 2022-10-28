import Counter from "../Counter/Counter";
import './itemDetail.css'

const ItemDetail = (product) => {
  return (
    <div>
      <h1> Detalle del Producto</h1>

      <div className="contenedorDetalle">
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div className="contenedorDetalleProducto">
          <h2> {product.name} </h2>
          <h3>$ {product.price} </h3>
          <p> {product.description} </p>
          <h4> {product.category} </h4>
          <div className="btn">
            <button>Agregar al Carrito</button>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
