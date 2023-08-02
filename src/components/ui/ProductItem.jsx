import React, { useState } from "react";
import LinkArrow from "./LinkArrow";
import { useLocation } from "react-router-dom";
import CarouselItems from "../common/CarouselItems";
import AboutProduct from "./AboutProduct";
import Advantages from "./Advantages";
import ContactUs from "./ContactUs";

const ProductItem = () => {
  const { state } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };

  const products = state.some.image.map((elem, index) => {
    return { _id: index, image: elem };
  });

  return (
    <div className="container pt-36 pb-10">
      <div className="px-5">
        <LinkArrow name={state.some.name} product={true} />

        <div className="flex flex-col lg:flex-row my-5 w-full">
          <div className="w-full lg:w-1/2 justify-center py-5">
            <CarouselItems
              kits={products}
              num={1}
              carousel={true}
              photo={true}
            />
          </div>
          <div className="w-full">
            <h2 className="flex font-medium text-3xl py-5">
              {state.some.name}
            </h2>
            <div className="grid grid-cols-2 my-10">
              <div className="p-2">Артикул:</div>
              <div className="p-2">{state.some.article}</div>
              <div className="p-2">Категория:</div>
              <div className="p-2">{state.some.category}</div>
              <div className="p-2">Дополнительные опции:</div>
              <div className="p-2">Включает нанесение дизайна на ткань. </div>
              <div className="p-2">Выбор материала:</div>
              <div className="p-2">
                Есть выбор от бюджетного до премиального вариантов
              </div>
              <div className="p-2">Цена:</div>
              <div className="p-2 text-2xl text-blue">
                от {" " + state.some.price + " "}тг
              </div>
              <div className="p-2">Скидки</div>
              <div className="p-2">
                Нанесение логотипа нашей компании на бирках скидка 10%
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 xl:w-1/3 ">
            <ContactUs />
          </div>
        </div>
        <AboutProduct product={state.some} />
        <Advantages />
      </div>
    </div>
  );
};

export default ProductItem;
