import generateCards from "../card/generate-cards";
import shuffleArray from "../../assets/js/shuffle-array";
import giftData from "../card/gift-data.json";

export default function createBest() {
  const shuffledBest = shuffleArray(giftData).slice(0, 4);

  generateCards({
    containerSelector: "[data-best-container]",
    cards: shuffledBest,
  });
}
