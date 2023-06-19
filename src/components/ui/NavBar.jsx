import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Social from "./Social";
import Menu from "./Menu";
import Dropdown from "../common/Dropdown";
import { about } from "../../api/menu/header/about.api";
import { info } from "../../api/menu/header/info.api";

const NavBar = () => {
  return (
    <nav>
      <div className="w-full text-white fixed z-50">
        <div className="bg-dark-blue">
          <div className="container mx-auto">
            <div className="flex justify-between pt-2 ">
              <div className=" flex basis-2/3">
                <div className="w-16 my-3 flex flex-wrap text-xs	">
                  <div className="mx-3 bg-white w-10 h-1"></div>
                  <div className="mx-3 bg-white w-10 h-1"></div>
                  <div className="mx-3 bg-white w-10 h-1"></div>
                </div>
                <Link to="/" className="flex w-100 h-full">
                  <div className="py-2 px-20 font-bold bg-contain bg-no-repeat bg-center bg-logo"></div>
                </Link>

                <ul className="nav flex font-serif justify-start items-end pt-10 pb-1 ml-10">
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
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
