import generateCards from "../../components/card/generate-cards";

import createLayout from "../../assets/js/create-layout";
import Slider from "../../components/section-slider/slider";

const bestGiftsIndices = [1, 15, 3, 27];
createLayout();
generateCards({
  containerSelector: "[data-best-container]",
  indices: bestGiftsIndices,
});
const sliderInstance = new Slider();
sliderInstance();
