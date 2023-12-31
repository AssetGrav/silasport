import React from "react";
import LinkArrow from "../LinkArrow";
import TableMenu from "../../common/TableMenu";
import { info } from "../../../api/menu/header/info.api";

const Care = () => {
  return (
    <div className="container pt-36 pb-10 md:pt-40">
      <LinkArrow name="Уход за изделиями с нанесением номеров и эмблем" />
      <div className="flex flex-row px-5 py-10">
        <div className="hidden lg:flex">
          <TableMenu list={info.list} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">
            Уход за изделиями с нанесением номеров и эмблем
          </h1>
          <p>
            Специальный уход за спортивной одеждой с сублимационной печатью не
            требуется. Такое нанесение выдерживает любое обращение. Форму можно
            стирать и гладить в подходящем для ткани режиме (обычно 30-40°С).
            Единственное ограничение – такие изделия нельзя сушить в некоторых
            моделях старых промышленных сушек, где они подвергаются
            кратковременному нагреву свыше 200°С.
          </p>{" "}
          <br />
          <p>
            Изделия с вышивкой, аппликацией, прямой и термотрансферной печатью
            требуют бережного ухода. Их желательно стирать на режиме ручной
            стирки при температуре не выше 30 °C, с использованием мягких моющих
            средств. Гладить такую форму можно с изнаночной стороны или через
            слой дополнительной ткани. После стирки вещи необходимо тщательно
            прополоскать, не выкручивая.
          </p>
          <br />
          <p>Соблюдайте правила эксплуатации!</p>
        </div>
      </div>
    </div>
  );
};

export default Care;
