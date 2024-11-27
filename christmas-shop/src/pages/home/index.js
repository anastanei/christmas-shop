import generateCards from "../../components/card/generate-cards";

import createLayout from "../../assets/js/create-layout";

const bestGiftsIndices = [1, 15, 3, 27];
createLayout();
generateCards({
  containerSelector: "[data-best-container]",
  indices: bestGiftsIndices,
});
