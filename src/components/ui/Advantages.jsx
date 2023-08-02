import React from "react";

const Advantages = () => (
  <div className="px-1 md:px-5">
    <h1 className="flex justify-center text-dark-blue text-2xl font-bold mt-14 mb-10">
      НАШИ ПРЕЙМУЩЕСТВА
    </h1>
    <div className="my-2 md:my-5 grid grid-rows-2 grid-flow-col gap-4 bg-gray-light p-2 md:p-10">
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center">
        <img
          className="w-5 h-5 md:w-20 md:h-20  object-contain"
          src="/img/icons/quality.svg"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">Высокое качество продукции</p>
      </div>
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center">
        <img
          className="w-5 h-5 md:w-20 md:h-20 object-contain"
          src="/img/icons/delivery.svg"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">
          Доставка в любой регион Казахстана
        </p>
      </div>
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center sm:flex-none">
        <img
          className="w-5 h-5 md:w-20 md:h-20 object-contain"
          src="/img/icons/threads.svg"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">Собственное производство</p>
      </div>
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center">
        <img
          className="w-5 h-5 md:w-20 md:h-20 object-contain"
          src="/img/icons/t-shirts.svg"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">
          Обширный ассортимент одежды для спорта
        </p>
      </div>
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center">
        <img
          className="w-5 h-5 md:w-20 md:h-20 object-contain"
          src="/img/icons/time.svg"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">Минимальные сроки изготовления</p>
      </div>
      <div className="flex px-2 sm:px-5 py-2 md:py-10 items-center">
        <img
          className="w-5 h-5 md:w-20 md:h-20 object-contain"
          src="/img/icons/prace-1.png"
          alt="new"
        />
        <p className="text-xs px-2 md:px-5">Выгодные цены</p>
      </div>
    </div>
  </div>
);

export default Advantages;
