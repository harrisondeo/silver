import { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div>
        <link
          rel="stylesheet"
          href={`../themes/${context.globals.theme}.css`}
        />
        <Story />
      </div>
    ),
  ],
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: "green",
      toolbar: {
        dynamicTitle: true,
        icon: "paintbrush",
        items: [
          { value: "green", title: "Green" },
          { value: "blue", title: "Blue" },
          { value: "purple", title: "Purple" },
        ],
      },
    },
  },
};

export default preview;
