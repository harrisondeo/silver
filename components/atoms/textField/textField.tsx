import React, { HTMLInputTypeAttribute } from "react";

import "./textField.styles.scss";

interface TextFieldProps {
  id?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  invalid?: boolean;
}

const TextField = ({
  id,
  required,
  placeholder,
  disabled,
  type = "text",
  invalid,
}: TextFieldProps) => {
  return (
    <input
      id={id}
      required={required}
      type={type}
      className={`textField ${invalid ? "invalid" : ""}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextField;
