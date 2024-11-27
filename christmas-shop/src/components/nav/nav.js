import createElement from "../../assets/js/create-element";
import * as styles from "./nav.module.scss";

export class Nav {
  constructor() {
    this.isGiftPage = window.location.pathname.includes("/gifts");
    this.src = this.isGiftPage ? "../" : "./";
  }

  createNav() {
    const nav = createElement("nav", `header__nav ${styles.nav}`, "", {
      "data-nav": true,
    });

    const navList = createElement("ul", styles.navList);

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
      navList.append(listItem);
    });

    nav.append(navList);

    return nav;
  }
}

export default function appendNav(parentSelector = "[data-header]") {
  const nav = new Nav();
  const navEl = nav.createNav();
  document.body.querySelector(parentSelector).append(navEl);
}
