import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../controllers/productData';

function Product() {
  const [products, setProducts] = useState([]);

  const getProductDetails = () => {
    getAllProducts()?.then(setProducts);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div>
      <h1>PRODUCT STORE </h1>
      <p>Select from our various spices that come from around the world!</p>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard key={product.id} productObj={product} onUpdate={getProductDetails} />
        ))}
      </div>
    </div>
  );
}

export default Product;
