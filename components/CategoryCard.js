import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CategoryCard({ categoryObj }) {
  <Card className="catCard" style={{ width: '16rem', margin: '25px' }}>
    <Card.Body>
      <Card.Title className="catTitle">Category</Card.Title>
      <p className="card-text bold noteDescription">Name: {categoryObj.description}</p>
    </Card.Body>
  </Card>;
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,

};

export default CategoryCard;
