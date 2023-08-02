import React from "react";
import TableMenu from "../../common/TableMenu";
import { info } from "../../../api/menu/header/info.api";
import LinkArrow from "../LinkArrow";

const MarkingAndParking = () => {
  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <LinkArrow name="Маркировка и упаковка изделий" />
      <div className="flex flex-row px-5 py-10">
        <div className="hidden lg:flex">
          <TableMenu list={info.list} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">
            Маркировка и упаковка изделий
          </h1>
          <p>
            На всех швейных изделиях Сила Спорт нанесен наш Торговый Знак
            (зарегистрированный соответствующим образом логотип производителя).
            На игровых майках – справа на груди или по центру. На костюмах и
            куртках – справа на груди или сзади под воротником. Это является
            общепринятым правилом среди производителей спортивной одежды.{" "}
          </p>{" "}
          <br />
          <div>
            <p className="font-bold hover:font-extrabold text-2xl">
              За использование нашего Торгового Знака всем клиентам
              предоставляется скидка 10%
            </p>
            , она уже учтена в Прайс-листе и специально не выделяется. Конечно,
            Вы можете заказать изготовление продукции без нанесения торгового
            знака Сила Спорт (например, под Вашей Торговой Маркой), но это
            приведет к увеличению цены на 11%.
          </div>{" "}
          <br />
          <div>
            <p className="font-bold">Упаковка.</p>
            Каждое изделие имеет индивидуальную упаковку (полиэтиленовый или
            полипропиленовый пакет). При отправке через транспортную компанию
            Ваш заказ упаковывается в прочный полипропиленовый мешок. Каждый
            мешок опечатываются одноразовой пломбой. При необходимости
            используются картонные короба.
          </div>
          <div className="py-3 md:w-96 w-[150px] h-full">
            <p className="font-bold py-5">Картонная этикетка</p>
            <img src="/img/markandpack/etiket.png" alt="" />
          </div>
          <div className="py-3 md:w-96 h-full w-[150px]">
            <p className="font-bold py-5">Трансферный ярлык</p>
            <div className="flex flex-row ">
              <img
                src="/img/markandpack/etiket-2.png"
                alt=""
                className="w-56 h-full mr-10"
              />
              <img
                src="/img/markandpack/etiket-2.png"
                alt=""
                className="w-56 h-full"
              />
            </div>
          </div>
          <div className="py-3 md:w-96 w-[150px] h-full">
            <p className="font-bold py-5">Вшивные этикетки</p>
            <div className="flex flex-row">
              <img
                src="/img/markandpack/etiket.png"
                alt=""
                className="md:w-56 w-[150px] h-full mr-10"
              />
              <img
                src="/img/markandpack/etiket.png"
                alt=""
                className="md:w-56 w-[150px] h-full"
              />
            </div>
          </div>
          <div className="py-3 w-96 h-full">
            <p className="font-bold py-5">Упаковочные пакеты</p>
            <div className="flex flex-row">
              <img
                src="/img/markandpack/bag.png"
                alt=""
                className="md:w-56 w-[150px] h-full mr-10"
              />
              <img
                src="/img/markandpack/bag.png"
                alt=""
                className="md:w-56 w-[150px] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkingAndParking;
