/** @type { import('@storybook/html').Preview } */

// import { themes } from "@storybook/theming";
import "../styles/scss/pages/main.css";
import "../styles/scss/pages/storybook.css";

const customViewports = {
  "iPhone 5-SE": {
    name: "[320 x 568] iPhone 5/SE",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  "iPhone S5": {
    name: "[360 x 640] iPhone S5",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  "iPhone 6-7-8": {
    name: "[375 x 667] iPhone 5/SE",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  "Galaxy s20 Ultra": {
    name: "[412 x 915] Galaxy s20 Ultra",
    styles: {
      width: "412px",
      height: "915px",
    },
  },
  "Monitor 1": {
    name: "[1366 x 615] Monitor 1",
    styles: {
      width: "1366px",
      height: "615px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
