import Modal from 'react-modal';
import CheckoutSummary from './CheckoutSummary'; // Importa el componente de resumen de compra

Modal.setAppElement('#root'); // Esto es necesario para asegurar que el modal se renderice correctamente

const CheckoutModal = ({ isOpen, onRequestClose, products }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resumen de Compra"
    >
      <h2>Resumen de Compra</h2>
      <CheckoutSummary products={products} /> {/* Muestra el resumen de la compra */}
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default CheckoutModal;
