import Card from "./card";
import giftData from "./gift-data.json";
import getSrc from "../../assets/js/get-src";

const getCardsByIndices = (data, indices) =>
  indices.map((index) => data[index]);

export default function generateCards({ containerSelector, indices } = {}) {
  const data = giftData;
  const src = getSrc();
  const filteredData = getCardsByIndices(data, indices);
  console.log(data, filteredData);
  const container = document.querySelector(containerSelector);
  filteredData.forEach((item) => {
    const card = new Card({ type: item.category, title: item.name, src });
    const cardEl = card.createCard();
    container.append(cardEl);
  });
}
