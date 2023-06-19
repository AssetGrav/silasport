import React from "react";
import DropItemList from "./DropItemList";
import { Link } from "react-router-dom";

const DropItem = ({ name, list, menu, onClick }) => {
  return (
    <div className="py-1 bg-white text-black" role="none" onMouseDown={onClick}>
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      {!list.type ? (
        <Link
          to={`${menu === true ? "products" : ""}/${list.host}`}
          state={{ some: `${list.host}` }}
        >
          <p className="text-dark-blue w-full flex px-4 py-2 hover:bg-gray-light">
            {name}
          </p>
        </Link>
      ) : (
        <div className="w-full m-10">
          <div
            href="#"
            className="text-gray px-4 py-2 text-sm font-bold"
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
