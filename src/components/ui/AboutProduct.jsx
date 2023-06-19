import React from "react";
import { category } from "../../api/category.api";

const AboutProduct = ({ product }) => {
  const features = category.find((elem) => {
    return elem.name.toLowerCase() === product.name.toLowerCase() && elem;
  });
  return (
    <div>
      <h2 className="font-bold text-xl">{product.name}</h2>
      <div className="font-bold py-5">Функциональные особенности:</div>
      <ul className="list-disc list-inside">
        {features !== undefined
          ? features.features.map((elem) => (
              <li key={elem} className="px-5">
                {elem}
              </li>
            ))
          : ""}
      </ul>
      <div className="font-bold py-5">
        Указана цена продукта из готовой ткани с использованием стандартных
        материалов.
      </div>
      <div className="grid grid-cols-2 gap-4 py-5">
        <div className="p-5 border border-dark-blue">
          <p className="font-bold text-lx"> Дизайн</p>
          Вы можете использовать любые цвета и логотипы. Создание дизайна на
          основе готовых работ с сайта - бесплатно
        </div>
        <div className="p-5 border border-dark-blue">
          <p className="font-bold text-lx">Сроки и доставка</p>
          Срок изготовления: от 10 рабочих дней. Более точные сроки уточняйте у
          менеджера
        </div>
      </div>
      <div className="font-bold text-xl py-5">Правила эксплуатации</div>
      <div>
        Специальный уход за спортивной одеждой с сублимационной печатью не
        требуется. Такое нанесение выдерживает любое обращение. Форму можно
        стирать и гладить в подходящем для ткани режиме (обычно 30-40°С).
        Единственное ограничение – такие изделия нельзя сушить в некоторых
        моделях старых промышленных сушек, где они подвергаются кратковременному
        нагреву свыше 200°С.
      </div>
      <br />
      <div>
        Изделия с вышивкой, аппликацией, прямой и термотрансферной печатью
        требуют бережного ухода. Их желательно стирать на режиме ручной стирки
        при температуре не выше 30 °C, с использованием мягких моющих средств.
        Гладить такую форму можно с изнаночной стороны или через слой
        дополнительной ткани. После стирки вещи необходимо тщательно
        прополоскать, не выкручивая.
      </div>
    </div>
  );
};

export default AboutProduct;
