import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteOrder } from '../controllers/orderData';
import { getSingleUser } from '../controllers/userData';

function OrderCard({ orderObj, onUpdate }) {
  const [customer, setCustomer] = useState({});
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${orderObj.id}?`)) {
      deleteOrder(orderObj.id).then(() => onUpdate());
    }
  };
  const getSingleCustomer = () => {
    getSingleUser(orderObj.customerId)?.then(setCustomer);
  };

  useEffect(() => {
    getSingleCustomer();
  }, []);

  return (
    <Card style={{ width: '18rem', margin: '15px auto' }}>
      <Card.Body>
        <Card.Title className="teamTitle">Order#{orderObj.id}</Card.Title>
        <h4>Customer Name: {customer.name}</h4>
        <h4>Payment Type: {orderObj.paymentType}</h4>
        <h4>Is Order Closed? {orderObj.isClosed ? 'Yes' : 'No'}</h4>
        <h4>Shipping Type: {orderObj.shipping}</h4>
        <h4>Total Cost: {orderObj.totalCost}</h4>
        <div className="wrapper">
          <Link href={`/order/${orderObj.id}`} passHref>
            <div>
              <Button variant="primary" className="viewBtn m-2">VIEW</Button>
            </div>
          </Link>
          <h4>List of Products:</h4>
          <div>
            {orderObj.products?.map((product) => (
              <div key={product.id}>
                <Link href={`/product/${product.id}`} passHref>
                  <div className="m-2">
                    <Button variant="primary" className="viewBtn m-2">{product.name}</Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Button variant="outline-warning" size="sm" onClick={deleteThisOrder} className="deleteBtn m-2">
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    paymentType: PropTypes.string,
    dateCreated: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    shipping: PropTypes.string,
    id: PropTypes.number,
    isClosed: PropTypes.bool,
    totalCost: PropTypes.number,
    customerId: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      categoryId: PropTypes.number,
      sellerId: PropTypes.number,
      seller: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    })),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
