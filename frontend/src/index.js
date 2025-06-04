import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Landing_page/Home/HomePage";

import { CookiesProvider } from "react-cookie";
import Login from "./Landing_page/auth/Login";
import Signup from "./Landing_page/auth/Signup";

import ProductPage from "./Landing_page/products/ProductPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import AboutPage from "./Landing_page/about/AboutPage";
import SupportPage from "./Landing_page/support/SupportPage";

import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
