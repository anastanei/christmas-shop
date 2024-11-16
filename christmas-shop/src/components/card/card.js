import createElement from "../../assets/js/create-element";

export default class Card {
  constructor(containerSelector, type, title) {
    this.container = document.querySelector(containerSelector);
    this.type = type;

    switch (this.type) {
      case "For Work":
        this.tagName = "for work";
        this.type = "work";
        this.alt =
          "A transparent glass Christmas tree ball ornament with a gold top, containing a pink gift box with a gold ribbon and small gold decorations inside.";
        break;
      case "For Health":
        this.tagName = "for health";
        this.type = "health";
        this.alt =
          "A transparent glass Christmas tree ball ornament with a gold top, containing a small snowman with a pink hat and scarf, along with gold decorations inside.";
        break;
      case "For Harmony":
        this.tagName = "for harmony";
        this.type = "harmony";
        this.alt =
          "A transparent glass Christmas tree ball ornament with a gold top, containing a miniature purple Christmas tree, gold decorations, and small gifts inside.";
        break;
      default:
        this.tagName = "for work";
        this.type = "work";
        this.alt =
          "A transparent glass Christmas tree ball ornament with a gold top, containing a pink gift box with a gold ribbon and small gold decorations inside.";
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
    const imgAlt = this.alt;
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
