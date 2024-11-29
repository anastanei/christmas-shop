export default class Slider {
  constructor() {
    this.slider = document.querySelector("[data-slider]");
    this.slides = this.slider.querySelector("[data-slides]");
    this.buttonBackward = this.slider.querySelector("[data-slider-backward]");
    this.buttonForward = this.slider.querySelector("[data-slider-forward]");

    this.contentWidth = this.slides.getBoundingClientRect().width;

    this.totalClicks = 3;
    this.resetPosition();
    const resizeObserver = new ResizeObserver(() => {
      this.updateOffset();
    });
    resizeObserver.observe(this.slider);

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    this.handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", () =>
      this.handleMediaQueryChange(mediaQuery),
    );
    this.buttonForward.addEventListener("click", () => this.handleClick(-1));
    this.buttonBackward.addEventListener("click", () => this.handleClick(1));

    this.updateButtons();
  }

  resetPosition() {
    this.currentClick = 0;
    this.currentOffset = 0;
    this.slides.style.transform = `translateX(0px)`;
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
    this.updateButtons();
  }

  moveSlide(offset) {
    this.currentOffset += offset;
    this.slides.style.transform = `translateX(${this.currentOffset}px)`;
  }

  updateButtons() {
    this.buttonBackward.disabled = this.currentClick <= 0;
    this.buttonForward.disabled = this.currentClick >= this.totalClicks;
  }

  handleMediaQueryChange(mediaQuery) {
    this.totalClicks = mediaQuery.matches ? 6 : 3;
    this.updateOffset();
  }
}
