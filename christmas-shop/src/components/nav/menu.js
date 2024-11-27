import * as styles from "./nav.module.scss";

export class Menu {
  constructor({ burgerSelector, navSelector }) {
    this.nav = document.querySelector(navSelector);
    this.button = document.querySelector(burgerSelector);
    this.button.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const isOpened = this.nav.classList.toggle(styles.visible);
    this.button.classList.toggle("burger--opened", isOpened);
  }
}

export default function initMenu({
  burgerSelector = "[data-burger]",
  navSelector = "[data-nav]",
} = {}) {
  return new Menu({ burgerSelector, navSelector });
}
