import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { signOut } from '../utils/auth';
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
      <h1>PRODUCTS </h1>
      <p>Here are our most up to date products to view!</p>
      {products.map((product) => (
        <ProductCard key={product.id} productObj={product} onUpdate={getProductDetails} />
      ))}
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Product;
