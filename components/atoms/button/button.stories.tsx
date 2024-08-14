import React, { useEffect, useState } from "react";
import Button from "./button";

import type { StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const ButtonOnly: Story = {
  args: {},
  render: (args) => {
    const [isSubmitting, setIsSubmitting] = useState(args.submitting);

    useEffect(() => {
      setIsSubmitting(args.submitting);
    }, [args.submitting]);

    const handleClick = () => {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    };

    return <Button {...args} onClick={handleClick} submitting={isSubmitting} />;
  },
};
