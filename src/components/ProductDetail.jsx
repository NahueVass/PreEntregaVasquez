import { useParams } from 'react-router-dom';

const productos = [
    { id: 1, nombre: 'Botines Para Niños Nike Jr Phantom Gx Academy Mg Blanco', imagen: '../public/img/botines-nike-blanco.png', descripcion: '¿Quieres llevar tu juego al siguiente nivel? El Calzado Academy te brinda el toque de precisión que necesitas para que tus instintos de juego más internos deslumbren. Con NikeSkin, una zona de toque de malla para una mayor precisión y una placa de agilidad diseñada para deslizarse y correr contigo, todo está listo para encender tu espíritu de juego espontáneo. Mejor aún, ¡no hace falta amarrarlo! Utiliza las presillas de agarre y la lengüeta ajustable para ponértelo con facilidad y jugar antes.' },
    { id: 2, nombre: 'Botines Para Niño/a Nike Jr Tiempo Legend 10 Academy Negro', imagen: '../public/img/botines-nike-tiempo.png', descripcion: 'Incluso las leyendas encuentran la manera de evolucionar. Diseñado para llevar tu juego al siguiente nivel, la última versión de este calzado Academy cuenta con el nuevo cuero con diseño avanzado FlyTouch Lite. Más suave que el cuero natural, se adapta a tu pie y no se estira demasiado, para que puedas marcar el ritmo de tu juego. Más ligero y elegante que cualquier otro Tiempo hasta la fecha, el Legend 10 es para cualquier posición en el campo, ya sea que estés enviando un pase milimétrico a través de la defensa o mientras regresas para detener una escapada.' },
    { id: 3, nombre: 'Botín Unisex Nike Tiempo Legend 10 Academy Cesped Sintético', imagen: '../public/img/botines-blancos-papi.png', descripcion: 'Incluso las leyendas encuentran la manera de evolucionar. Diseñada para llevar tu juego al siguiente nivel, la última versión de este calzado Academy tiene el nuevo cuero con diseño avanzado FlyTouch Lite. Más suave que el cuero natural, se adapta a tu pie y no se estira demasiado, para que puedas marcar el ritmo de tu juego. Más ligero y elegante que cualquier otro Tiempo hasta la fecha, el Legend 10 es para cualquier posición en el campo, ya sea que estés enviando un pase milimétrico a través de la defensa o mientras regresas para detener una escapada.' },
    { id: 4, nombre: 'Botines Para Niños Nike Jr Tiempo Legend 10 Pasto Sintético', imagen: '../public/img/botines-negros-papi.png', descripcion: 'Incluso las leyendas encuentran la manera de evolucionar. Diseñada para llevar tu juego al siguiente nivel, la última versión de este calzado Academy tiene el nuevo cuero con diseño avanzado FlyTouch Lite. Más suave que el cuero natural, se adapta a tu pie y no se estira demasiado, para que puedas marcar el ritmo de tu juego. Más ligero y elegante que cualquier otro Tiempo hasta la fecha, el Legend 10 es para cualquier posición en el campo, ya sea que estés enviando un pase milimétrico a través de la defensa o mientras regresas para detener una escapada.' },
];

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
                        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title">{producto.nombre}</h2>
                            <p className="card-text">{producto.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
