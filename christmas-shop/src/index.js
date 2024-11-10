import "./style.scss";
import createNav from "./components/nav/create-nav";
import Menu from "./components/menu/menu";

const nav = createNav();
document.body.querySelector("[data-header]").append(nav);

new Menu("[data-burger]", "[data-nav]", "[data-nav-link]");
