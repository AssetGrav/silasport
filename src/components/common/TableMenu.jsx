import React from "react";
import { Link } from "react-router-dom";

const TableMenu = ({ list }) => {
  console.log("list", list);
  return (
    <div className="flex flex-col mr-10 text-dark-blue">
      {list.map((elem) => (
        <Link
          to={`/${elem.host}`}
          key={elem._id}
          className="w-72 border border-dark-blue p-2 hover:bg-gray-light"
        >
          {elem.name}
        </Link>
      ))}
    </div>
  );
};

export default TableMenu;
