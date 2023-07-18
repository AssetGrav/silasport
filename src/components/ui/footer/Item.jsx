import React from "react";
import { Link } from "react-router-dom";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <div
          key={link.name}
          className="text-white hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
        >
          <Link to={link.link}>{link.name}</Link>
        </div>
      ))}
    </ul>
  );
};

export default Item;
