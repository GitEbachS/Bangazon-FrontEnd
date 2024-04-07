/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getSingleUser } from '../controllers/userData';
import { deleteOrder } from '../controllers/orderData';

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
    <Card className="card-style" style={{ width: '38rem' }}>
      <Card.Body>
        <Card.Title className="orderTitle">Order#{orderObj.id}</Card.Title>
        <h4>Customer Name: {customer.name}</h4>
        <h4>Payment Type: {orderObj.paymentType}</h4>
        <h4>Order Status: {orderObj.isClosed ? 'Closed' : 'Open'}</h4>
        <h4>Shipping Type: {orderObj.shipping}</h4>
        <h4>Total Cost: {orderObj.totalCost}</h4>
        <div className="wrapper">
          <Link href={`/order/${orderObj.id}`} passHref>
            <div>
              <Button id="viewbtn" className="viewBtn m-2">VIEW</Button>
            </div>
          </Link>
          <h3 className="orderTitle">List of Products:</h3>
          <div>
            {orderObj.products?.map((product) => (
              <div id="linkbtn" key={product.id}>
                <Link href={`/product/${product.id}`} passHref>
                  {product.name}
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
