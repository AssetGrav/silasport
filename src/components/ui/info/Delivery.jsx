import React from "react";
import LinkArrow from "../LinkArrow";
import { info } from "../../../api/menu/header/info.api";
import TableMenu from "../../common/TableMenu";
import { delivery } from "../../../api/menu/header/delivery/delivery.api";

const Delivery = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Доставка" />
      <div className="flex flex-row px-5 py-10">
        <TableMenu list={info.list} />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">Доставка</h1>
          <p>Мы предлагаем несколько вариантов доставки нашим клиентам:</p>
          <ul className="list-decimal list-inside">
            <li>
              Самовывоз.
              <p className="px-5">
                Наш склад находится рядом с офисом (Астана). Поэтому Вы можете
                самостоятельно получить товар сразу после оплаты (готовую
                продукцию) или после ее изготовления (заказную продукцию,
                нанесение).
              </p>
            </li>
            <li>
              Курьером.
              <p className="px-5">
                {" "}
                В Астане можно воспользоваться услугами курьеров индрайвер либо
                Яндекс курьер.
              </p>
            </li>
            <li>
              Отправка через КАЗ Почту или транспортные компании в любую точку
              Казахстана.
              <p className="px-5">
                При выборе компании необходимо учитывать их специализацию –
                доставка до склада или двери клиента, скорость транспорта (авиа,
                ж/д, авто), перечень населенных пунктов.
              </p>
            </li>
          </ul>
          <br />
          <p>
            Наша услуга по отправке товара (упаковка груза и сдача его в
            транспортную компанию) стоит 1000тг. Цена от объема партии не
            зависит. Услуги Почты Казахстана или транспортной компании Вы
            оплачиваете самостоятельно, при получении товара. При отправке Авиа
            в аэропортах (в списке не указаны) оплата может быть больше.
          </p>
          <br />
          <div className="text-xl px-5 py-5">Примерный вес изделий</div>
          <div className="w-1/2 h-full">
            <table className="table-auto border-separate border border-slate-400">
              <thead className="border">
                <tr>
                  <th className="border border-slate-300 px-5">
                    Наименование изделия
                  </th>
                  <th className="border border-slate-300 px-5">
                    Примерный вес (гр.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {delivery.map((elem) => (
                  <tr key={elem._id}>
                    <td className="border border-slate-300 px-5">
                      {elem.name}
                    </td>
                    <td className="flex justify-center border border-slate-300">
                      {elem.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
