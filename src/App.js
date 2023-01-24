import './css/sb-admin-2.css';
import Dashbord from './css/Dashbord';
import Users from './components/Users';
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';
import CreateUsers from './components/CreateUsers';
import Login from './pages/Login';
import Portal from './components/Portal';
import Userview from './components/Userview';
import Productview from './components/Productview';
import Edituser from './components/Edituser';
import Editproduct from './components/Editproduct';
import { UserProvider } from './useContaxt';
import CreateProduct from './components/CreateProdut';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
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
