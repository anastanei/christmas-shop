export default function logSelfReview() {
  const criteria = {
    title: "CrossCheck Criteria (90/90 points)",
    sections: [
      {
        description: "Implementation of the burger menu on both pages: +22",
      },
      {
        description: "Implementation of the Slider on the home page: +18",
      },
      {
        description: "Implementation of the Timer on the home page: +8",
      },
      {
        description:
          "When both opening or refreshing the page, 4 random cards are displayed in the block Best Gifts on the home page: +4",
      },
      {
        description:
          "Implementation of the Category switching for products on the gifts page: +8",
      },
      {
        description:
          "Implementation of the Scroll-to-Top button on the gifts page: +12",
      },
      {
        description:
          "Implementation of the Modal for selected gift on both pages: +18",
      },
    ],
  };

  const res = criteria.sections
    .map((section, index) => `${index + 1}. ${section.description}`)
    .join("\n");
  console.group();

  console.log(`\x1b[36m${criteria.title}\x1b[0m\n\x1b[33m${res}\x1b[0m`);
  console.groupEnd();
}
