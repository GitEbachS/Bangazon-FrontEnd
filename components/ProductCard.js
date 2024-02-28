import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function ProductCard({ productObj }) {
  return (
    <Card style={{ width: '18rem', margin: '15px auto' }}>
      <Card.Body>
        <Card.Title className="teamTitle">Product#{productObj.id}</Card.Title>
        <h4>Product Name: {productObj.name}</h4>
        <Link passHref href={`/user/${productObj.sellerId}`}>
          <span style={{ color: 'blue', cursor: 'pointer' }}>Seller: {productObj.seller.name}</span>
        </Link>
        <h4>Description: {productObj.description}</h4>
        <h4>Price: {productObj.price}</h4>
        <h4>Quantity: {productObj.quantity}</h4>
        <h4>Category: {productObj.category?.name}</h4>
        <Link href={`/product/${productObj.id}`} passHref>
          <Button variant="primary" className="viewBtn m-2">VIEW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    seller: PropTypes.shape,
    sellerId: PropTypes.number,
    orders: PropTypes.shape,
    categoryId: PropTypes.number,
    category: PropTypes.shape,
  }).isRequired,

};

export default ProductCard;
