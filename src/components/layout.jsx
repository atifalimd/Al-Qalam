// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet /> {/* This renders the page content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
