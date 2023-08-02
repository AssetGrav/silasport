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
            className="p-1 w-full text-dark-blue hover:bg-gray-light hover:rounded-lg hover:text-red"
          >
            {elem.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropItemList;
