import React from "react";

import LoginForm from "../components/organism/loginForm/loginForm";
import CreateAccountForm from "../components/organism/createAccountForm/createAccountForm";

import "./loginPage.styles.scss";

const LoginPage = () => {
  return (
    <div className="loginPage_root">
      <h1>Welcome to Catbank</h1>
      <h3>Please login or create an account to get started</h3>
      <div className="loginPage">
        <div className="loginPage_split">
          <h2>Login</h2>
          <LoginForm />
        </div>
        <div className="loginPage__divider" />
        <div className="loginPage_split">
          <h2>Create an account</h2>
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
