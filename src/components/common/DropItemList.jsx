import React from "react";
import { Link } from "react-router-dom";

const DropItemList = ({ list, menu }) => {
  return (
    <>
      {list.map((elem) => (
        <Link
          to={`${menu === true ? "products" : ""}/${elem.host}`}
          state={{ some: `${elem.host}` }}
          key={elem._id}
        >
          <div
            key={elem._id}
            className="p-2 w-full text-dark-blue block px-4 hover:bg-gray-light"
          >
            {elem.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropItemList;
