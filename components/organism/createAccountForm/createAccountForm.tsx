import React from "react";

// In a reral-world scenario, these would be individual packages that are installed via npm
import Button from "../../atoms/button/button";
import TextInput from "../../molecules/textInput/textInput";

import "./createAccountForm.styles.scss";

const CreateAccountForm = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
        }}
      >
        <div className="createAccountForm__input-row">
          <div className="createAccountForm__form-group">
            <div className="createAccountForm__form-item">
              <TextInput
                id="firstName"
                labelText="First Name"
                validation={{ valid: undefined, message: undefined }}
              />
            </div>
            <div className="createAccountForm__form-item">
              <TextInput
                id="lastName"
                labelText="Last Name"
                validation={{ valid: undefined, message: undefined }}
              />
            </div>
          </div>
        </div>
        <div className="createAccountForm__input-row">
          <TextInput
            id="createEmail"
            labelText="Email"
            validation={{ valid: undefined, message: undefined }}
          />
        </div>
        <div className="createAccountForm__input-row">
          <TextInput
            id="createPassword"
            labelText="Password"
            type="password"
            validation={{ valid: undefined, message: undefined }}
          />
        </div>
        <div className="createAccountForm__input-row">
          <Button
            text="Create Account"
            altText="Create Account"
            type="submit"
            fullWidth
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
