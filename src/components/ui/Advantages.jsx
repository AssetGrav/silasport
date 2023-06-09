import React from "react";
import settings from "../../assets/img/settings.png";

const Advantages = () => {
  return (
    <div className="px-5">
      <h1 className="flex justify-center text-red text-2xl font-bold mt-10 mb-2">
        НАШИ ПРЕЙМУЩЕСТВА
      </h1>
      <div className="my-5 grid grid-rows-2 grid-flow-col gap-4 bg-gray-light">
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20 object-cover" src={settings} alt="new" />
          <p className="px-5">Высокое качество продукции</p>
        </div>
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20  object-cover" src={settings} alt="new" />
          <p className="px-5">Доставка в любой регион Казахстана</p>
        </div>
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20 object-cover" src={settings} alt="new" />
          <p className="px-5">Собственное производство</p>
        </div>
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20 object-cover" src={settings} alt="new" />
          <p className="px-5">Обширный ассортимент одежды для спорта</p>
        </div>
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20 object-cover" src={settings} alt="new" />
          <p className="px-5">Высокое качество продукции</p>
        </div>
        <div className="flex px-5 py-10 items-center">
          <img className="w-20 h-20 object-cover" src={settings} alt="new" />
          <p className="px-5">Выгодные цены</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
