import './App.css'
import Cart from './Cart';
import CartItems from './CartItems';
import Counter from './Counter';
import { Products } from './Products';
import Theme from './Theme';
import UserDashboard from './UserDashboard';
import ViewCart from './ViewCart';

function App() {
  return (
    <>
      {/* <Theme />
      <Cart />
      <ViewCart /> */}
      <Counter />
      <CartItems />
      <UserDashboard />
      <Products />
    </>
  );
}

export default App
