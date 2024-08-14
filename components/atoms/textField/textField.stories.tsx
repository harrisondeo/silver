import React, { useEffect, useState } from "react";
import TextField from "./textField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "Enter your name",
    disabled: false,
    type: "text",
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const TextFieldOnly: Story = {
  args: {},
};
