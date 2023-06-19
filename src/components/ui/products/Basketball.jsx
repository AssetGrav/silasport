import React from "react";
import LinkArrow from "../LinkArrow";
import { Outlet } from "react-router-dom";

const Basketball = () => {
  return (
    <div className="container pt-36 pb-10">
      <Outlet />
    </div>
  );
};

export default Basketball;
