import createElement from "../../assets/js/create-element";

export default function createSnowflakeSvg() {
  const svg = createElement("svg", "", "", {
    viewBox: "0 0 24 24",
  });
  const use = createElement("use", "", "", { href: "#icon-snowflake" });
  svg.append(use);
  return svg;
}
