import React from "react";
import LinkArrow from "../LinkArrow";
import { info } from "../../../api/menu/header/info.api";
import TableMenu from "../../common/TableMenu";

const Contacts = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Контакты" />
      <div className="flex flex-row px-5 py-10">
        <TableMenu list={info.list} />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">Контакты</h1>
          <div>Минимальный заказ швейной продукции - 1 шт.</div>
          <div>Минимальный командный заказ - 10 шт.</div>
          <p className="text-2xl font-bold py-5">Астана</p>
          <p>Адрес: Атбасарская 36</p>
          <p>Телефоны :+7 (771) 417-18-88</p>
          <p>Режим работы: С 8:00 до 18:00 по рабочим дням.</p>
          <div>
            Суббота до 13:00 Оформить заявку:{" "}
            <a href="https://silasport.kz">SilaSport.kz</a>
          </div>
          <p className="text-2xl font-bold py-5">Наши менеджеры</p>
          <p>
            контактный номер:{" "}
            <a
              href="mailto:SiLaSport76@mail.ru"
              className="text-dark-blue hover:text-blue"
            >
              +7 (771) 417-18-88
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
