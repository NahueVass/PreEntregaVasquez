import { Link } from "react-router-dom/cjs/react-router-dom.min";
import productos from "./productos";

export const ItemList = () => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <Link to={`/item/${producto.id}`} className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
