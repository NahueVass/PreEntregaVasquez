import { Link } from 'react-router-dom';

const productos = [
  { id: 1, nombre: 'Botines Para Niños Nike Jr Phantom Gx Academy Mg Blanco', imagen: '/img/botines-nike-blanco.png', descripcion: 'Descripción del Producto 1' },
  { id: 2, nombre: 'Botines Para Niño/a Nike Jr Tiempo Legend 10 Academy Negro', imagen: '/img/botines-nike-tiempo.png', descripcion: 'Descripción del Producto 2' },
  { id: 3, nombre: 'Botín Unisex Nike Tiempo Legend 10 Academy Cesped Sintético', imagen: '/img/botines-blancos-papi.png', descripcion: 'Descripción del Producto 2' },
  { id: 4, nombre: 'Botines Para Niños Nike Jr Tiempo Legend 10 Pasto Sintético', imagen: '/img/botines-negros-papi.png', descripcion: 'Descripción del Producto 2' },

];

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2 className="my-4">{greeting}</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src={producto.imagen} alt={producto.nombre} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
