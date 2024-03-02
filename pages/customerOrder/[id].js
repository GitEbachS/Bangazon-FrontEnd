import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OrderCard from '../../components/OrderCard';
import { customerClosedOrderDetails } from '../../controllers/orderData';
import { signOut } from '../../utils/auth';

function Order() {
  const router = useRouter();
  const { id } = router.query;
  const [orders, setOrders] = useState([]);

  const getCustOrders = () => {
    customerClosedOrderDetails(id)?.then(setOrders);
  };

  useEffect(() => {
    getCustOrders();
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>CUSTOMER ORDER DETAILS </h1>
      <p>Here are all of the current orders to view!</p>
      <div>
        {orders?.map((order) => (
          <OrderCard key={order.id} orderObj={order} onUpdate={getCustOrders} />
        ))}
      </div>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Order;
