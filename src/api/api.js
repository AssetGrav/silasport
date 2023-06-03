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

const works = [
  {
    _id: 1,
    name: "Разработка игровой формы для команды",
    image: "https://esquire.kz/wp-content/uploads/2017/08/27A0266-min.jpg",
  },
  {
    _id: 2,
    name: "Разработка игровой формы для команды",
    image:
      "https://img.prosports.kz/news/content/201131_35746c5d838e3a0c71674a845a309bc2.jpg",
  },
  {
    _id: 3,
    name: "Разработка игровой формы для команды",
    image:
      "https://img.prosports.kz/news/content/201131_35746c5d838e3a0c71674a845a309bc2.jpg",
  },
  {
    _id: 4,
    name: "Разработка игровой формы для команды",
    image: "../../public/img/explorer.jpg",
  },
];

if (!localStorage.getItem("kits")) {
  localStorage.setItem("kits", JSON.stringify(kits));
}

if (!localStorage.getItem("works")) {
  localStorage.setItem("works", JSON.stringify(works));
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
