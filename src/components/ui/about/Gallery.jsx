import React from "react";
import LinkArrow from "../LinkArrow";
import PhotoGallery from "../../common/PhotoGallery";
import { works } from "../../../api/works-gallery.api";

const Gallery = () => {
  return (
    <div className="container pt-36 md:pt-40">
      <div className="px-5 pb-10">
        <LinkArrow name="Галерея работ" />
        <h1 className="flex justify-center font-medium text-3xl py-5">
          {" "}
          Галерея работ
        </h1>
        <div className="flex flex-col text-xl">
          Уважаемые клиенты!
          <div className="pt-5">
            Присылайте фото ваших команд в нашей экипировке на почту
            <a href="mailto:SiLaSport76@mail.ru"> SiLaSport76@mail.ru </a>, а
            также в нашу группу Вконтакте, и мы с удовольствием разместим их на
            нашем сайте или в социальных сетях!
          </div>
          <div className="pt-5">
            Либо выкладывайте отзывы с фото на своих страницах в социальных
            сетях или в отзовиках, и получите скидку на текущий или следующий
            заказ! Подробнее о скидках на странице "Система скидок и наценок"
          </div>
          <PhotoGallery list={works} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
