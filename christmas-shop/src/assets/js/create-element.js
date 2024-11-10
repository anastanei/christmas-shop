export default function createElement(
  tag = "div",
  classes = "",
  text = "",
  attributes = {},
) {
  const element = document.createElement(tag);
  element.textContent = text;

  if (classes.length > 0) {
    element.className = classes;
  }

  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });

  return element;
}
