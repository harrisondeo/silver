import React, { useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    text: "Apply Now",
    altText: "Apply Now",
    submitting: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarOnly: Story = {
  args: {},
};
