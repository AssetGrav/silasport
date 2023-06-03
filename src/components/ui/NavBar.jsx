import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Social from "./Social";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto text-white ">
        <div className="flex justify-between pt-2 bg-dark-blue">
          <div className=" flex basis-1/2">
            <Link to="/" className="flex w-100 h-full my-5">
              <div className="py-2 px-20 font-bold bg-contain bg-no-repeat bg-center bg-logo"></div>
            </Link>

            <ul className="nav flex font-serif justify-start items-end pt-10 pb-1 ml-10">
              <li className="pr-5">
                <Link to="/about">О КОМПАНИИ</Link>
              </li>
              <li className="pr-5">
                <Link to="/products">ПРАЙС-ЛИСТ</Link>
              </li>
              <li className="pr-5">
                <Link to="/services">КАТАЛОГ</Link>
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
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
