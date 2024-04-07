import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function SellerCard({ sellerObj }) {
  return (
    <Card className="card-style" style={{ width: '38rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={sellerObj.image} alt={sellerObj.name} />
        <Card.Title className="teamTitle">Name: {sellerObj.name}</Card.Title>
        <h4>Email: {sellerObj.email}</h4>
        <div className="wrapper">
          <Link href={`/user/${sellerObj.id}`} passHref>
            <Button id="sellerBtn" className="viewBtn m-2">View Product Store</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

SellerCard.propTypes = {
  sellerObj: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default SellerCard;
