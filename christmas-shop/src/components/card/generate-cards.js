import Card from "./card";

const getCardsByIndices = (data, indices) =>
  indices.map((index) => data[index]);

export default function generateCards(
  data,
  containerSelector,
  indices,
  src = "./",
) {
  const filteredData = getCardsByIndices(data, indices);
  filteredData.forEach((item) => {
    new Card(containerSelector, item.category, item.name, src);
  });
}
