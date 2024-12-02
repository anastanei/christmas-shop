class Slider {
  constructor() {
    this.slider = document.querySelector("[data-slider]");
    this.slides = this.slider.querySelector("[data-slides]");
    this.buttonBackward = this.slider.querySelector("[data-slider-backward]");
    this.buttonForward = this.slider.querySelector("[data-slider-forward]");

    this.contentWidth = this.slides.getBoundingClientRect().width;

    this.totalClicks = 6;
    this.resetPosition();
    const resizeObserver = new ResizeObserver(() => {
      this.updateOffset();
    });
    resizeObserver.observe(this.slider);

    const mediaQueryMD = window.matchMedia("(min-width: 769px)");
    const mediaQueryXL = window.matchMedia("(min-width: 1440px)");

    this.handleMediaQueryMDChange(mediaQueryMD);
    mediaQueryMD.addEventListener("change", () =>
      this.handleMediaQueryMDChange(mediaQueryMD),
    );

    this.handleMediaQueryXLChange(mediaQueryXL);
    mediaQueryXL.addEventListener("change", () =>
      this.handleMediaQueryXLChange(mediaQueryXL),
    );

    this.buttonForward.addEventListener("click", () => this.handleClick(-1));
    this.buttonBackward.addEventListener("click", () => this.handleClick(1));

    this.updateButtons();
  }

  resetPosition() {
    this.currentClick = 0;
    this.currentOffset = 0;
    this.slides.style.transform = `translateX(0px)`;
    this.updateButtons();
  }

  handleClick(direction) {
    this.moveSlide(direction * this.offset);
    this.currentClick -= direction;
    this.updateButtons();
  }

  updateOffset() {
    const visibleAreaWidth = this.slider.getBoundingClientRect().width;
    this.offset = (this.contentWidth - visibleAreaWidth) / this.totalClicks;
    this.resetPosition();
  }

  moveSlide(offset) {
    this.currentOffset += offset;
    this.slides.style.transform = `translateX(${this.currentOffset}px)`;
  }

  updateButtons() {
    this.buttonBackward.disabled = this.currentClick <= 0;
    this.buttonForward.disabled = this.currentClick >= this.totalClicks;
  }

  handleMediaQueryMDChange(mediaQuery) {
    this.totalClicks = mediaQuery.matches ? 3 : 6;
    console.log(mediaQuery, this.totalClicks);
    this.updateOffset();
  }

  handleMediaQueryXLChange(mediaQuery) {
    if (mediaQuery.matches) {
      window.addEventListener("resize", this.resetPosition.bind(this));
    } else {
      window.removeEventListener("resize", this.resetPosition.bind(this));
    }
  }
}

export default function initSlider() {
  new Slider();
}
