import dynamic from "next/dynamic";
import { WrappedCard } from "../../types";

export default {
  score: () => 1,
  cardName: "Monorail",
  Component: dynamic(() => import("./Monorail"), { ssr: false }),
} as WrappedCard;
