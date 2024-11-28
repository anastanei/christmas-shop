import "../../style.scss";
import logSelfReview from "./self-review";
import createSvg from "./create-svg";
import appendNav from "../../components/nav/nav";

export default function createLayout() {
  logSelfReview();
  createSvg();
  appendNav();
}
