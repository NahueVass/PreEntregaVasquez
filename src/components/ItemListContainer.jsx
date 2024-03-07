import { Link } from 'react-router-dom';

const productos = [
  { id: 1, nombre: 'Botines Para Niños Nike Jr Phantom Gx Academy Mg Blanco', imagen: '../public/img/botines-nike-blanco.png', descripcion: 'Descripción del Producto 1' },
  { id: 2, nombre: 'Botines Para Niño/a Nike Jr Tiempo Legend 10 Academy Negro', imagen: '../public/img/botines-nike-tiempo.png', descripcion: 'Descripción del Producto 2' },
  { id: 3, nombre: 'Botín Unisex Nike Tiempo Legend 10 Academy Cesped Sintético', imagen: '../public/img/botines-blancos-papi.png', descripcion: 'Descripción del Producto 2' },
  { id: 4, nombre: 'Botines Para Niños Nike Jr Tiempo Legend 10 Pasto Sintético', imagen: '../public/img/botines-negros-papi.png', descripcion: 'Descripción del Producto 2' },

];

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/item/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.nombre}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
