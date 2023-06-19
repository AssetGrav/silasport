import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, host }) => {
  return (
    <Link to={"/products/" + host} state={{ some: `${host}` }}>
      <button className="max-h-10 text-justify bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-2  border border-blue hover:border-red rounded">
        {text}
      </button>
    </Link>
  );
};

export default Button;
