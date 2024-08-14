import React, { useEffect, useState } from "react";
import Label from "./label";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    text: "Name",
    htmlFor: "name",
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const LabelOnly: Story = {
  args: {},
};
