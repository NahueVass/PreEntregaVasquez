
const CheckoutSummary = ({ products }) => {
  return (
    <div className="checkout-summary">
      <h3>Resumen de Compra</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Cantidad: {product.quantity} - Precio: ${product.price * product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${products.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
    </div>
  );
};

export default CheckoutSummary;
