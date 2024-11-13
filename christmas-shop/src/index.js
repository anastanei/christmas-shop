import "./style.scss";
import "./assets/svg/icon-snowflake.svg";
import "./assets/svg/social-facebook.svg";
import "./assets/svg/social-instagram.svg";
import "./assets/svg/social-telegram.svg";
import "./assets/svg/social-x.svg";
import createNav from "./components/nav/create-nav";
import Menu from "./components/menu/menu";

const nav = createNav();
document.body.querySelector("[data-header]").append(nav);

new Menu("[data-burger]", "[data-nav]", "[data-nav-link]");
