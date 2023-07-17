import React, { useState } from "react";
import { sportType } from "../../api/menu/total-menu/sportType.api";
import { football } from "../../api/menu/total-menu/football.api";
import { basketball } from "../../api/menu/total-menu/basketball.api";
import { clothes } from "../../api/menu/total-menu/clothes.api";
import { drawing } from "../../api/menu/total-menu/drawing.api";
import { services } from "../../api/menu/total-menu/services.api";
import DropItem from "../common/DropItem";
import { volleyball } from "../../api/menu/total-menu/volleyball.api";
import { attributes } from "../../api/menu/total-menu/attributes.api";
import { hockey } from "../../api/menu/total-menu/hockey.api";

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
    attributes,
  ];
  const handleClick = () => {
    setTimeout(() => {
      setIsShown("");
    }, 500);
  };
  return (
    <div className="text-left" onMouseLeave={() => setIsShown("")}>
      <div className="flex flex-row justify-center bg-white py-5">
        {arr.map((obj) => (
          <div
            key={obj.name}
            className={`px-5 relative ${
              obj.name.toLowerCase() === "атрибуты"
                ? ""
                : "border-r-2 border-blue"
            }`}
          >
            <div
              onMouseEnter={() => setIsShown(obj.name)}
              className="text-red hover:text-dark-blue"
            >
              {obj.name}
            </div>
            <div onMouseLeave={() => setIsShown("")}>
              <div
                className="absolute w-96 left-0 z-10 divide-y divide-gray rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none text-black transition delay-2000"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {isShown === obj.name && (
                  <ul className="flex-row justify-center py-2">
                    {obj.list.map((elem) => (
                      <li key={elem._id} className="">
                        <DropItem
                          name={elem.name}
                          list={elem}
                          menu={true}
                          onClick={handleClick}
                          className="p-96"
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
