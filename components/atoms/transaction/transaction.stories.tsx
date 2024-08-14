import type { Meta, StoryObj } from "@storybook/react";
import Transaction from "./transaction";

const meta: Meta<typeof Transaction> = {
  title: "Atoms/Transaction",
  component: Transaction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    amount: 100,
    type: "debit",
    description: "This is a description",
    company: "Company",
  },
};
export default meta;

type Story = StoryObj<typeof Transaction>;

export const TransactionOnly: Story = {
  args: {},
};

export const NegativeTransaction: Story = {
  args: {
    amount: 100,
    type: "credit",
    description: "This is a description",
    company: "Company",
  },
};
