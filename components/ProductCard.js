/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { addProductToOrder, deleteProductOrder, getCart } from '../controllers/orderData';
import { useAuth } from '../utils/context/authContext';

function ProductCard({ productObj }) {
  const { user } = useAuth();
  const [added, setAdded] = useState(false);

  const addedProducts = () => {
    getCart(user.id)?.then((order) => {
      order.products.forEach((product) => {
        if (product.id === productObj.id) {
          setAdded(true);
        }
      });
    });
  };
  const addToCart = () => {
    getCart(user.id)?.then((order) => {
      const payload = { orderId: order.id, productId: productObj.id };
      addProductToOrder(payload).then(() => {
        addedProducts();
      });
    });
  };

  const removeFromCart = () => {
    getCart(user.id)?.then((order) => {
      deleteProductOrder(order.id, productObj.id).then(() => {
        setAdded(false);
        addedProducts();
      });
    });
  };
  useEffect(() => {
    addedProducts();
  }, [user.id]);

  return (
    <Card style={{ width: '18rem', margin: '15px auto' }}>
      <Card.Body>
        <Card.Title className="teamTitle">Product#{productObj.id}</Card.Title>
        <h4>Product Name: {productObj.name}</h4>
        <Link passHref href={`/user/${productObj.sellerId}`}>
          <span style={{ color: 'blue', cursor: 'pointer' }}>Seller: {productObj.seller.name}</span>
        </Link>
        <h4>Description: {productObj.description}</h4>
        <h4>Price: {productObj.price}</h4>
        <h4>Quantity: {productObj.quantity}</h4>
        <h4>Category: {productObj.category?.name}</h4>
        <h4>Quantity: {productObj.totalSales}</h4>
        <div>
          <Link href={`/product/${productObj.id}`} passHref>
            <Button variant="primary" className="viewBtn m-2">VIEW</Button>
          </Link>
        </div>

        {added ? <Button variant="primary" onClick={removeFromCart} className="viewBtn m-2">Remove From Cart</Button> : <Button variant="primary" onClick={addToCart} className="viewBtn m-2">Add To Cart</Button>}

      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    seller: PropTypes.shape,
    sellerId: PropTypes.number,
    orders: PropTypes.shape,
    totalSales: PropTypes.string,
    categoryId: PropTypes.number,
    category: PropTypes.shape,
  }).isRequired,

};

export default ProductCard;
