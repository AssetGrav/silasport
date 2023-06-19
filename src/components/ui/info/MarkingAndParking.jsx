import React from "react";
import TableMenu from "../../common/TableMenu";
import { info } from "../../../api/menu/header/info.api";
import LinkArrow from "../LinkArrow";

const MarkingAndParking = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Маркировка и упаковка изделий" />
      <div className="flex flex-row px-5 py-10">
        <TableMenu list={info.list} />
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
          <div className="py-3 w-96 h-full">
            <p className="font-bold py-5">Картонная этикетка</p>
            <img
              src="https://sun9-17.userapi.com/impg/dNfDSY2QjVK-7UpHPhNcdoqxL7xGy0ddU8N3lQ/qNifB9RqlDI.jpg?size=1214x1474&quality=96&sign=2e0615451137a20b143ec57fc88c2671&type=album"
              alt=""
            />
          </div>
          <div className="py-3 w-96 h-full">
            <p className="font-bold py-5">Трансферный ярлык</p>
            <div className="flex flex-row">
              <img
                src="https://sun9-79.userapi.com/impg/Zg5aB4iwUshVvLYad3R-sQkIIoQDtu8jNcYMGQ/p32UrO_uIO8.jpg?size=330x386&quality=96&sign=404336930c1199a92be2598405a10926&type=album"
                alt=""
                className="w-56 h-full mr-10"
              />
              <img
                src="https://sun9-79.userapi.com/impg/Zg5aB4iwUshVvLYad3R-sQkIIoQDtu8jNcYMGQ/p32UrO_uIO8.jpg?size=330x386&quality=96&sign=404336930c1199a92be2598405a10926&type=album"
                alt=""
                className="w-56 h-full"
              />
            </div>
          </div>
          <div className="py-3 w-96 h-full">
            <p className="font-bold py-5">Вшивные этикетки</p>
            <div className="flex flex-row">
              <img
                src="https://sun9-21.userapi.com/impg/biKw1kGO8yvpLf87i0wMkP7SU0NjR9DqgoqQ2g/L093tFDLS04.jpg?size=475x543&quality=96&sign=d40f12e54a5a8c060c52eb2ca09a822a&type=album"
                alt=""
                className="w-72 h-full mr-10"
              />
              <img
                src="https://sun9-21.userapi.com/impg/biKw1kGO8yvpLf87i0wMkP7SU0NjR9DqgoqQ2g/L093tFDLS04.jpg?size=475x543&quality=96&sign=d40f12e54a5a8c060c52eb2ca09a822a&type=album"
                alt=""
                className="w-72 h-full"
              />
            </div>
          </div>
          <div className="py-3 w-96 h-full">
            <p className="font-bold py-5">Упаковочные пакеты</p>
            <div className="flex flex-row">
              <img
                src="https://sun9-69.userapi.com/impg/NLXtIy9QI1gYYDjl1Xd8MrBLNvsWdVIycRxtxQ/uuZjQlh5nlg.jpg?size=1289x2160&quality=96&sign=c79684b7e754465abd271ab8f6f003fd&type=album"
                alt=""
                className="w-72 h-full mr-10"
              />
              <img
                src="https://sun9-69.userapi.com/impg/NLXtIy9QI1gYYDjl1Xd8MrBLNvsWdVIycRxtxQ/uuZjQlh5nlg.jpg?size=1289x2160&quality=96&sign=c79684b7e754465abd271ab8f6f003fd&type=album"
                alt=""
                className="w-56 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkingAndParking;
