import React from "react";
import { Link } from "react-router-dom";
import strelka from "./../../assets/img/strelka.png";

const LinkArrow = ({ name, product }) => {
  return (
    <div className="flex justify-start text-dark-blue">
      <Link to="/">Главная</Link> <img className="px-3" src={strelka} alt="" />
      {name}
    </div>
  );
};

export default LinkArrow;
