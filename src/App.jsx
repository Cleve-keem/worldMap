import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="app"
            element={
              <AppLayout>
                <Route path="cities" element={<p>List of cities</p>} />
                <Route path="countries" element={<p>List of countries</p>} />
                <Route path="form" element={<p>Form</p>} />
              </AppLayout>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
