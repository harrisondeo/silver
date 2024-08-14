import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import TransactionsPage from "./transactions";

const meta: Meta<typeof TransactionsPage> = {
  title: "TransactionsPage",
  component: TransactionsPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof TransactionsPage>;

export const Primary: Story = {
  args: {},
};
