import React, { useEffect, useState } from "react";
import { sportType } from "../../api/menu/total-menu/sportType.api";
import { football } from "../../api/menu/total-menu/football.api";
import { basketball } from "../../api/menu/total-menu/basketball.api";
import { hockey } from "../../api/menu/total-menu/hockey.api";
import { clothes } from "../../api/menu/total-menu/clothes.api";
import { drawing } from "../../api/menu/total-menu/drawing.api";
import { services } from "../../api/menu/total-menu/services.api";
import DropItem from "../common/DropItem";
import { volleyball } from "../../api/menu/total-menu/volleyball.api";

const Menu = () => {
  const [isShown, setIsShown] = useState();

  const arr = [
    sportType,
    football,
    basketball,
    volleyball,
    hockey,
    clothes,
    drawing,
    services,
  ];
  const handleClick = () => {
    setTimeout(() => {
      setIsShown("");
    }, 500);
  };
  return (
    <div
      className="relative text-left  mt-5 "
      onMouseLeave={() => setIsShown("")}
    >
      <div className="flex flex-row justify-center bg-white">
        {arr.map((obj) => (
          <div key={obj.name} className="mx-5">
            <div
              onMouseEnter={() => setIsShown(obj.name)}
              className="text-red hover:text-dark-blue"
            >
              {obj.name}
            </div>
            <div onMouseLeave={() => setIsShown("")}>
              <div
                className="absolute w-full left-0 z-10 divide-y divide-gray rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none text-black"
                role="menu"
                // aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {isShown === obj.name && (
                  <ul className="flex flex-row justify-center">
                    {obj.list.map((elem) => (
                      <li key={elem._id}>
                        <DropItem
                          name={elem.name}
                          list={elem}
                          menu={true}
                          onClick={handleClick}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
