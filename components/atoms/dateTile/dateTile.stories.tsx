import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import DateTile from "./dateTile";

const meta: Meta<typeof DateTile> = {
  title: "Atoms/DateTile",
  component: DateTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    dateText: "Today",
  },
};
export default meta;

type Story = StoryObj<typeof DateTile>;

export const DateTileOnly: Story = {
  args: {},
};
