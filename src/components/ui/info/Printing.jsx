import React from "react";
import LinkArrow from "../LinkArrow";
import TableMenu from "../../common/TableMenu";
import { info } from "../../../api/menu/header/info.api";
import CarouselComponent from "../../common/CarouselComponent";
import { printing } from "../../../api/menu/header/printing/printing.api";

const Printing = () => {
  return (
    <div className="container pt-36 pb-10">
      <LinkArrow name="Технология печати на тканях" />
      <div className="flex flex-row px-5 py-10">
        <TableMenu list={info.list} />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl pb-5">
            Технология печати на тканях
          </h1>
          <p>
            Наше производство использует следующие технологии нанесения
            изображений на спортивную одежду:
          </p>{" "}
          <br />
          <ul className="list-disc list-inside px-5 text-dark-blue">
            <li className="hover:text-blue">
              Полноцветная термотрансферная печать
            </li>
            <li className="hover:text-blue">
              Печать термотрансферными пленками флок, флекс, твил
            </li>
            <li className="hover:text-blue">Сублимационная печать</li>
            <li className="hover:text-blue">Вышивка</li>
            <li className="hover:text-blue">Шевроны и аппликация</li>
          </ul>{" "}
          <br />
          <p>
            Каждая из этих технологий имеет свои преимущества и недостатки. Их
            выбор зависит от следующих параметров заказа:
          </p>{" "}
          <br />
          <ul className="list-disc list-inside px-5">
            <li>тиража</li>
            <li>количества цветов в нанесении</li>
            <li>
              величины разрешения изображения (наличие мелких деталей и
              растрового нанесения)
            </li>
            <li>материала, на котором необходимо сделать нанесение</li>
            <li>предпочтения заказчика и его финансового бюджета</li>
          </ul>{" "}
          <br />
          <div>
            <p className="font-bold">Требования к запечатываемым изделиям:</p> в
            области нанесения должны отсутствовать швы и фурнитура, материал
            должен выдержать необходимые для печати температурные и механические
            нагрузки. Часто, для изготовления качественного нанесения, возникает
            необходимость отпороть, а потом пришить подкладку (куртки, костюмы,
            сумки). Это может значительно увеличить стоимость работ и срок
            исполнения заказа.
          </div>
          <h1 className="font-medium text-3xl py-5">
            Полноцветная термотрансферная печать
          </h1>
          <p>
            В данной технологии изображение наносится с помощью промежуточного
            носителя (трансфера), при нагревании в термопрессе. Мы используем
            две разновидности полноцветных термотрансферов:
          </p>
          <ul>
            <li>
              пластизолевые - изготавливаются методом прямой печати
              пластизолевыми красками на специальной бумаге – подложке
            </li>
            <li>
              принтерные - цифровая печать водными чернилами на специальных
              подложках.
            </li>
          </ul>
          <p>
            Второй способ выгоден при малых тиражах. Кроме того, цифровая печать
            может давать более качественные полноцветные изображения (например,
            цветные фотографии).
          </p>
          <div className="max-w-6xl h-36 my-10 px-10">
            <CarouselComponent works={printing} num={4} number="w-36 h-36" />
          </div>
          <p>
            Преимущество перед другими видами печати – простота изготовления,
            высокое качество многоцветных изображений, доступная цена при малых
            тиражах. Кроме того, это единственный способ многоцветной печати на
            сложных поверхностях – например, бейсболках и рукавах маек. <br />
            Стойкость нанесения цветным термотрансфером ниже, чем других видов
            печати, но при соблюдении Правил эксплуатации идеально прослужит два
            – три сезона.
          </p>
          <h1 className="font-medium text-3xl py-5">
            Термотрансферная печать пленками флок, флекс
          </h1>
          <p>
            Технология нанесения аналогична предыдущему методу Полноцветной
            термотрансферной печати, но сам трансфер вырезается с помощью
            режущего плоттера из специальных полимерных пленок. Затем его
            «вплавляют» под прессом в ткань, что создает очень стойкое и яркое
            изображение. Флекс – гладкая пленка, флок – пленка с «бархатной»
            поверхностью.
          </p>
          {/* carusel */}
          <div className="max-w-6xl h-36 my-10 px-10">
            <CarouselComponent works={printing} num={4} number="w-36 h-36" />
          </div>
          <p>
            Нанесение очень стойкое, при правильной эксплуатации срок службы
            практически не ограничен. Эта технология используется для нанесения
            единичных изображений (например, фамилии или номера игрока).
          </p>
          <p>
            Недостаток этого метода – нанесение возможно только в один цвет (или
            несколько цветов рядом, на достаточном расстоянии друг на друга).
            Этим способом трудно напечатать мелкие детали (их трудно вырезать).
            Количество цветов пленок ограничено – около 10 основных цветов, в
            том числе под золото и серебро.
          </p>
          <h1 className="font-medium text-3xl py-5">Сублимационная печать</h1>
          <p>
            Можно сказать, что сублимация - оптимальный вид печати для
            спортивной одежды из синтетических тканей (игровая форма для футбола
            и баскетбола, хоккейных майках и т.д.). Печать происходит под
            давлением при температуре 210 – 230 градусов, при этом окрашивание
            происходит на молекулярном уровне парами красителя. Такая краска не
            ощутима на одежде (не изменяет ткань, нельзя нащупать) и сохраняется
            весь срок службы изделия. Такую печать нельзя смыть, стереть, она не
            выгорает под прямым воздействием солнечных лучей. По яркости и
            качеству (вплоть до фотопечати) этот вид нанесения превосходит все
            другие технологии.
          </p>
          {/* carousel */}
          <div className="max-w-6xl h-48 my-10">
            <CarouselComponent works={printing} num={4} number="w-36 h-36" />
          </div>
          <p>
            Однако такое нанесение можно сделать только на белую ткань, так как
            это не кроющие краски. Поэтому ее используют для печати на крой
            одежды в процессе производства. Также этот способ печати используют
            при изготовлении флагов, вымпелов, перетяжек, различной сувенирной
            продукции.
          </p>{" "}
          <br />
          <p>
            Стоимость сублимационной печати уже входит в цену изделий. То есть
            цена заказных изделий с сублимационной печатью (футбольной и
            баскетбольной формы, хоккейных маек и т.д.) не зависит от количества
            и сложности эмблем, надписей и других нанесений.
          </p>
          <h1 className="font-medium text-3xl py-5">Вышивка</h1>
          <p>
            Вышивка используется в тех случаях, когда надо сделать «солидное» и
            качественное нанесение на готовые изделия. Сегодня она широко
            используется в спортивной одежде. По сравнению с другими
            технологиями, вышивка достаточно долговечна, имеет яркие цвета,
            фактура вышивки придает логотипу дорогой и эффектный вид.
          </p>
          <p>
            Мы работаем на современном японском оборудовании марки «TAJIMA» с
            использованием высококачественных расходных материалов, что
            гарантирует высокое качество изображения любой сложности. Большой
            выбор цветов ниток, используемых при вышивке, позволяет подбирать
            практически любые оттенки. Возможна вышивка металлизированными
            нитками под золото или серебро.
          </p>
          {/* carousel */}
          <div className="max-w-6xl h-48 my-10">
            <CarouselComponent works={printing} num={4} number="w-36 h-36" />
          </div>
          <p>
            Стоимость вышивки всегда рассчитывается индивидуально, цена зависит
            от количества стежков в нанесении (площадь нанесения, плотность
            застила и количество цветов) и марки нити. Для предварительного
            расчета стоимости тиража необходимо видеть макет и знать его точные
            размеры.
          </p>
          <p>
            На основании макета дизайнер создает программу для вышивальной
            машины. После этого изготавливается контрольный образец нанесения и
            рассчитывается точная цена за вышивку. Этот этап занимает 1 – 3 дня
            в зависимости от сложности. После утверждения заказчиком образца
            изделие передается в производство.
          </p>
          <p>
            Однако у вышивки существует ряд ограничений. Так, количество цветов
            нитей не должно превышать двенадцати. Существуют сложности при
            отображении мелких элементов и тонких линий Вышивку невозможно
            изготовить на труднодоступных элементах одежды (воротник, карман,
            рукав, манжета и др.), в таких случаях нанесение предпочтительно
            сделать на крое изделия (при пошиве изделия в нашей фирме).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Printing;