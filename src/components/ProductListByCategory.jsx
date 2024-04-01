import mockData from '../mockData';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductListByCategory = ({categoria}) => {
    const productosFiltrados = mockData.filter(producto => producto.categoria === categoria);

    return (
        <div>
            {productosFiltrados.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <Link to={`/category/${producto.categoria}/${producto.id}`}>Detalles</Link>
                </div>
            ))}
        </div>
    );
};

ProductListByCategory.propTypes = {
    categoria: PropTypes.string.isRequired
};

export default ProductListByCategory;