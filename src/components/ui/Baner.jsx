import React from "react";
import Video from "../common/Video";
import { Link } from "react-router-dom";

const Baner = () => {
  return (
    <div className="flex my-5 bg-baner bg-cover px-2 md:px-10  ">
      <div className="ml-10">
        <h1 className="flex text-2xl lg:text-5xl font-bold my-5">
          <p className="text-red pr-3">SilaSport</p>- пошив спортивной одежды на
          заказ.
        </h1>
        <ul className="tracking-widest leading-8 text-base md:text-xl">
          <li>Более 200 позиций спортивной одежды</li>
          <li>Производство сувенирной продукции</li>
          <li>Все технологии нанесения</li>
          <li>Экипируем спортивные команды</li>
        </ul>
        <div className="py-10">
          <Link to="/products">
            <button className="max-h-10 text-justify bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-2  border border-blue hover:border-red rounded">
              Перейти в каталог
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex ml-16">
        <Video videoId="-5ajVJ1Yxlg" />
      </div>
    </div>
  );
};

export default Baner;
