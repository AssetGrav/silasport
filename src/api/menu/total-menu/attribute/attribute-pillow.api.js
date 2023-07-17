import { v4 as uuidv4 } from "uuid";

function setType() {
  return "a-6";
}

export const attributesPillow = [
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Подушка",
    image: ["/img/attribute/pillow/1.png"],
    price: 5000,
    article: "П-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Подушка",
    image: ["/img/attribute/pillow/2.png"],
    price: 5000,
    article: "П-10",
    category: "мужская",
  },
];
