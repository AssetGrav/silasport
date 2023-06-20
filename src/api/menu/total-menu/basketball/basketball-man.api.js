import { v4 as uuidv4 } from "uuid";

export const basketballManKits = [
  {
    _id: uuidv4("sila-"),
    type: "b-1",
    name: "Баскетбольная форма",
    image: ["/img/basketball/complect-1.png"],
    price: 13000,
    article: "Б-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: "b-1",
    name: "Баскетбольная майка",
    image: ["/img/basketball/tshirt-1.png"],
    price: 8000,
    article: "ИД-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: "b-1",
    name: "Баскетбольная футболка",
    image: ["/img/basketball/tshirt-10.png"],
    price: 8000,
    article: "ИД-11",
    category: "мужская",
  },
];
