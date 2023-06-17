import React from "react";
import LinkArrow from "../LinkArrow";
import PhotoGallery from "../../common/PhotoGallery";

const Gallery = () => {
  const arr = [
    { _id: "1", host: "/img/gallery/1.jpg" },
    { _id: "2", host: "/img/gallery/2.jpg" },
    { _id: "3", host: "/img/gallery/3.jpg" },
    { _id: "4", host: "/img/gallery/4.jpeg" },
    { _id: "5", host: "/img/gallery/5.jpg" },
    { _id: "6", host: "/img/gallery/6.jpg" },
    { _id: "7", host: "/img/gallery/7.jpg" },
    { _id: "8", host: "/img/gallery/8.jpg" },
    { _id: "9", host: "/img/gallery/9.jpg" },
    { _id: "10", host: "/img/gallery/10.jpg" },
    { _id: "11", host: "/img/gallery/11.jpeg" },
    { _id: "12", host: "/img/gallery/12.jpg" },
  ];
  return (
    <div className="container pt-36">
      <div className="px-5 pb-10">
        <LinkArrow name="Галерея работ" />
        <h1 className="font-medium text-3xl py-5"> Галерея работ</h1>
        <div className="flex flex-col text-xl">
          Уважаемые клиенты!
          <div className="pt-5">
            Присылайте фото ваших команд в нашей экипировке на почту
            <a href="#"> info@fan.ru </a>, а также в нашу группу Вконтакте, и мы
            с удовольствием разместим их на нашем сайте или в социальных сетях!
          </div>
          <div className="pt-5">
            Либо выкладывайте отзывы с фото на своих страницах в социальных
            сетях или в отзовиках, и получите скидку на текущий или следующий
            заказ! Подробнее о скидках на странице "Система скидок и наценок"
          </div>
          <PhotoGallery list={arr} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
