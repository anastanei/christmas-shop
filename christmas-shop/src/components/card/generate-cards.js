import Card from "./card";
import getSrc from "../../assets/js/get-src";

export default function generateCards({ containerSelector, cards } = {}) {
  const src = getSrc();
  const container = document.querySelector(containerSelector);
  cards.forEach((item) => {
    const card = new Card({ item, src });
    const cardEl = card.createCard();
    container.append(cardEl);
  });
}
