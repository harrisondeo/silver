import React, { HTMLInputTypeAttribute } from "react";

// In a reral-world scenario, these would be individual packages that are installed via npm
import Label from "../../atoms/label/label";
import TextField from "../../atoms/textField/textField";

import "./textInput.styles.scss";

type TextInputValidationProps =
  | {
      valid: true;
      message: string;
    }
  | {
      valid: false;
      message: string;
    }
  | {
      valid: undefined;
      message: undefined;
    };

interface TextInputProps {
  id: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  labelText?: string;
  type?: HTMLInputTypeAttribute;
  validation: TextInputValidationProps;
}

const TextInput = ({
  id,
  required,
  placeholder,
  disabled,
  labelText,
  type,
  validation: { valid, message },
}: TextInputProps) => {
  return (
    <div className="textInput">
      {labelText && <Label text={labelText} htmlFor={id} />}
      <TextField
        {...{
          id,
          required,
          placeholder,
          disabled,
          invalid: valid === false,
          type,
        }}
      />
      <p
        className={`textInput__validation ${valid == true ? "valid" : valid == false ? "invalid" : ""}`}
      >
        {message}
      </p>
    </div>
  );
};

export default TextInput;
