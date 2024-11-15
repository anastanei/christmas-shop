import createElement from "../../assets/js/create-element";

export default class Card {
  constructor(containerSelector, type, title) {
    this.container = document.querySelector(containerSelector);
    this.type = type;

    switch (this.type) {
      case "work":
        this.tagName = "for work";
        this.type = "work";
        break;
      case "health":
        this.tagName = "for health";
        this.type = "health";
        break;
      case "harmony":
        this.tagName = "for harmony";
        this.type = "harmony";
        break;
      default:
        this.tagName = "for work";
        this.type = "work";
    }
    this.title = title;
    const card = this.createCard();
    this.container.append(card);
  }

  createCard() {
    const card = createElement("li", "card hover-default");
    const article = createElement("article", "card__article");
    const button = createElement("button", "card__button", "", {
      type: "button",
      "data-card-button": true,
      "aria-label": "Learn more",
    });
    const picture = this.createPicture();
    const textArea = this.createTextArea();
    article.append(picture, textArea, button);
    card.append(article);
    return card;
  }

  createTextArea() {
    const textArea = createElement("div", "card__text-area");
    const tagName = createElement(
      "div",
      `card__tag card__tag--${this.type} header-4`,
      this.tagName,
    );
    const title = createElement("h3", "card__title header-3", this.title);
    textArea.append(tagName, title);
    return textArea;
  }

  createPicture() {
    const imgName = this.type;
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
