import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CategoryCard({ categoryObj }) {
  return (
    <div key={categoryObj.id}>
      <h4 className="card-text bold noteDescription">Category Label: {categoryObj.name}</h4>
      <Card className="catCard" style={{ width: '16rem', margin: '25px' }}>

        <Card.Img variant="top" src={categoryObj.image} alt={categoryObj.name} />
      </Card>
      {categoryObj.products?.map((product) => (
        <Link href={`/product/${product.id}`} passHref>
          <Card className="catCard" style={{ width: '16rem', margin: '25px' }}>

            <Card.Body>
              <Card.Title className="catTitle">{product.name}</Card.Title>

            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>

  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    products: PropTypes.shape,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,

};

export default CategoryCard;
