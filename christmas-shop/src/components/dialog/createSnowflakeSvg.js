import createElement from "../../assets/js/create-element";
import * as styles from "./dialog.module.scss";

export default function createSnowflakeSvg(isTransparent) {
  const className = isTransparent ? styles.transparent : "";
  const svg = createElement("svg", "", "", {
    viewBox: "0 0 24 24",
    width: "24px",
    height: "24px",
    class: className,
  });
  const use = createElement("use", "", "", { href: "#icon-snowflake" });
  svg.append(use);
  return svg;
}
