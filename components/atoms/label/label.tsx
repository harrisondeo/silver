import React from "react";

import "./label.styles.scss";

interface LabelProps {
  text: string;
  htmlFor: string;
}

const Label = ({ text, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
    </label>
  );
};

export default Label;
