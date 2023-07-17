import Item from "./Item";
import { ABOUT, RESOURCES, COMPANY, SUPPORT } from "../../../api/footer.api.js";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="О нас" />
      <Item Links={RESOURCES} title="Оформление заказа" />
      <Item Links={COMPANY} title="Полезная информация" />
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
      </div>
    </div>
  );
};

export default ItemsContainer;
