import React from "react";
import { MainForm, FormArea, Input, Label, LoginButton,PStyle ,PLast} from './MainLogin.style'
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
          <PStyle>Forgot your password?</PStyle>
        </MainForm>
        <LoginButton>Login</LoginButton>
        <PLast>
        <p> Need an account? <Link to="/register"><span>Register</span></Link></p>
      </PLast>
    </FormArea>
    </div>
  );
}

export default MainLogin;
