import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 3;

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span className="badge badge-pill badge-danger">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;