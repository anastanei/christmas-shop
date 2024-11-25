import "../../style.scss";
import logSelfReview from "./self-review";
import createNav from "../../components/nav/create-nav";
import Menu from "../../components/menu/menu";

export default function createLayout(isGiftPage = false) {
  logSelfReview();
  const requireSvg = require.context("../../assets/svg", false, /\.svg$/);
  const nav = createNav(isGiftPage);

  requireSvg.keys().forEach(requireSvg);

  document.body.querySelector("[data-header]").append(nav);
  new Menu("[data-burger]", "[data-nav]", "[data-nav-link]");
}
