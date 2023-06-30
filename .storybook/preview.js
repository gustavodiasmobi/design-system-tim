/** @type { import('@storybook/html').Preview } */

// import { themes } from "@storybook/theming";
import "../styles/scss/pages/main.css";
import "../styles/scss/pages/storybook.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // docs: {
    //   theme: themes.dark,
    // },
  },
};

export default preview;
