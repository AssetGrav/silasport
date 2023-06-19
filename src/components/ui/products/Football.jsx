import React from "react";
import { Outlet } from "react-router-dom";

const Football = () => {
  return (
    <div className="container pt-36 pb-10">
      <Outlet />
    </div>
  );
};

export default Football;
