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
      <h1>PRODUCTS </h1>
      <p>Here are our most up to date sellers to view!</p>
      {sellers.map((seller) => (
        <SellerCard key={seller.id} sellerObj={seller} onUpdate={getAllSellers} />
      ))}
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Seller;
