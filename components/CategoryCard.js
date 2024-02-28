import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CategoryCard({ categoryObj }) {
  return (
    <Card className="catCard" style={{ width: '16rem', margin: '25px' }}>
      <Card.Body>
        <Card.Title className="catTitle">Category</Card.Title>
        <p className="card-text bold noteDescription">Category Name: {categoryObj.name}</p>
        {categoryObj.products?.map((product) => (
          <Link href={`/product/${product.id}`} passHref>{product.name}</Link>
        ))}
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    products: PropTypes.shape,
    name: PropTypes.string,
  }).isRequired,

};

export default CategoryCard;
