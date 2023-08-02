import React from "react";
import DropItemList from "./DropItemList";
import { Link } from "react-router-dom";

const DropItem = ({ name, list, menu, onClick }) => {
  return (
    <div
      className="py-1 px-5 bg-white text-black"
      role="none"
      onClick={onClick}
    >
      {!list.type ? (
        <Link
          to={`${menu === true ? "products" : ""}/${list.host}`}
          state={{ some: `${list.host}` }}
        >
          <p className="text-dark-blue px-2 w-full hover:bg-gray-light hover:rounded-lg hover:text-red">
            {name}
          </p>
        </Link>
      ) : (
        <div className="w-full">
          <div
            href="#"
            className="text-black px-4 py-2 text-sm font-bold"
            role="menuitem"
            id="menu-item-0"
          >
            {list.type}
          </div>
          <div className="grid grid-cols-1 ">
            <DropItemList list={list.arr} menu={menu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropItem;
