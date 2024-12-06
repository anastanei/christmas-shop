import createElement from "../../assets/js/create-element";
import * as styles from "./nav.module.scss";

export class Nav {
  constructor() {
    this.isGiftPage = window.location.pathname.includes("/gifts");
    this.src = this.isGiftPage ? "../" : "./";
    this.button = document.querySelector(`[data-burger]`);
    this.button.addEventListener("click", () => this.toggleMenu());
    this.initMediaQuery();
  }

  createNavContainer() {
    this.nav = createElement("nav", `header__nav ${styles.nav}`, "", {
      "data-nav": true,
    });
    this.navList = createElement("ul", styles.navList);
    this.nav.append(this.navList);
    this.createNavElements();
    return this.nav;
  }

  createNavElements() {
    const navItems = [
      { text: "gifts", href: `./gifts/` },
      { text: "about", href: `${this.src}#about` },
      { text: "best", href: `${this.src}#best` },
      { text: "contacts", href: `#footer` },
    ];

    navItems.forEach((item) => {
      const listItem = createElement("li", styles.navListItem);
      const link = createElement(
        "a",
        `${styles.navLink} text-action-l`,
        item.text,
        {
          href: item.href,
          "data-nav-link": true,
        },
      );

      if (this.isGiftPage && item.text === "gifts") {
        link.classList.add(`${styles.active}`);
        link.removeAttribute("href");
      }

      listItem.append(link);
      this.navList.append(listItem);
      listItem.addEventListener("click", () => this.toggleMenu(false));
    });
  }

  toggleMenu(forceHide = null) {
    const isOpened =
      forceHide !== null ? false : !this.nav.classList.contains(styles.visible);
    this.nav.classList.toggle(styles.visible, isOpened);
    this.button.classList.toggle("burger--opened", isOpened);
    document.body.classList.toggle("overflow-hidden", isOpened);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  initMediaQuery(breakpoint = 769) {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    mediaQuery.addEventListener("change", (event) =>
      this.handleMediaChange(event),
    );
  }

  handleMediaChange(event) {
    if (event.matches && this.nav.classList.contains(styles.visible)) {
      this.toggleMenu(false);
    }
  }
}

export default function appendNav(parentSelector = "[data-header]") {
  const nav = new Nav();
  const navEl = nav.createNavContainer();
  document.body.querySelector(parentSelector).append(navEl);
}
