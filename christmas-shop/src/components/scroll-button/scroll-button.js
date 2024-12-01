import createElement from "../../assets/js/create-element";
import * as styles from "./scroll-button.module.scss";

class ScrollButton {
  constructor() {
    this.initButton();
    this.addScrollListener();
  }

  initButton() {
    this.button = createElement("button", styles["scroll-button"], "", {
      id: "scrollToTop",
      ariaLabel: "Scroll to top",
    });

    const svg = createElement("svg", "", "", {
      viewBox: "0 0 24 24",
      width: "24px",
      height: "24px",
    });
    const use = createElement("use", "", "", { href: "#arrow" });
    svg.append(use);
    this.button.append(svg);

    document.body.append(this.button);

    this.button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  addScrollListener() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.innerWidth <= 768) {
        this.button.style.display = "flex";
      } else {
        this.button.style.display = "none";
      }
    });
  }
}

export default function initScrollButton() {
  new ScrollButton();
}
