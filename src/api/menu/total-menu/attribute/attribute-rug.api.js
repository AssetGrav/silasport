import { v4 as uuidv4 } from "uuid";

function setType() {
  return "a-4";
}

export const attributesRug = [
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Коврик",
    image: ["/img/attribute/rug/1.jpg"],
    price: 3000,
    article: "К-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: setType(),
    name: "Коврик",
    image: ["/img/attribute/rug/2.jpg"],
    price: 3000,
    article: "К-10",
    category: "мужская",
  },
];
