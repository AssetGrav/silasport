import { v4 as uuidv4 } from "uuid";

function setType() {
  return "a-5";
}

export const attributesMask = [
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Маска",
    image: ["/img/attribute/mask/1.jpg"],
    price: 5000,
    article: "М-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Маска",
    image: ["/img/attribute/mask/2.jpg"],
    price: 5000,
    article: "М-10",
    category: "мужская",
  },
];
