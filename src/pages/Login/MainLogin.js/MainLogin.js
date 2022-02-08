import React from "react";
import { MainForm, FormArea, Input, Label, LoginButton } from './MainLogin.style'
import { Link } from "react-router-dom";

function MainLogin() {
  return (
    <div>
      <FormArea>
        <h3>Welcome Back!</h3>
        <p>We're so excited to see you again!</p>
        <MainForm>
          <Label>Email</Label>
          <Input></Input>
          <Label>Password</Label>
          <Input></Input>
          <p>Forgot your password?</p>
          <LoginButton>Login</LoginButton>
        </MainForm>
        <p>
          Need an account? <Link to="/login">Register</Link>
        </p>
      </FormArea>
    </div>
  );
}

export default MainLogin;
