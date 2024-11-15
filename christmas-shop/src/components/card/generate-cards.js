import Card from "./card";

export default function generateCards(data, containerSelector) {
  data.forEach((item) => {
    new Card(containerSelector, item.category, item.name);
  });
}
