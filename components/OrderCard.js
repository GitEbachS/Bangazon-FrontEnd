import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteOrder } from '../controllers/orderData';
import { getSingleUser } from '../controllers/userData';

function OrderCard({ orderObj, onUpdate }) {
  const [customer, getCustomer] = useState({});
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${orderObj.id}?`)) {
      deleteOrder(orderObj.id).then(() => onUpdate());
    }
  };
  const getSingleCustomer = () => {
    getSingleUser(orderObj.customerId).then(getCustomer);
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
          <Link href={`/team/${orderObj.id}`} passHref>
            <Button variant="primary" className="viewBtn m-2">VIEW</Button>
          </Link>
          <h4>List of Products:</h4>
          {orderObj.products?.map((product) => (
            <Link href={`/product/${product.id}`} passHref> <Button variant="primary" className="viewBtn m-2">{product.name}</Button></Link>
          ))}
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
    dateCreated: PropTypes.string,
    shipping: PropTypes.string,
    id: PropTypes.number,
    isClosed: PropTypes.bool,
    totalCost: PropTypes.number,
    customerId: PropTypes.number,
    products: PropTypes.shape,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
