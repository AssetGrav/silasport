import React from "react";
import ServicesCarousel from "../ServicesCarousel";

const ServiceInfo = ({ info }) => {
  return (
    <>
      <div className="flex font-medium text-3xl px-5">Ассортимент</div> <br />
      <div className="flex flex-auto">
        Мы изготовим для вашей команды весь ассортимент спортивной одежды, а
        также выполним качественное нанесение на ваши изделия.
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <ul className="leading-7 list-disc list-inside py-5">
            {info.products.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src="/img/hockey/tshirts/h-tshirt-14.png" />
        </div>
      </div>
      <ServicesCarousel />
    </>
  );
};

export default ServiceInfo;
