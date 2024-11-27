import generateCards from "../../components/card/generate-cards";
import giftData from "../../components/card/gift-data.json";
import createLayout from "../../assets/js/create-layout";

const giftsIndices = [1, 13, 0, 2, 12, 26, 14, 25, 15, 3, 24, 27];

createLayout();
generateCards({
  containerSelector: "[data-gifts]",
  indices: giftsIndices,
});
