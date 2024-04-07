import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { signOut } from '../utils/auth';
import { getCategoriesWithThreeProducts } from '../controllers/categoryData';
import CategoryCard from '../components/CategoryCard';

function Category() {
  const [categories, setCategories] = useState([]);

  const getCatDetails = () => {
    getCategoriesWithThreeProducts()?.then(setCategories);
  };

  useEffect(() => {
    getCatDetails();
  }, []);

  return (
    <div>
      <h1>SPICE CATEGORIES </h1>
      <p>View our most up to date spices from each category!</p>
      <div className="cat-container">
        {categories.map((category) => (
          <CategoryCard key={category.id} categoryObj={category} onUpdate={getCatDetails} />
        ))}
      </div>

      <Button variant="outline-secondary" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Category;
