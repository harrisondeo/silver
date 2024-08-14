import React from "react";

// In a reral-world scenario, these would be individual packages that are installed via npm
import TextInput from "../../molecules/textInput/textInput";
import Button from "../../atoms/button/button";

const LoginForm = () => {
  return (
    <div className="loginForm">
      <form>
        <TextInput
          id="loginEmail"
          labelText="Email"
          validation={{ valid: undefined, message: undefined }}
        />
        <TextInput
          id="loginPassword"
          labelText="Password"
          type="password"
          validation={{ valid: undefined, message: undefined }}
        />
        <Button text="Login" altText="Login" type="submit" fullWidth />
      </form>
    </div>
  );
};

export default LoginForm;
