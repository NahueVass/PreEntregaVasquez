import { useParams } from "react-router-dom";
import  ItemQuantitySelector  from "./ItemQuantitySelector";
import productos from "./productos";

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{producto.nombre}</h2>
              <p className="card-text">{producto.descripcion}</p>
              <ItemQuantitySelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
