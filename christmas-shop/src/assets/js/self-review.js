export default function logSelfReview() {
  const criteria = {
    title: "CrossCheck Criteria (100/100 points)",
    sections: [
      {
        description:
          "The layout of the pages aligns the design at a screen width of 1440px: +16",
      },
      {
        description:
          "The layout of the pages aligns the design at a screen width of 768px: +16",
      },
      {
        description:
          "There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: +24",
      },
      {
        description:
          "During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: +8",
      },
      {
        description:
          "At screen widths of 768px, the menu and navigation links in <header> are concealed on both pages, and a burger menu icon is displayed: +4",
      },
      {
        description:
          "(Activation of the burger menu icon is not evaluated at this stage.)",
      },
      {
        description:
          "Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools) on both pages: +4",
      },
      {
        description:
          "The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): +12",
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
