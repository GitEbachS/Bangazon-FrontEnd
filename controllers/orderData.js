import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

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

const getCart = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cartOrder/customer/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const checkOrOpenOrder = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cartOrder/new/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCartOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/cartOrder/close`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const customerClosedOrderDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/closedOrders/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const addProductToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/order/addProduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
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

const deleteProductOrder = (orderId, productId) => new Promise((resolve, reject) => {
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
  getSingleOrder, deleteOrder, customerClosedOrderDetails, addProductToOrder, deleteProductOrder, checkOrOpenOrder, updateCartOrder, getCart,
};
