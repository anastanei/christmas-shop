import Card from "./card";
import giftData from "./gift-data.json";
import getSrc from "../../assets/js/get-src";

const getCardsByIndices = (data, indices) =>
  indices.map((index) => data[index]);

export default function generateCards({ containerSelector, indices } = {}) {
  const data = giftData;
  const src = getSrc();
  const filteredData = getCardsByIndices(data, indices);
  filteredData.forEach((item) => {
    new Card(containerSelector, item.category, item.name, src);
  });
}
