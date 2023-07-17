import React from "react";

const Advantages = () => (
  <div className="px-5">
    <h1 className="flex justify-center text-red text-2xl font-bold mt-14 mb-10">
      НАШИ ПРЕЙМУЩЕСТВА
    </h1>
    <div className="my-5 grid grid-rows-2 grid-flow-col gap-4 bg-gray-light p-10">
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20 object-contain"
          src="/img/icons/quality.svg"
          alt="new"
        />
        <p className="px-5">Высокое качество продукции</p>
      </div>
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20  object-contain"
          src="/img/icons/delivery.svg"
          alt="new"
        />
        <p className="px-5">Доставка в любой регион Казахстана</p>
      </div>
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20 object-contain"
          src="/img/icons/threads.svg"
          alt="new"
        />
        <p className="px-5">Собственное производство</p>
      </div>
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20 object-contain"
          src="/img/icons/t-shirts.svg"
          alt="new"
        />
        <p className="px-5">Обширный ассортимент одежды для спорта</p>
      </div>
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20 object-contain"
          src="/img/icons/time.svg"
          alt="new"
        />
        <p className="px-5">Минимальные сроки изготовления</p>
      </div>
      <div className="flex px-5 py-10 items-center">
        <img
          className="w-20 h-20 object-contain"
          src="/img/icons/prace-1.png"
          alt="new"
        />
        <p className="px-5">Выгодные цены</p>
      </div>
    </div>
  </div>
);

export default Advantages;
