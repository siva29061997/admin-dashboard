
import './css/sb-admin-2.css';
import Dashbord from './css/Dashbord';
import Users from './Users';
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';
import CreateUsers from './CreateUsers';
import Login from './Login';
import Portal from './Portal';
import Userview from './Userview';
import Productview from './Productview';
import Edituser from './Edituser';
import Editproduct from './Editproduct';
import Demo from './Demo';
import { UserProvider } from './useContaxt';
import CreateProduct from './CreateProdut';
import Signup from './Signup';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/portal" element={<Portal />} >
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<Userview />} />
          <Route path="user/edit/:id" element={<Edituser />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Productview />} />
          <Route path="product/edit/:id" element={<Editproduct />} />
          <Route path="create-users" element={<CreateUsers />} />
          <Route path="create-products" element={<CreateProduct />} />
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
