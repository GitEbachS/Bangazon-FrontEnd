import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import ProductCard from '../components/ProductCard';
import { getTwentyProducts } from '../controllers/productData';

function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  const getTProducts = () => {
    getTwentyProducts()?.then(setProducts);
  };

  useEffect(() => {
    getTProducts();
  }, []);

  console.warn(products);

  return (
    <div>
      <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Here are our most up to date products to view!</p>
      {products.map((product) => (
        <ProductCard key={product.id} productObj={product} onUpdate={getTProducts} />
      ))}
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
