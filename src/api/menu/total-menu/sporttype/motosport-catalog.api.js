import { v4 as uuidv4 } from "uuid";

export const motoKits = [
  {
    _id: uuidv4("sila-"),
    type: "s-4",
    name: "Мотомайка",
    image: ["/img/moto-sport/cofta.png"],
    price: 15000,
    article: "Б-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: "s-4",
    name: "Мотомайка",
    image: [
      "/img/moto-sport/switer-5.png",
      "/img/moto-sport/switer-1.png",
      "/img/moto-sport/switer-2.png",
      "/img/moto-sport/switer-3.png",
      "/img/moto-sport/switer-4.png",
    ],
    price: 15000,
    article: "ИД-10",
    category: "мужская",
  },
  {
    _id: uuidv4("sila-"),
    type: "s-4",
    name: "Мото-шорты",
    image: ["/img/moto-sport/opf-8.png"],
    price: 6000,
    article: "ИД-11",
    category: "мужская",
  },
];
