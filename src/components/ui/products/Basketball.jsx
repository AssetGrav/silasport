import React from "react";
import { Outlet } from "react-router-dom";

const Basketball = () => {
  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <Outlet />
    </div>
  );
};

export default Basketball;
