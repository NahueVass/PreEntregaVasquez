import { FaShoppingCart } from 'react-icons/fa';
import { useQuantity } from './useQuantity';

const CartWidget = () => {
  const { quantity } = useQuantity();

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span className="badge badge-pill badge-danger">{quantity}</span>
    </div>
  );
};

export default CartWidget;