import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-4 my-4 border border-blue hover:border-transparent rounded">
      {text}
    </button>
  );
};

export default Button;
