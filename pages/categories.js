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
      <h1>CATEGORIES </h1>
      <p>Here are our most up to date products to view for each category!</p>
      {categories.map((category) => (
        <CategoryCard key={category.id} categoryObj={category} onUpdate={getCatDetails} />
      ))}
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Category;
