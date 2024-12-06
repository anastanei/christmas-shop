import * as dialogStyles from "./dialog.module.scss";
import * as cardStyles from "../card/card.module.scss";
import createElement from "../../assets/js/create-element";
import createGiftPicture from "../gift-picture/create-gift-picture";
import createSnowflakeSvg from "./createSnowflakeSvg";
import typeData from "../card/type-data.json";

export default class Dialog {
  constructor({ item, src }) {
    this.item = item;
    this.type = item.category;
    this.title = this.item.name;
    this.src = src;

    const currentTypeData = typeData[this.type];
    this.tagName = currentTypeData.tagName;
    this.type = currentTypeData.type;
    this.alt = currentTypeData.alt;

    this.dialogElement = this.createDialog();
  }

  createDialog() {
    const dialog = createElement(
      "dialog",
      `${cardStyles.card} ${dialogStyles.dialog}`,
    );

    const article = createElement("article");
    const picture = createGiftPicture({
      type: this.type,
      alt: this.alt,
      src: this.src,
      className: dialogStyles.image,
    });

    const textArea = this.createTextArea();

    const closeButton = createElement("button", dialogStyles.closeButton, "", {
      "aria-label": "Close info",
    });

    closeButton.addEventListener("click", () => this.closeDialog());
    article.append(picture, textArea, closeButton);

    dialog.append(article);

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        this.closeDialog();
      }
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeDialog();
      }
    });

    document.body.append(dialog);

    return dialog;
  }

  createTextArea() {
    const textArea = createElement("div", cardStyles.textArea);
    const tagName = createElement(
      "div",
      `${cardStyles.tag} ${cardStyles[this.type]} header-4`,
      this.tagName,
    );
    const title = createElement(
      "h3",
      `${cardStyles.title} header-3`,
      this.title,
    );
    const description = createElement(
      "p",
      `paragraph ${dialogStyles.description}`,
      this.item.description,
    );

    const features = this.createFeatures();
    textArea.append(tagName, title, description, features);
    return textArea;
  }

  createFeatures() {
    const featuresContainer = createElement("div", dialogStyles.features);

    const featuresTitle = createElement(
      "h4",
      `header-4 ${dialogStyles["features-title"]}`,
      "Adds superpowers to:",
    );

    featuresContainer.append(featuresTitle);

    Object.entries(this.item.superpowers).forEach(([name, value]) => {
      const feature = this.createFeature([name, value]);
      featuresContainer.append(feature);
    });

    return featuresContainer;
  }

  createFeature([name, value]) {
    const feature = createElement("div", dialogStyles.feature);

    const featureName = createElement(
      "div",
      `${dialogStyles["feature-name"]} paragraph`,
      name,
    );
    const featureValue = createElement(
      "div",
      dialogStyles["feature-value"],
      value,
    );
    const svgWrapper = createElement("div", dialogStyles["svg-wrapper"]);
    const shortValue = value / 100;

    for (let i = 0; i < 5; i += 1) {
      const isTransparent = !(i < shortValue);
      svgWrapper.append(createSnowflakeSvg(isTransparent));
    }
    feature.append(featureName, featureValue, svgWrapper);
    return feature;
  }

  openDialog() {
    this.dialogElement.showModal();
    document.body.classList.add("overflow-hidden");
  }

  closeDialog() {
    this.dialogElement.close();
    document.body.classList.remove("overflow-hidden");
    this.dialogElement.remove();
  }
}
