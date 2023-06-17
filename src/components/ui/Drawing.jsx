import React from "react";
import PhoneForm from "./PhoneForm";

const Drawing = () => {
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <div className="w-1/3 ">
          <PhoneForm />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xl">
        <div className="p-5">
          <div className="font-bold pb-5">
            Стандартные размеры и расположение логотипов, эмблем и надписей на
            изделии
          </div>
          <ul className="list-inside list-disc">
            <li>
              Эмблема на передней стороне изделия в левой или центральной
              верхней части -не более 100 см²
            </li>
            <li>Эмблемы на плечах - не более 100 см² </li>
            <li>
              Надпись / рисунок / логотип на передней стороне изделия в средней
              части - высотой не более 35 см.
            </li>
          </ul>
        </div>
        <div className="p-5">
          <div className="pb-5">
            Стоимость стандартных нанесений (логотип, круг, 8x8 см)
          </div>
          <table className="table-auto">
            <thead className="bg-gray-light">
              <tr>
                <th className="border border-slate-300"></th>
                <th className="border border-slate-300">тираж 20 шт</th>
                <th className="border border-slate-300">тираж 100 шт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-2">Шелкография</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">Флекс</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">Флок</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">
                  Пластизолевый термотрансфер
                </td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">Вышивка</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">
                  Сублимационный шеврон
                </td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">
                  Жаккардовый шеврон
                </td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-2">
                  TPU, силиконовый, светоотражающий шеврон, 3D/4D Flok
                </td>
                <td className="border border-slate-300 px-2"> от 1000</td>
                <td className="border border-slate-300 px-2"> от 1000</td>
              </tr>
            </tbody>
          </table>
          <p>* крупный тираж звони менеджеру</p>
        </div>
      </div>
    </div>
  );
};

export default Drawing;
