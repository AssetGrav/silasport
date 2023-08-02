import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Social from "./Social";
import Menu from "./Menu";
import Dropdown from "../common/Dropdown";
import { about } from "../../api/menu/header/about.api";
import { info } from "../../api/menu/header/info.api";
import { navlinks } from "../constants";

const NavBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggle = () => {
    setToggleDrawer(false);
  };

  const handleNav = (link) => {
    handleToggle();
    navigate(link);
  };

  console.log(navlinks);
  return (
    <nav>
      <div className="w-full text-white fixed z-50">
        <div className="lg:flex hidden bg-dark-blue">
          <div className="container mx-auto">
            <div className="flex justify-between pt-2 ">
              <div className=" flex basis-2/3">
                <Link to="/" className="flex w-100 h-full">
                  <div className="py-2 px-20 font-bold bg-contain bg-no-repeat bg-center bg-logo"></div>
                </Link>

                <ul className="nav flex font-serif justify-start items-end pt-10 pb-1 ml-10 xl:flex flex-wrap text-sm xl:text-base">
                  <li className="px-5">
                    <Dropdown props={about} />
                  </li>
                  <li className="pr-5">
                    <Link to="/price">ПРАЙС-ЛИСТ</Link>
                  </li>
                  <li className="pr-5">
                    <Link to="/products">КАТАЛОГ</Link>
                  </li>
                  <li className="pr-5">
                    <Dropdown props={info} />
                  </li>
                  <li className="pr-5">
                    <Link to="/contact">КОНТАКТЫ</Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end items-end pr-10 pb-1">
                <Search />
                <Social />
              </div>
            </div>
          </div>
        </div>
        {/* Small screen navigation */}

        <div
          className="lg:hidden flex justify-between items-center bg-dark-blue relative p-5"
          onMouseLeave={() => setToggleDrawer(false)}
        >
          <Link to="/" className="w-100 h-full">
            <div className="w-[60px] h-[60px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <img
                src="/img/logo.png"
                alt="user"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          </Link>
          <img
            src="/img/menu.svg"
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div
            className={`absolute top-[60px] right-0 left-0 bg-dark-blue z-10 shadow-secondary py-4 ${
              !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`}
          >
            <ul className="mb-4">
              {navlinks.map((Link) => (
                <li
                  key={Link.name}
                  className={`flex p-4 ${isActive === Link.name && "bg-gray"}`}
                  onMouseEnter={() => setIsActive(Link.name)}
                >
                  {Link.str === false && (
                    <Dropdown
                      props={Link.link}
                      handleToggle={handleToggle}
                      imgShow={true}
                    />
                  )}

                  {Link.str === true && (
                    <p
                      className="uppercase w-full"
                      onClick={() => handleNav(Link.link)}
                    >
                      {Link.name}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
