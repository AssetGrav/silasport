import { v4 as uuidv4 } from "uuid";

function setType() {
  return "a-11";
}

export const attributesScarf = [
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Шарф",
    image: ["/img/attribute/scarf/1.jpg"],
    price: 5000,
    article: "ША-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Шарф",
    image: ["/img/attribute/scarf/2.jpg"],
    price: 5000,
    article: "ША-10",
    category: "мужская",
  },
];
