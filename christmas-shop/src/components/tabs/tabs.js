import generateCards from "../card/generate-cards";
import giftData from "../card/gift-data.json";
import shuffleArray from "../../assets/js/shuffle-array";

class Tabs {
  constructor() {
    this.tabs = document.querySelector("[data-tabs]");
    this.giftContainerSelector = "[data-gifts]";
    this.giftContainer = document.querySelector(this.giftContainerSelector);

    this.typeAll = this.tabs.querySelector("[data-tabs-all]");
    this.type0 = this.tabs.querySelector("[data-tabs-0]");
    this.type1 = this.tabs.querySelector("[data-tabs-1]");
    this.type2 = this.tabs.querySelector("[data-tabs-2]");
    this.createCards(giftData);

    this.typeAll.addEventListener("change", () => this.createCards(giftData));
    this.type0.addEventListener("change", () =>
      this.filterAndRenderCards("For Work"),
    );
    this.type1.addEventListener("change", () =>
      this.filterAndRenderCards("For Health"),
    );
    this.type2.addEventListener("change", () =>
      this.filterAndRenderCards("For Harmony"),
    );
  }

  filterAndRenderCards(category) {
    const filteredCards = giftData.filter((card) => card.category === category);
    this.createCards(filteredCards);
  }

  createCards(data) {
    this.giftContainer.textContent = "";
    shuffleArray(data);
    generateCards({
      containerSelector: this.giftContainerSelector,
      cards: data,
    });
  }
}

export default function initTabs() {
  new Tabs();
}
