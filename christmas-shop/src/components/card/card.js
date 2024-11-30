import * as styles from "./card.module.scss";
import createElement from "../../assets/js/create-element";
import Dialog from "../dialog/dialog";
import createGiftPicture from "../gift-picture/create-gift-picture";
import typeData from "./type-data.json";

export default class Card {
  constructor({ item, src }) {
    this.item = item;
    this.type = item.category;
    this.src = src;
    console.log(item);
    const currentTypeData = typeData[this.type];

    this.tagName = currentTypeData.tagName;
    this.type = currentTypeData.type;
    this.alt = currentTypeData.alt;

    this.title = item.name;
  }

  createCard() {
    const card = createElement("li", styles.card);
    const article = createElement("article");
    const button = createElement("button", styles.button, "", {
      type: "button",
      "data-card-button": true,
      "aria-label": "Learn more",
    });
    const picture = createGiftPicture({
      type: this.type,
      alt: this.alt,
      src: this.src,
      className: styles.image,
    });
    const textArea = this.createTextArea();
    article.append(picture, textArea, button);
    card.append(article);
    card.addEventListener("click", () => {
      this.openDialog();
    });
    return card;
  }

  createTextArea() {
    const textArea = createElement("div", styles.textArea);
    const tagName = createElement(
      "div",
      `${styles.tag} ${styles[this.type]} header-4`,
      this.tagName,
    );
    const title = createElement("h3", `${styles.title} header-3`, this.title);
    textArea.append(tagName, title);
    return textArea;
  }

  openDialog() {
    const dialog = new Dialog({
      item: this.item,
      src: this.src,
    });
    dialog.openDialog();
  }
}
