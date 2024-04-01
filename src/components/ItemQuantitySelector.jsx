import { useQuantity } from "./useQuantity";
import { useState } from "react";

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1); // Utiliza useState para el estado local
  const { quantity: quantityCart, setQuantity: setQuantityCart } =
    useQuantity(); // Renombra las variables para evitar conflictos

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    setQuantityCart(quantityCart + quantity);
  };

  const removeFromCart = () => {
    if (quantityCart >= quantity) {
      setQuantityCart(quantityCart - quantity);
    } else {
      // Si la cantidad en el carrito es menor que la cantidad seleccionada, eliminar todo el producto del carrito
      setQuantityCart(0);
    }
  };

  return (
    <div className="item-quantity-selector">
      <button className="quantity-button" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        readOnly
      />
      <button className="quantity-button" onClick={handleIncrease}>
        +
      </button>
      <button className="add-to-cart-button" onClick={addToCart}>
        Agregar al carrito
      </button>
      <button className="remove-from-cart-button" onClick={removeFromCart}>
        Quitar del carrito
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
