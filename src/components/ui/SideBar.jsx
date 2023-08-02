import React, { useState } from "react";
import { arr } from "./Menu";
import DropItem from "../common/DropItem";

const Sidebar = () => {
  const [isShown, setIsShown] = useState();

  const handleClick = () => {
    setTimeout(() => {
      setIsShown("");
    }, 500);
  };

  console.log("arr", arr);
  return (
    <div
      className="flex justify-between items-center flex-col sticky "
      onMouseLeave={() => setIsShown("")}
    >
      <div className="flex-1 flex flex-col justify-between -translate-x-[50px] hover:translate-x-0 items-center bg-dark-blue rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3 my-2">
          {arr.map((Link) => (
            <div key={Link.name}>
              <div
                onMouseEnter={() => setIsShown(Link.name)}
                className="bg-white w-[30px] h-[30px] rounded"
              >
                <img
                  src={Link.image}
                  alt={Link.name}
                  className="w-full h-full"
                />
              </div>
              <div onMouseLeave={() => setIsShown("")}>
                <div
                  className={`absolute w-[250px] left-16 -translate-y-28 z-10 divide-y divide-gray rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none text-black transition delay-2000"
                  role="menu ${
                    Link.name === "УСЛУГИ" ? "-translate-y-40" : ""
                  }`}
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  {isShown === Link.name && (
                    <>
                      <div className="flex justify-center py-3">
                        {Link.name}
                      </div>
                      <ul className="flex-row justify-center py-2">
                        {Link.list.map((elem) => (
                          <li key={elem._id} className="">
                            <DropItem
                              name={elem.name}
                              list={elem}
                              menu={true}
                              onClick={handleClick}
                            />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
