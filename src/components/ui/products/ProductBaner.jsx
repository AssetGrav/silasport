import React from "react";

const ProductBaner = ({ fileName }) => {
  const triangleStyles = {
    width: "0",
    height: "0",
    borderTop: "250px solid transparent",
    borderRight: "100px solid #fff",
    borderBottom: "250px solid transparent",
    zIndex: "30",
  };
  return (
    <div className="flex flex-row ">
      <div className=" w-2/3 h-full py-2">
        <div
          style={{
            backgroundImage: `url("/img/product-header/${
              fileName !== "" ? fileName : "404.jpg"
            }" )`,
            height: "490px",
          }}
          alt=""
          className="flex w-full h-96 bg-cover bg-no-repeat"
        />
      </div>
      <div className="w-1/3 max-h-min">
        <div className="flex flex-row py-2">
          <div style={triangleStyles} className="-translate-x-24"></div>
          <ul className="flex flex-col w-full h-full justify-center text-xl py-16 -translate-x-24 ">
            <li className="flex flex-row ">
              <img src="/img/icons/suit.svg" className="w-20" alt="#" />
              <span className="p-5">
                Экипируем спортивные команды любого уровня
              </span>
            </li>
            <li className="flex flex-row">
              <img src="/img/icons/design.svg" className="w-20" alt="#" />
              <span className="p-5">
                Профессиональный клубный дизайн. Разработка и изготовление
              </span>
            </li>
            <li className="flex flex-row">
              <img src="/img/icons/materials.svg" className="w-20" alt="#" />
              <span className="p-5">Современные функциональные материалы</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductBaner;
