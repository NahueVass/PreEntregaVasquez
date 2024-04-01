import CheckoutModal from './CheckoutModal';
import productos from './productos'; // Importa los productos desde tu archivo

const MainComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>¡Bienvenido a mi aplicación!</h1>
      <button onClick={openModal}>Ver Resumen de Compra</button> {/* Botón para abrir el modal */}
      <CheckoutModal isOpen={modalIsOpen} onRequestClose={closeModal} products={productos} /> {/* Componente del modal */}
    </div>
  );
};

export default MainComponent;
