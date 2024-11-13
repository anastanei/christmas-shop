export default class Menu {
  constructor(burgerSelector, navSelector, linkSelector) {
    this.nav = document.querySelector(navSelector);
    this.button = document.querySelector(burgerSelector);
    console.log(linkSelector);
    // this.links = this.menu.querySelectorAll(linkSelector);
    this.button.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const isOpened = this.nav.classList.toggle("nav--visible");
    this.button.classList.toggle("burger--opened", isOpened);
  }
}
