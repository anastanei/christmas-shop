export class Component {
  #node = null;
  constructor(
    { tag = 'div', classes = '', text = '', attributes = {} },
    ...children
  ) {
    const NSTags = {
      svg: true,
      path: true,
      defs: true,
      radialGradient: true,
      stop: true
    };

    const namespace = 'http://www.w3.org/2000/svg';

    const node = NSTags[tag]
      ? document.createElementNS(namespace, tag)
      : document.createElement(tag);

    if (classes.length) {
      const arrayOfClasses = classes.split(' ');
      arrayOfClasses.forEach((className) => node.classList.add(className));
    }

    Object.keys(attributes).forEach((attribute) =>
      node.setAttribute(attribute, attributes[attribute])
    );
    node.textContent = text;
    this.#node = node;
    children.length && children.forEach((child) => this.append(child));
  }

  append(...children) {
    children.forEach((child) => this.#node.appendChild(child.getNode()));
  }

  getNode() {
    return this.#node;
  }
}
