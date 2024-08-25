import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import axios from "axios";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/NotFound/NotFound";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API Key:", error);
    }
  } 
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  //window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<ProtectedRoute isAdmin={false} component={Profile} />} />
        <Route path="/me/update" element={<ProtectedRoute isAdmin={false} component={UpdateProfile} />} />
        <Route path="/password/update" element={<ProtectedRoute isAdmin={false} component={UpdatePassword} />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login/shipping" element={<ProtectedRoute isAdmin={false} component={Shipping} />} />
        <Route path="/success" element={<ProtectedRoute isAdmin={false} component={OrderSuccess} />} />
        <Route path="/orders" element={<ProtectedRoute isAdmin={false} component={MyOrders} />} />
        <Route path="/order/confirm" element={<ProtectedRoute isAdmin={false} component={ConfirmOrder} />} />
        <Route path="/order/:id" element={<ProtectedRoute isAdmin={false} component={OrderDetails} />} />
        
        {stripeApiKey && (
          <Route path="/process/payment" element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute isAdmin={false} component={Payment} />
            </Elements>
          } />
        )}

        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true} component={Dashboard} />} />
        <Route path="/admin/products" element={<ProtectedRoute isAdmin={true} component={ProductList} />} />
        <Route path="/admin/product" element={<ProtectedRoute isAdmin={true} component={NewProduct} />} />
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />} />
        <Route path="/admin/orders" element={<ProtectedRoute isAdmin={true} component={OrderList} />} />
        <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />} />
        <Route path="/admin/users" element={<ProtectedRoute isAdmin={true} component={UsersList} />} />
        <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true} component={UpdateUser} />} />
        <Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true} component={ProductReviews} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

