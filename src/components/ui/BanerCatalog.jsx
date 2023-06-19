import React from "react";
import { Link } from "react-router-dom";

const BanerCatalog = () => {
  const images = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jordan_by_Lipofsky_16577.jpg/274px-Jordan_by_Lipofsky_16577.jpg",
      name: "баскетбол",
      host: "basketball/man",
    },
    {
      image: "https://volleyball-astana.kz/images/new/2.jpg",
      name: "волейбол",
      host: "volleyball/man",
    },
    {
      image:
        "https://pro.ligasy.kz/image?file=photo/article/article_657.jpg&w=800&h=1014&exact=1&topcut=1",
      name: "хоккей",
      host: "hockey/playtshirt",
    },
    {
      image:
        "https://cinemas.kz/miniposter/miniposter.php?src=/uploads/kino/posters/e7cb5473fa0cb671c19fe126220524fb.jpg&w=300&h=360q=70&zc=1",
      name: "кокпар",
      host: "type/kokpar",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Football4.png/250px-Football4.png",
      name: "футбол",
      host: "football/man",
    },
  ];
  const imagesWork = [
    {
      image:
        "https://vesti.kz/userdata/news/news_240020/crop_b/photo_98915.jpg",
      name: "разработка дизайна",
      host: "services/design",
    },
    {
      image:
        "https://cdn.livesport.ru/l/football/2023/06/01/europa_league_final_press/picture--510.jpg?1685580070",
      name: "нанесение",
      host: "drawing/football",
    },
    {
      image:
        "https://cdnn21.img.ria.ru/images/07e5/08/06/1744644333_0:320:3072:2048_600x0_80_0_0_18ad98e941614806b0176ecb1e33c54d.jpg",
      name: "экипировка команд",
      host: "services/command",
    },
  ];
  return (
    <div className="container">
      <h1 className="flex justify-center text-2xl font-bold text-red mt-10">
        КАТАЛОГ ГОТОВОЙ И ЗАКАЗНОЙ ПРОДУКЦИИ
      </h1>
      <div className="px-5 py-2">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="basis-1/5 pr-1 inline-block align-middle"
            >
              <div
                style={{
                  backgroundImage: `url(${image.image})`,
                  width: "100%",
                  height: "384px",
                }}
              >
                {" "}
                <Link
                  to={`/products/${image.host}`}
                  state={{ some: `${image.host}` }}
                >
                  <div className="w-full h-full backdrop-opacity-30 backdrop-invert bg-blue/30 hover:bg-yellow/30">
                    <p className="text-white font-extrabold text-2xl tracking-widest flex	justify-end pt-5 pr-10">
                      {image.name.toUpperCase()}
                    </p>
                  </div>
                </Link>
              </div>
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
