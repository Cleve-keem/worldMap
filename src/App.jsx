import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Components/CityList";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
