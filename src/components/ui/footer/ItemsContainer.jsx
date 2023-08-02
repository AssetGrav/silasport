import Item from "./Item";
import { ABOUT, RESOURCES, COMPANY, SUPPORT } from "../../../api/footer.api.js";
import Social from "../Social";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-5 px-2 py-16">
      <div>
        <Item Links={ABOUT} title="О нас" />
      </div>
      <div>
        <Item Links={RESOURCES} title="Оформление заказа" />
      </div>
      <div className="hidden lg:flex">
        <Item Links={COMPANY} title="Полезная информация" />
      </div>
      <div>
        <Item Links={SUPPORT} title="Тендеры" />
        <div className="py-5">
          <img
            className="h-15 w-40 pb-2"
            src="/img/tender/gosportal.png"
            alt=""
          />
          <img
            className="h-15 w-40 pb-2"
            src="/img/tender/omarket.png"
            alt=""
          />
          <img className="h-15 w-40 pb-2" src="/img/tender/samruk.png" alt="" />
        </div>
        <div className="lg:hidden">
          <p className="py-2">Мы в социальных сетях</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
