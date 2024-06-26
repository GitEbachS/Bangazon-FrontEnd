import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import ProductCard from '../components/ProductCard';
import { getTwentyProducts } from '../controllers/productData';
import UserForm from '../components/forms/UserForm';
import { getSingleUser } from '../controllers/userData';

function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const [singleUser, setSingleUser] = useState(null);

  const getTProducts = () => {
    getTwentyProducts()?.then(setProducts);
  };

  useEffect(() => {
    getSingleUser(user.id).then(setSingleUser);

    getTProducts();
  }, [user.id]);

  const onUpdate = () => {
    getSingleUser(user.id).then(setSingleUser);
    getTwentyProducts()?.then(setProducts);
  };

  return (
    <div>
      { singleUser === null ? (<UserForm onUpdate={onUpdate} />) : (

        <div>
          <><h3>Hello {user.fbUser.displayName}! </h3><p className="orderTitle">Here are our most up to date products to view!</p></>
          <div className="card-container">
            {products.map((product) => (
              <ProductCard key={product.id} productObj={product} onUpdate={getTProducts} />
            ))}
          </div>
        </div>

      )}

    </div>
  );
}

export default Home;
