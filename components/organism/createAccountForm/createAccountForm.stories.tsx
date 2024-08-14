import React from "react";
import CreateAccountForm from "./createAccountForm";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CreateAccountForm> = {
  title: "Organisms/CreateAccountForm",
  component: CreateAccountForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof CreateAccountForm>;

export const Primary: Story = {
  args: {},
  render: () => {
    return <CreateAccountForm />;
  },
};
