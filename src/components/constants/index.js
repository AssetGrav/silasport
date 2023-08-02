import { about } from "../../api/menu/header/about.api";
import { info } from "../../api/menu/header/info.api";

export const navlinks = [
  {
    name: about.name,
    link: about,
    str: false,
  },
  {
    name: "Прайс-лист",
    link: "/price",
    str: true,
  },
  {
    name: "Каталог",
    link: "/products",
    str: true,
  },
  {
    name: info.name,
    link: info,
    str: false,
  },
  {
    name: "Контакты",
    link: "/contact",
    str: true,
  },
];
