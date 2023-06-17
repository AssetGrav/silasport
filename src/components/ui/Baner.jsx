import React from "react";
import Button from "../common/Button";
import Video from "../common/Video";

const Baner = () => {
  return (
    <div className="flex my-5 bg-gray-light px-10 ">
      <div className="ml-10">
        <h1 className="flex text-5xl font-bold my-5">
          <p className="text-red pr-3">SilaSport</p>- пошив спортивной одежды на
          заказ.
        </h1>
        <ul className="tracking-widest leading-8 text-xl">
          <li>Более 200 позиций спортивной одежды</li>
          <li>Производство сувенирной продукции</li>
          <li>Все технологии нанесения</li>
          <li>Экипируем спортивные команды</li>
        </ul>
        <div className="py-10">
          <Button text="перейти в каталог" host="products" className="py-10" />
        </div>
      </div>
      <div className="flex ml-16">
        <Video videoId="-5ajVJ1Yxlg" />
      </div>
    </div>
  );
};

export default Baner;
