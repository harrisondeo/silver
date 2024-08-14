import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "./loginPage";

const meta: Meta<typeof LoginPage> = {
  title: "LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Primary: Story = {
  args: {},
};
