import React, { useState } from "react";
import DropItem from "./DropItem";

const Dropdown = ({ props, handleToggle, imgShow }) => {
  const [isShown, setIsShown] = useState(false);

  console.log("props2", props);

  return (
    <div
      className="relative text-left w-full"
      onMouseLeave={() => setIsShown(false)}
    >
      <div
        onMouseEnter={() => setIsShown(true)}
        className="flex flex-row justify-between"
      >
        <p>{props.name}</p>
        {imgShow && (
          <img
            src="/img/dropdown.png"
            alt="dropdown"
            className="w-[15px] h-[10px]"
          />
        )}
      </div>
      <div onMouseLeave={() => setIsShown(false)}>
        <div
          className={`absolute w-96 left-0 lg:-translate-x-28 z-10 divide-y divide-gray rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none text-black transition delay-2000`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {isShown && (
            <ul>
              {props.list.map((elem) => (
                <li key={elem._id}>
                  <DropItem
                    name={elem.name}
                    host={elem.host}
                    list={elem}
                    onClick={handleToggle}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
