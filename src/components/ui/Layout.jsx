import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
