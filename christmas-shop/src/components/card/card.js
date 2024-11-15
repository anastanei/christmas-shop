import createElement from "../../assets/js/create-element";

export default class Card {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tag = "for work";
    this.imgType = "for-harmony";
    this.title = "Spontaneous Coding Philosopher";
    const card = this.createCard();
    this.container.append(card);
  }

  createCard() {
    const card = createElement("li", "card");
    const article = createElement("article", "card__article");
    const picture = this.createPicture();
    const textArea = this.createTextArea();
    article.append(picture, textArea);
    card.append(article);
    return card;
  }

  createTextArea() {
    const textArea = createElement("div", "card__text-area");
    const tag = createElement("div", "card__tag header-4", this.tag);
    const title = createElement("h3", "card__title header-3", this.title);
    textArea.append(tag, title);
    return textArea;
  }

  createPicture() {
    const imgName = this.imgType; // variable
    const imgAlt =
      "A transparent glass Christmas tree ball ornament with a gold top, containing a miniature purple Christmas tree, gold decorations, and small gifts inside.";
    const imgPath = `./images/${imgName}`;
    const picture = createElement("picture", "card__image");
    const sourceAVIF = createElement("source", "", "", {
      srcSet: `${imgPath}.avif`,
      type: "image/avif",
    });
    const sourceWEBP = createElement("source", "", "", {
      srcSet: `${imgPath}.webp`,
      type: "image/webp",
    });
    const img = createElement("img", "img-in-picture", "", {
      src: `${imgPath}.png`,
      alt: imgAlt,
      width: 310,
      height: 230,
    });
    picture.append(sourceAVIF, sourceWEBP, img);
    return picture;
  }
}
