import React from "react";
import LinkArrow from "../LinkArrow";
import { info } from "../../../api/menu/header/info.api";
import TableMenu from "../../common/TableMenu";

const Contacts = () => {
  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <LinkArrow name="Контакты" />
      <div className="flex flex-row px-5 py-10">
        <div className="hidden lg:flex">
          <TableMenu list={info.list} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">Контакты</h1>
          <div>Минимальный заказ швейной продукции - 1 шт.</div>
          <div>Минимальный командный заказ - 10 шт.</div>
          <div className="text-2xl py-5">Астана</div>
          <div className="font-bold">
            {" "}
            <div>Адрес: Атбасарская 36</div>
            <br />
            <div>
              Телефоны :
              <p className="font-thin">
                +7 (771) 417-18-88, +7 (707) 850-07-80
              </p>
            </div>
            <br />
            <div>
              Режим работы: С 8:00 до 18:00 по рабочим дням. Суббота до 13:00{" "}
            </div>
            <div className="text-red">
              Оформить заявку:
              <a
                href="mailto:SiLaSport76@mail.ru"
                className="text-dark-blue hover:text-blue"
              >
                SiLaSport76@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
