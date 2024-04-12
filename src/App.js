import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import Author from "./components/author/Author";
import BecomeanAuthor from "./components/becomeanAuthor/BecomeanAuthor";
import Login from "./components/login/Login";
import OrderForm from "./components/orderForm/OrderForm";
import Register from "./components/register/Register";
import Shop from "./components/shop/Shop";
// import Layout from "./components/Layout";
const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/author" element={<Author />} />
        <Route path="/becomean-author" element={<BecomeanAuthor />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderForm" element={<OrderForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
