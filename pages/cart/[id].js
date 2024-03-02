import { useEffect, useState } from 'react';
import { getCart } from '../../controllers/orderData';
import { useAuth } from '../../utils/context/authContext';
import ProductCard from '../../components/ProductCard';

function Cart() {
  const { user } = useAuth();
  const [cartOrder, setCartOrder] = useState({});

  const getCartOrder = () => {
    getCart(user.id)?.then(setCartOrder);
  };

  useEffect(() => {
    getCartOrder();
  }, []);
  console.warn(cartOrder);
  return (
    <div>
      <h1>CUSTOMER CART DETAILS </h1>
      <p>Here are all of the products in your cart!</p>

      <h1>Order#{cartOrder.id}</h1>
      <h4>Customer Name: {user.name}</h4>
      <h4>Payment Type: {cartOrder.paymentType}</h4>
      <h4>Is Order Closed? {cartOrder.isClosed ? 'Yes' : 'No'}</h4>
      <h4>Shipping Type: {cartOrder.shipping}</h4>
      <h4>Total Cost: {cartOrder.totalCost}</h4>
      <h3>Product List:</h3>
      {cartOrder.Products && cartOrder.Products?.map((product) => (
        <ProductCard key={product.id} orderObj={product} onUpdate={getCartOrder} />
      ))}

      {!cartOrder.Products && <p>There are no products in your cart!</p>}

    </div>

  );
}

export default Cart;
