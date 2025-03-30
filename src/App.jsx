import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";

export default function App() {
  return (
    <div className="app">
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route
                path="cities"
                element={<CityList />}
              />
              <Route path="cities/:id" element={<City />} />
              <Route
                path="countries"
                element={<CountryList />}
              />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  );
}
