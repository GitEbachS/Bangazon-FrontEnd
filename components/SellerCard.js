import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function SellerCard({ sellerObj }) {
  return (
    <Card style={{ width: '18rem', margin: '15px auto' }}>
      <Card.Body>
        <Card.Title className="teamTitle">{sellerObj.name}</Card.Title>
        <h4>Customer Name: {sellerObj.email}</h4>
        <div className="wrapper">
          <Link href={`/user/${sellerObj.id}`} passHref>
            <Button variant="primary" className="viewBtn m-2">View the Product Store for {sellerObj.name}</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

SellerCard.propTypes = {
  sellerObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default SellerCard;
