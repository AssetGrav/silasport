import React from "react";
import DropItemList from "./DropItemList";
import { Link } from "react-router-dom";

const DropItem = ({ name, list, menu, onClick }) => {
  return (
    <div
      className="py-1 px-5 bg-white text-black"
      role="none"
      onMouseDown={onClick}
    >
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      {!list.type ? (
        <div className="">
          <Link
            to={`${menu === true ? "products" : ""}/${list.host}`}
            state={{ some: `${list.host}` }}
          >
            <p className="text-dark-blue px-2 hover:bg-gray-light hover:rounded-lg hover:text-red">
              {name}
            </p>
          </Link>
        </div>
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
