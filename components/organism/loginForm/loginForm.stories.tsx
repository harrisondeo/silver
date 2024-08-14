import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./loginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Organisms/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};
