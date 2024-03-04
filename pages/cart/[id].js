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
      {cartOrder.products ? cartOrder.products?.map((product) => (
        <ProductCard key={product.id} productObj={product} onUpdate={getCartOrder} />)) : <p>There are no items in your cart!</p>}
    </div>

  );
}

export default Cart;
