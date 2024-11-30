export default function createElement(
  tag = "div",
  classes = "",
  text = "",
  attributes = {},
) {
  const namespace = "http://www.w3.org/2000/svg";
  const isSVGTag = [
    "svg",
    "path",
    "use",
    "g",
    "rect",
    "defs",
    "clipPath",
  ].includes(tag);
  const element = isSVGTag
    ? document.createElementNS(namespace, tag)
    : document.createElement(tag);

  element.textContent = text;

  if (classes.length > 0) {
    element.className = classes;
  }

  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}
