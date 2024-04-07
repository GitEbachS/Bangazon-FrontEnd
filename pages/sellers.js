import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { signOut } from '../utils/auth';
import { getSellers } from '../controllers/userData';
import SellerCard from '../components/SellerCard';

function Seller() {
  const [sellers, setSellers] = useState([]);

  const getAllSellers = () => {
    getSellers()?.then(setSellers);
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <div>
      <h1>Sellers and Their Products</h1>
      <p>View our sellers with a link to their product store!</p>
      <div className="card-container">
        {sellers.map((seller) => (
          <SellerCard key={seller.id} sellerObj={seller} onUpdate={getAllSellers} />
        ))}
      </div>
      <p>Click the button below to logout!</p>
      <Button variant="outline-secondary" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Seller;
