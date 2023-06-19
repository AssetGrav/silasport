import React from "react";
import LinkArrow from "../ui/LinkArrow";
import { Outlet } from "react-router-dom";
import Catalog from "../ui/Catalog";

const Products = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Каталог" />
      <Outlet />
      <Catalog />
      <div className="flex flex-row px-5 py-10"></div>
    </div>
  );
};

export default Products;
