import React, { ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

interface ButtonProps {
  text: string;
  altText: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  submitting?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  text,
  altText,
  type,
  onClick,
  submitting,
  disabled,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={`button ${fullWidth ? "fullWidth" : ""}`}
      type={type}
      aria-label={altText}
      disabled={disabled || submitting}
      onClick={onClick}
    >
      {submitting ? "Submitting..." : text}
    </button>
  );
};

export default Button;
