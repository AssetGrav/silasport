import { clothes } from "../../api/menu/total-menu/clothes.api";
import { clothesBomberKits } from "../../api/menu/total-menu/clothes/clothes-bomber.api";
import { clothesFootyKits } from "../../api/menu/total-menu/clothes/clothes-footy.api";
import { clothesInsulatedJacketKits } from "../../api/menu/total-menu/clothes/clothes-insulated-jacket.api";
import { clothesInsulatedTrousersKits } from "../../api/menu/total-menu/clothes/clothes-insulated-trousers.api";
import { clothesKnittedKits } from "../../api/menu/total-menu/clothes/clothes-knitted.api";
import { clothesParadKits } from "../../api/menu/total-menu/clothes/clothes-parad.api";
import { clothesShortsKits } from "../../api/menu/total-menu/clothes/clothes-shorts.api";
import { clothesTshirtCottonKits } from "../../api/menu/total-menu/clothes/clothes-tshirt-cotton.api";
import { clothesTshirtPeKits } from "../../api/menu/total-menu/clothes/clothes-tshirt-pe.api";
import { clothesTshirtPoloKits } from "../../api/menu/total-menu/clothes/clothes-tshirt-polo.api";
import { clothesVestKits } from "../../api/menu/total-menu/clothes/clothes-vest.api";
import { drawing } from "../../api/menu/total-menu/drawing.api";
import { hockey } from "../../api/menu/total-menu/hockey.api";
import { hockeyGamashKits } from "../../api/menu/total-menu/hockey/hockey-gamash.api";
import { hockeyPlayTshirtKits } from "../../api/menu/total-menu/hockey/hockey-play-tshirt.api";
import { hockeyRefereeKits } from "../../api/menu/total-menu/hockey/hockey-refferee.api";
import { hockeyReituzKits } from "../../api/menu/total-menu/hockey/hockey-reituz.api";
import { hockeyTrainingTshirtKits } from "../../api/menu/total-menu/hockey/hockey-training-tshirt.api";
import { services } from "../../api/menu/total-menu/services.api";

export const hockeyRoute = [
  {
    host: "playtshirt/",
    linkName: "Игровые майки",
    name: "Хоккейный свитер или майка на заказ",
    fileName: "",
    buttons: hockey.list,
    kits: hockeyPlayTshirtKits,
  },
  {
    host: "trainingshirt/",
    linkName: "Тренировочная форма",
    name: "Тренировочная форма на заказ",
    fileName: "",
    buttons: hockey.list,
    kits: hockeyTrainingTshirtKits,
  },
  {
    host: "gamash/",
    linkName: "Гамаши",
    name: "Хоккейные гамаши и гетры",
    fileName: "",
    buttons: hockey.list,
    kits: hockeyGamashKits,
  },
  {
    host: "breeches/",
    linkName: "Рейтузы",
    name: "Хоккейные рейтузы детские и взрослые",
    fileName: "",
    buttons: hockey.list,
    kits: hockeyReituzKits,
  },
  {
    host: "refereetshirt/",
    linkName: "Судейские майки",
    name: "Судейская хоккейная форма",
    fileName: "",
    buttons: hockey.list,
    kits: hockeyRefereeKits,
  },
];

export const clothesRoute = [
  {
    host: "parad/",
    linkName: "Парадные костюмы",
    name: "Парадные мужские и женские костюмы SilaSport",
    fileName: "",
    buttons: clothes.list[0].arr,
    kits: clothesParadKits,
  },
  {
    host: "knitted/",
    linkName: "Трикотажные костюмы",
    name: "Спортивный тренировочный костюм",
    fileName: "",
    buttons: clothes.list[0].arr,
    kits: clothesKnittedKits,
  },
  {
    host: "footy/",
    linkName: "Костюмы из футера",
    name: "Спортивные костюмы из хлопка",
    fileName: "",
    buttons: clothes.list[0].arr,
    kits: clothesFootyKits,
  },
  {
    host: "bomber/",
    linkName: "Бомберы",
    name: "Пошив бомберов с нанесением логотипов на заказ",
    fileName: "",
    buttons: clothes.list[0].arr,
    kits: clothesBomberKits,
  },
  {
    host: "jacket/",
    linkName: "Куртки спортивные утепленные",
    name: "Пошив зимних спортивных курток с логотипом на заказ",
    fileName: "",
    buttons: clothes.list[1].arr,
    kits: clothesInsulatedJacketKits,
  },
  {
    host: "trousers/",
    linkName: "Брюки и полукомбинезоны утепленные",
    name: "Зимние спортивные брюки и полукомбинезоны на заказ",
    fileName: "",
    buttons: clothes.list[1].arr,
    kits: clothesInsulatedTrousersKits,
  },
  {
    host: "vest/",
    linkName: "Жилеты",
    name: "Жилеты обычные и утеплённые с нанесениями фамилий, номеров, логотипов и эмблем",
    fileName: "",
    buttons: clothes.list[1].arr,
    kits: clothesVestKits,
  },
  {
    host: "tshirt-cotton/",
    linkName: "Футболки х/б",
    name: "Футболки х/б на заказ",
    fileName: "",
    buttons: clothes.list[2].arr,
    kits: clothesTshirtCottonKits,
  },
  {
    host: "tshirt-pe/",
    linkName: "Футболки п/э на заказ",
    name: "Футболки ПЭ на заказ",
    fileName: "",
    buttons: clothes.list[2].arr,
    kits: clothesTshirtPeKits,
  },
  {
    host: "polo/",
    linkName: "Футболки-поло на заказ",
    name: "Футболки-поло на заказ",
    fileName: "",
    buttons: clothes.list[2].arr,
    kits: clothesTshirtPoloKits,
  },
  {
    host: "shorts/",
    linkName: "Шорты",
    name: "Спортивные шорты",
    fileName: "",
    buttons: clothes.list[2].arr,
    kits: clothesShortsKits,
  },
];

export const drawingRoute = [
  {
    host: "football/",
    linkName: "На футбольную форму",
    name: "Нанесение имени, фамилии, надписи на футбольную форму",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "tshits/",
    linkName: "На футболки",
    name: "Нанесение имени и фамилии на футболки",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "volleyball/",
    linkName: "На волейбольную форму",
    name: "Нанесение фамилии, имени на волейбольную форму",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "hockey/",
    linkName: "На хоккейный свитер",
    name: "Нанесение имени и фамилии на хоккейный свитер",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "basketball/",
    linkName: "На баскетбольную форму",
    name: "Нанесение имени и фамилии на баскетбольную форму",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "suit/",
    linkName: "На спортивные костюмы",
    name: "Нанесение имени и фамилии на спортивные костюмы",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "sweatshirts/",
    linkName: "На толстовки",
    name: "Нанесение имени и фамилии на толстовки",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "baseball/",
    linkName: "На бейсболки",
    name: "Нанесение имени и фамилии на бейсболки и кепки",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "sport-form/",
    linkName: "На спортивную форму",
    name: "Нанесение имени и фамилии на спортивную форму",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
  {
    host: "sport-clothes/",
    linkName: "На спортивную одежду",
    name: "Нанесение имени и фамилии на спортивную одежду",
    fileName: "",
    buttons: drawing.list[0].arr,
  },
];

export const servicesRoute = [
  {
    host: "embroidery/",
    linkName: "Вышивка на изделии",
    name: "Вышивка на спортивную одежду цифры, буквы, логотипа",
    fileName: "",
    buttons: services.list[0].arr,
  },
  {
    host: "flag-print/",
    linkName: "Флаги",
    name: "Флаги на заказ",
    fileName: "",
    buttons: services.list[0].arr,
  },
  {
    host: "print-clothes/",
    linkName: "Печать на тканях",
    name: "Печать на тканях на заказ",
    fileName: "",
    buttons: services.list[0].arr,
  },
  {
    host: "design/",
    linkName: "Разработка дизайна",
    name: "Разработка дизайна",
    fileName: "",
    buttons: services.list[0].arr,
  },
  {
    host: "tailoring/",
    linkName: "Услуги по пошиву",
    name: "Услуги по пошиву изделий",
    fileName: "",
    buttons: services.list[0].arr,
  },
  {
    host: "command/",
    linkName: "Экипировка корпоративных команд",
    name: "Экипировка корпоративных команд",
    fileName: "",
    buttons: services.list[1].arr,
  },
  {
    host: "schools/",
    linkName: "Экипировка спортивных школ",
    name: "Экипировка спортивных школ",
    fileName: "",
    buttons: services.list[1].arr,
  },
  {
    host: "hockey-prof/",
    linkName: "Экипировка хоккейных команд",
    name: "Экипировка хоккейных команд",
    fileName: "",
    buttons: services.list[2].arr,
  },
  {
    host: "football-prof/",
    linkName: "Экипировка футбольных команд",
    name: "Экипировка футбольных команд",
    fileName: "",
    buttons: services.list[2].arr,
  },
  {
    host: "basketball-prof/",
    linkName: "Экипировка баскетбольных команд",
    name: "Экипировка баскетбольных команд",
    fileName: "",
    buttons: services.list[2].arr,
  },
  {
    host: "volleyball-prof/",
    linkName: "Экипировка волейбольных команд",
    name: "Экипировка волейбольных команд",
    fileName: "",
    buttons: services.list[2].arr,
  },
  {
    host: "hockey/",
    linkName: "Экипировка любительских команд: хоккей",
    name: "Экипировка любительских команд: хоккей",
    fileName: "",
    buttons: services.list[3].arr,
  },
  {
    host: "football/",
    linkName: "Экипировка любительских команд: футбол",
    name: "Экипировка любительских команд: футбол",
    fileName: "",
    buttons: services.list[3].arr,
  },
  {
    host: "basketball/",
    linkName: "Экипировка любительских команд: баскетбол",
    name: "Экипировка любительских команд: баскетбол",
    fileName: "",
    buttons: services.list[3].arr,
  },
  {
    host: "volleyball/",
    linkName: "Экипировка любительских команд: волейбол",
    name: "Экипировка любительских команд: волейбол",
    fileName: "",
    buttons: services.list[3].arr,
  },
];
