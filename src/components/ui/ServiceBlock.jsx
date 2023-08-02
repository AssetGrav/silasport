import React from "react";

const ServiceBlock = ({ name }) => {
  return (
    <div className="px-5 lg:px-52 ">
      {name === "Вышивка на изделии" && (
        <div>
          Вышивка используется в тех случаях, когда надо сделать «солидное» и
          качественное нанесение на готовые изделия. Сегодня она широко
          используется в спортивной одежде. По сравнению с другими технологиями,
          вышивка достаточно долговечна, имеет яркие цвета, фактура вышивки
          придает логотипу дорогой и эффектный вид.
          <br />
          Мы работаем на современном японском оборудовании марки «TAJIMA» с
          использованием высококачественных расходных материалов, что
          гарантирует высокое качество изображения любой сложности. Большой
          выбор цветов ниток, используемых при вышивке, позволяет подбирать
          практически любые оттенки. Возможна вышивка металлизированными нитками
          под золото или серебро.
          <br />
          Стоимость вышивки всегда рассчитывается индивидуально, цена зависит от
          количества стежков в нанесении (площадь нанесения, плотность застила и
          количество цветов) и марки нити. Для предварительного расчета
          стоимости тиража необходимо видеть макет и знать его точные размеры.
          <br />
          На основании макета дизайнер создает программу для вышивальной машины.
          После этого изготавливается контрольный образец нанесения и
          рассчитывается точная цена за вышивку. Этот этап занимает 1 – 3 дня в
          зависимости от сложности. После утверждения заказчиком образца изделие
          передается в производство. <br />
          Однако у вышивки существует ряд ограничений. Так, количество цветов
          нитей не должно превышать двенадцати. Существуют сложности при
          отображении мелких элементов и тонких линий Вышивку невозможно
          изготовить на труднодоступных элементах одежды (воротник, карман,
          рукав, манжета и др.), в таких случаях нанесение предпочтительно
          сделать на крое изделия (при пошиве изделия в нашей фирме).
        </div>
      )}
      {name === "Печать флагов" && (
        <div>
          Если Вам нужен флаг (корпоративный с логотипом Вашей компании или
          любым другим изображением) высокого качества с максимальной
          детализацией и сочностью цветов, то сублимационная печать будет
          идеальным решением. Именно сублимационная печать позволяет производить
          флаги высокого качества устойчивые к погодным и температурным
          воздействиям. Флаг изготовленный компанией Сила Спорт, прослужит
          долгое время и не потеряет свой первоначальный вид и четкость
          изображения. В производстве используются высококачественные
          сублимационные чернила устойчивые к воздействию ультрафиолетового
          излучения, что позволить установить перед прямыми солнечными лучами и
          не переживать о выцветании рисунка.
        </div>
      )}
      {name === "Сублимационная печать на тканях" && (
        <div>
          Можно сказать, что сублимация - оптимальный вид печати для спортивной
          одежды из синтетических тканей (игровая форма для футбола и
          баскетбола, хоккейных майках и т.д.). Печать происходит под давлением
          при температуре 210 – 230 градусов, при этом окрашивание происходит на
          молекулярном уровне парами красителя. Такая краска не ощутима на
          одежде (не изменяет ткань, нельзя нащупать) и сохраняется весь срок
          службы изделия. Такую печать нельзя смыть, стереть, она не выгорает
          под прямым воздействием солнечных лучей. По яркости и качеству (вплоть
          до фотопечати) этот вид нанесения превосходит все другие технологии.
          <br /> Однако такое нанесение можно сделать только на белую ткань, так
          как это не кроющие краски. Поэтому ее используют для печати на крой
          одежды в процессе производства. Также этот способ печати используют
          при изготовлении флагов, вымпелов, перетяжек, различной сувенирной
          продукции. <br /> Стоимость сублимационной печати уже входит в цену
          изделий. То есть цена заказных изделий с сублимационной печатью
          (футбольной и баскетбольной формы, хоккейных маек и т.д.) не зависит
          от количества и сложности эмблем, надписей и других нанесений.
        </div>
      )}
      {name === "Разработка дизайна" && (
        <div>
          При изготовлении спортивной одежды для команды необходимо
          предварительно разработать как дизайн всего изделия, так и макеты
          отдельных нанесений (эмблем и логотипов, номеров, фамилий, надписей).
          Причем эта работа должна соответствовать техническим требованиям
          нашего производства. Для решения этой задачи Вы всегда можете
          обратиться к дизайнерам нашей фирмы. <br />В Отделе дизайна Сила Спорт
          трудится большой коллектив квалифицированных специалистов, имеющий за
          плечами многолетний опыт создания спортивной одежды для
          профессиональных и любительских команд.
          <br /> Наши дизайнеры готовы помочь:
          <ul>
            <li>
              1) В решении творческих задач по разработке дизайна спортивной
              экипировки;
            </li>
            <li>
              2) В создании макетов изделий из линейки сувенирной продукции
              стоимость услуг дизайнеров зависит от объема и сложности работы.
              Эта стоимость будет минимальной при условии размещения заказа на
              производство в нашей фирме.
            </li>
          </ul>
        </div>
      )}
      {name === "Услуги по пошиву" && (
        <div>
          <div>
            Услуги по пошиву спортивной одежды и трикотажных изделий из сырья
            заказчика
          </div>
          <div>
            Наша компания оказывает услуги по пошиву оптовых партий швейной
            продукции из трикотажа. У нас можно заказать пошив трикотажа:
            <ul className="list-disc list-inside">
              <li>Любого дизайна</li>
              <li>С нанесением любых логотипов и изображений</li>
              <li>
                Можем шить как из своего трикотажа, так и из трикотажа заказчика
              </li>{" "}
              <li>Минимальный тираж от 10 шт.</li>{" "}
              <li>Гарантия качества и лучшей цены</li>
            </ul>
            <br /> Кроме того, мы принимаем заказы на пошив одежды оптом из
            различных видов ткани Мы изготавливаем:{" "}
            <ul className="list-disc list-inside">
              <li>Утепленные костюмы, куртки, комбинезоны и жилеты</li>
              <li>Ветровки и ветрозищитные костюмы</li>
              <li>Лыжные костюмы</li>
              <li>Хлопковые спортивные и повседневные костюмы</li>
              <li>Бомберы и толстовки</li>
              <li>Минимальный тираж от 10 шт.</li>
            </ul>
            Вы можете посмотреть примеры наших работ в разделе Каталог. Также мы
            специализируемся на нанесении логотипов и изображений на одежду. Мы
            можем сделать нанесение:
            <ul className="list-disc list-inside">
              <li>Вышивкой </li>
              <li>Термотрансфером (флок, флекс, пластизоль)</li>
              <li>Прямой печатью</li>
            </ul>
            Производство Сила Спорт оборудовано современными швейными и
            раскройными машинами, мы обладаем компетенциями по пошиву одежды
            самого высокого уровня сложности. Отшив производится по лекалам и
            технологическому описанию заказчика.
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBlock;
