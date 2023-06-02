import dynamic from "next/dynamic";
import { WrappedCard } from "../types";
import TopRoutes from "./TopRoutes";
import AgenciesPie from "./AgenciesPie";
import Calendar from "./Calendar";
import GeneralStats from "./GeneralStats";
import Monorail from "./Monorail";

const allStories: WrappedCard[] = [
  TopRoutes,
  AgenciesPie,
  Calendar,
  GeneralStats,
  Monorail,
];

export default allStories;
