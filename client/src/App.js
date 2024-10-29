import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoutes';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import User from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import ProductDetail from './pages/Admin/ProductDetail';  // Corrected import
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="user" element={<Dashboard />} />
              <Route path="user/orders" element={<Orders />} />
              <Route path="user/profile" element={<Profile />} />
            </Route>
            <Route path="/dashboard" element={<AdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/create-category" element={<CreateCategory />} />
              <Route path="admin/create-product" element={<CreateProduct />} />
              <Route path="admin/product-Detail" element={<ProductDetail />} />
              <Route path="admin/product" element={<Products />} />
              <Route path="admin/users" element={<User />} />
            </Route>

            {/* Add the dynamic product detail route here */}
            <Route path="/dashboard/admin/product/:id" element={<ProductDetail />} />

            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </>
      </div>
    </div>
  );
}

export default App;
