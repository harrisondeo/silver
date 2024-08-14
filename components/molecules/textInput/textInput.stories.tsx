import React from "react";
import TextInput from "./textInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "Molecules/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "name",
    labelText: "Name",
    validation: {
      valid: undefined,
      message: undefined,
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {},
};

export const ValidInput: Story = {
  args: {
    validation: {
      valid: true,
      message: "Valid input",
    },
  },
};

export const InvalidInput: Story = {
  args: {
    validation: {
      valid: false,
      message: "Invalid input",
    },
  },
};
