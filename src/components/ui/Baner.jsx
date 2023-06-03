import React from "react";
import Video from "./Video";

const Baner = () => {
  return (
    <div className="flex my-5 bg-gray-light px-10">
      <div className="ml-10">
        <h1 className="flex text-5xl font-bold my-5 pt-5 ">
          <p className="text-red">SilaSport</p> - пошив спортивной одежды на
          заказ.
        </h1>
        <ul className="tracking-widest leading-8 text-xl">
          <li>Более 200 позиций спортивной одежды</li>
          <li>Производство сувенирной продукции</li>
          <li>Все технологии нанесения</li>
          <li>Экипируем спортивные команды</li>
        </ul>
        <button className="bg-transparent hover:bg-blue text-dark-blue font-semibold hover:text-white py-2 px-4 my-4 border border-blue hover:border-transparent rounded">
          перейти в каталог
        </button>
      </div>
      <div className="flex ml-16">
        <Video />
      </div>
    </div>
  );
};

export default Baner;
