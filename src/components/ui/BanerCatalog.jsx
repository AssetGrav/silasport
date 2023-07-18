import React from "react";
import { Link } from "react-router-dom";

const BanerCatalog = () => {
  const images = [
    {
      image: "/img/Catalog/a1.png",
      name: "баскетбол",
      host: "basketball/man",
    },
    {
      image: "/img/Catalog/a2.png",
      name: "волейбол",
      host: "volleyball/man",
    },
    {
      image: "/img/Catalog/a3.png",
      name: "хоккей",
      host: "hockey/playtshirt",
    },
    {
      image: "/img/Catalog/a4.png",
      name: "кокпар",
      host: "type/kokpar",
    },
    {
      image: "/img/Catalog/a5.png",
      name: "футбол",
      host: "football/man",
    },
  ];
  const imagesWork = [
    {
      image: "/img/Catalog/1.jpeg",
      name: "разработка дизайна",
      host: "services/design",
    },
    {
      image: "/img/Catalog/2.jpeg",
      name: "нанесение",
      host: "drawing/football",
    },
    {
      image: "/img/Catalog/3.jpeg",
      name: "экипировка команд",
      host: "services/command",
    },
  ];
  return (
    <div className="container">
      <h1 className="flex justify-center text-2xl font-bold text-dark-blue mt-14 mb-10">
        КАТАЛОГ ГОТОВОЙ И ЗАКАЗНОЙ ПРОДУКЦИИ
      </h1>
      <div className="px-5 py-2">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="basis-1/5 pr-1 inline-block align-middle"
            >
              <Link
                to={`/products/${image.host}`}
                state={{ some: `${image.host}` }}
              >
                <div
                  className="w-full h-full bg-cover"
                  style={{
                    backgroundImage: `url(${image.image})`,
                    width: "100%",
                    height: "384px",
                  }}
                >
                  <div className="w-full h-full backdrop-opacity-30 backdrop-invert bg-blue/30 hover:opacity-0">
                    <p className="text-white font-extrabold text-2xl tracking-widest flex	justify-end pt-5 pr-10">
                      {image.name.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-2">
        <div className="flex">
          {imagesWork.map((image, index) => (
            <div key={index} className="basis-1/3 pr-1">
              <Link
                to={`/products/${image.host}`}
                state={{ some: `${image.host}` }}
              >
                <div
                  className="w-full h-full bg-cover"
                  style={{
                    backgroundImage: `url(${image.image})`,
                    width: "100%",
                    height: "208px",
                  }}
                >
                  <div className="w-full h-full backdrop-opacity-30 backdrop-invert bg-blue/30 hover:opacity-0">
                    <p className="text-yellow font-extrabold text-4xl tracking-widest pt-5 pl-10 flex">
                      {image.name.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BanerCatalog;
