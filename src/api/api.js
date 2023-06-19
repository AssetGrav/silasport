const kits = [
  {
    _id: 1,
    name: "Футбольная форма.",
    image: "https://img.prinba.ru/thumb/images/da/dafd0b7jb38_320x0.jpg",
    price: 15000,
  },
  {
    _id: 2,
    name: "Хоккейная форма.",
    image: "https://hockey-mag.ru/images/articles/hokkeynaya-ekipirovka.jpg",
    price: 15000,
  },
  {
    _id: 3,
    name: "Кокпар форма.",
    image:
      "https://photos-mt.kcdn.kz/webp/24/246d9a18-3812-4dc2-80fa-309e957a0201/3-336x0.jpg",
    price: 15000,
  },
  {
    _id: 4,
    name: "Баскетбольная форма.",
    image:
      "https://escaper.ru/assets/images/resources/121/thumb/bsk-aw020-subl-photo-rus.png",
    price: 15000,
  },
];

if (!localStorage.getItem("kits")) {
  localStorage.setItem("kits", JSON.stringify(kits));
}

const fetchAll = (name) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem(name)));
    }, 2000);
  });

export default {
  fetchAll,
};
