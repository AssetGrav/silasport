import { basketball } from "./menu/total-menu/basketball.api";
import { clothes } from "./menu/total-menu/clothes.api";
import { football } from "./menu/total-menu/football.api";
import { hockey } from "./menu/total-menu/hockey.api";
import { sportType } from "./menu/total-menu/sportType.api";
import { volleyball } from "./menu/total-menu/volleyball.api";

export const totalSport = [
  ...basketball.list,
  ...clothes.list,
  ...football.list,
  ...hockey.list,
  ...sportType.list,
  ...volleyball.list,
];
