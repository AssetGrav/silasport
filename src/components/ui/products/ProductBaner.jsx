import React from "react";

const ProductBaner = ({ fileName, fabricInfo }) => {
  const triangleStyles = {
    width: "0",
    height: "0",
    borderTop: "246px solid transparent",
    borderRight: "100px solid #fff",
    borderBottom: "246px solid transparent",
    zIndex: "30",
  };

  return (
    <div className="flex flex-row ">
      <div className=" w-2/3 h-full">
        <div
          style={{
            backgroundImage: `url("/img/product-header/${
              fileName !== "" ? fileName : "banner-all.png"
            }" )`,
            height: "490px",
          }}
          alt=""
          className="flex w-full h-96 bg-cover bg-no-repeat"
        />
      </div>
      <div className="w-1/3 max-h-min">
        {!fabricInfo ? (
          <div className="flex flex-row">
            <div className="-translate-x-1">
              <div style={triangleStyles} className="-translate-x-24"></div>
            </div>
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
                <span className="p-5">
                  Современные функциональные материалы
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-row w-full h-full">
            {" "}
            <div className="flex flex-row w-full h-full bg-gray-light">
              <div className="flex m-10 w-full border border-white">
                <div className="flex m-5 w-full border border-white">
                  <div className="flex flex-col justify-center text-gray-dark text-center">
                    <div className="text-xl mb-5">
                      Печать на тканях от <p>производителя тираж от 1 кв/м</p>
                    </div>
                    <div>
                      Печать от 1 кв/м. Оставьте заявку чтобы рассчитать
                      стоимость
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductBaner;
