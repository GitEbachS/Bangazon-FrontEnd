import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSellerOrderProducts = (sellerId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/sellerProducts/allOrders/${sellerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllSellerProducts = (sellerId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/sellers/${sellerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSellerProductsByCategory = (sellerId, categoryId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/categories/${sellerId}/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getTwentyProducts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/twentyProducts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const searchProducts = (userInput) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/search/${userInput}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllProducts, getSingleProduct, getSellerOrderProducts, getAllSellerProducts, getSellerProductsByCategory, getTwentyProducts, searchProducts,
};
