import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const customerOpenOrderDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/productOrders/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const customerClosedOrderDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/openOrder/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/addOrder`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addProductToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/order/addProduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/updateOrder/${payload.orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteOrder = (orderId, productId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/order/${orderId}/deleteProduct/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllOrders, getSingleOrder, customerOpenOrderDetails, customerClosedOrderDetails, createOrder, addProductToOrder, updateOrder, deleteOrder,
};
