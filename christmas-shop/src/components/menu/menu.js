export default class Menu {
  constructor(burgerSelector, navSelector) {
    this.nav = document.querySelector(navSelector);
    this.button = document.querySelector(burgerSelector);
    this.button.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const isOpened = this.nav.classList.toggle("nav--visible");
    this.button.classList.toggle("burger--opened", isOpened);
  }
}
