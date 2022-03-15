import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Login";
import ProfileScreen from "../pages/ProfileScreen";
import CartScreen from "../pages/CartSceen";
import ShippingScreen from "../pages/ShippingScreen";
import PaymentScreen from "../pages/PaymentScreen";
import PlaceOrderScreen from "../pages/PlaceOrderScreen";
import OrderScreen from "../pages/OrderScreen";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomeScreen />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/cart">
        <Route index element={<CartScreen />} />
        <Route path=":id" element={<CartScreen />} />
      </Route>
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/placeorder" element={<PlaceOrderScreen />} />
      <Route path="/order" element={<OrderScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
