import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSellerClosedOrderProducts, getSellerOrderProducts } from '../../controllers/productData';
import { signOut } from '../../utils/auth';
import OrderCard from '../../components/OrderCard';

function SellerDashboard() {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState([]);
  const [closedProducts, setClosedProducts] = useState([]);

  const getProductsOrders = () => {
    getSellerOrderProducts(id).then(setProducts);
    getSellerClosedOrderProducts(id).then(setClosedProducts);
  };

  useEffect(() => {
    getProductsOrders();
  }, [id]);

  return (
    <div>
      <h1>PRODUCTS IN ALL COMPLETED ORDERS</h1>
      <p>Here are all of {closedProducts.name} orders to view!</p>
      {closedProducts.map((closedProduct) => (
        <OrderCard key={closedProduct.id} orderObj={closedProduct} onUpdate={getProductsOrders} />

      ))}

      <h1>PRODUCTS IN  ALL ORDERS</h1>
      <p>Here are all of the completed orders with products from {products.name} to view!</p>
      {products.map((product) => (
        <OrderCard key={product.id} orderObj={product} onUpdate={getProductsOrders} />
      ))}

      {/* <h1>VIEW TOTAL SALES</h1>
      <p>Here is the total sales for {products.name} to view!</p>
      {products.map((product) => (
        <ProductCard key={product.id} sellerObj={product} onUpdate={getProductsOrders} />
      ))}

      <h1>VIEW TOTAL INVENTORY BY CATEGORY</h1>
      {products.map((product) => (
        <ProductCard key={product.id} sellerObj={product} onUpdate={getProductsOrders} />
      ))} */}

      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default SellerDashboard;
