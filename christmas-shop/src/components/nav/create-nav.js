import createElement from "../../assets/js/create-element";

export default function createNav(isGiftPage) {
  const src = isGiftPage ? "../" : "./";
  const nav = createElement("nav", "header__nav nav", "", { "data-nav": true });

  const navList = createElement("ul", "nav__list");

  const navItems = [
    { text: "gifts", href: `${src}gifts/` },
    { text: "about", href: `${src}#about` },
    { text: "best", href: `${src}#best` },
    { text: "contacts", href: `#footer` },
  ];

  navItems.forEach((item) => {
    const listItem = createElement("li", "nav__list-item");
    const link = createElement("a", "nav__link text-action-l", item.text, {
      href: item.href,
      "data-nav-link": true,
    });

    if (isGiftPage && item.text === "gifts") {
      link.classList.add("nav__link--active");
    }

    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  nav.appendChild(navList);

  return nav;
}
