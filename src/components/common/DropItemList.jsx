import React from "react";

const DropItemList = ({ list }) => {
  return (
    <>
      {list.map((elem) => (
        <div
          key={elem._id}
          className="p-2 w-full text-dark-blue block px-4 hover:bg-gray-light"
        >
          {elem.name}
        </div>
      ))}
    </>
  );
};

export default DropItemList;
