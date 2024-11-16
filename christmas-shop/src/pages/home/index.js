import generateCards from "../../components/card/generate-cards";
import giftData from "../../components/card/gift-data.json";
import createLayout from "../../assets/js/create-layout";

createLayout(false);
const bestGiftsIndices = [1, 15, 3, 27];
generateCards(giftData, "[data-best-container]", bestGiftsIndices);
