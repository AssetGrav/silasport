import React, { useState } from "react";
import DropItem from "./DropItem";

const Dropdown = ({ props }) => {
  const [isShown, setIsShown] = useState();

  return (
    <div className="relative text-left" onMouseLeave={() => setIsShown(false)}>
      <div onMouseEnter={() => setIsShown(true)}>{props.name}</div>
      <div onMouseLeave={() => setIsShown(false)}>
        <div
          className={`absolute w-96 left-0 -translate-x-28 z-10 divide-y divide-gray rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none text-black transition delay-2000`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {isShown && (
            <ul>
              {props.list.map((elem) => (
                <li key={elem._id}>
                  <DropItem name={elem.name} host={elem.host} list={elem} />
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
