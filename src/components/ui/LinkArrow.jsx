import React from "react";
import { Link } from "react-router-dom";

const LinkArrow = ({ name, product }) => {
  return (
    <div className="flex justify-start text-dark-blue">
      <Link to="/">Главная</Link>{" "}
      <img className="px-3" src="/img/assets/img/strelka.png" alt="" />
      {name}
    </div>
  );
};

export default LinkArrow;
