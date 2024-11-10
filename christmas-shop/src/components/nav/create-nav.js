import createElement from "../../assets/js/create-element";

export default function createNav() {
  const nav = createElement("nav", "header__nav nav", "", { "data-nav": true });

  const navList = createElement("ul", "nav__list");

  const navItems = [
    { text: "gifts", href: "" },
    { text: "about", href: "" },
    { text: "best", href: "" },
    { text: "contacts", href: "" },
  ];

  navItems.forEach((item) => {
    const listItem = createElement("li", "nav__list-item");
    const link = createElement("a", "nav__link text-action-l", item.text, {
      href: item.href,
      "data-nav-link": true,
    });
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  nav.appendChild(navList);

  return nav;
}
