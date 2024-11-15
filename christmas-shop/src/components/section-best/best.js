import Card from "../card/card";

export default function createBest() {
  const containerSelector = "[data-best-container]";
  new Card(containerSelector);
}
