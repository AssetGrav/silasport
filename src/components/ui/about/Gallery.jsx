import React from "react";
import { Link } from "react-router-dom";
import strelka from "./../../../assets/img/strelka.png";
import PhotoGallery from "./../../common/PhotoGallery";
import photo1 from "../../../assets/gallery/1.jpg";
import photo2 from "../../../assets/gallery/2.jpg";
import photo3 from "../../../assets/gallery/3.jpg";
import photo4 from "../../../assets/gallery/4.jpeg";
import photo5 from "../../../assets/gallery/5.jpg";
import photo6 from "../../../assets/gallery/6.jpg";
import photo7 from "../../../assets/gallery/7.jpg";
import photo8 from "../../../assets/gallery/8.jpg";
import photo9 from "../../../assets/gallery/9.jpg";
import photo10 from "../../../assets/gallery/10.jpg";
import LinkArrow from "../LinkArrow";

const Gallery = () => {
  const arr = [
    { id: "1", host: photo1 },
    { id: "2", host: photo2 },
    { id: "3", host: photo3 },
    { id: "4", host: photo4 },
    { id: "5", host: photo5 },
    { id: "6", host: photo6 },
    { id: "7", host: photo7 },
    { id: "8", host: photo8 },
    { id: "9", host: photo9 },
    { id: "10", host: photo10 },
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
