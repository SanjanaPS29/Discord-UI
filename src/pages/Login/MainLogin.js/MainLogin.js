import React, { useState,useContext } from "react";
import { authContext , useAuth } from "../../../hooks/ProvideAuth";

import {
  MainForm,
  FormArea,
  Input,
  Label,
  LoginButton,
  PStyle,
  PLast,
  Error,
} from "./MainLogin.style";


import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";

function MainLogin() {
const {login} = useAuth();

console.log('loggedIn '+ login)
  const baseURL="http://localhost:3001/registration" 
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [text, setText] = useState();

  const b = async (id, password) => {
    await axios.get(baseURL+"/"+ id).then((res) => {
      const details = res.data;
      if (details.password == password) {
        setText("Successfully Logged In");
        setTimeout(() => {
          setText(null);
           navigate('/dashboard');
          // localStorage.setItem("username",details.email);
          // props.history.push("/dashboard");

        }, 1000);
      } else {
        setText("User name or password is wrong");
        setTimeout(() => {
          setText(null);
        }, 1000);
      }
    });
  };

  const checkUser = async (user) => {
    let id;
    await axios
    .get(baseURL+"?email=" + user.email)
      .then((res) => {
        res = res.data;
        const a = res[0].id;
        id = a;
        if (id == undefined) {
          setText("Email Doesn't Exist");
          setTimeout(() => {
            setText(null);
          }, 1000);
        } else {
          b(id, user.password);
        }
        return id;
      });
  };
  function onSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;

    if (email.value != "" && password.value != "") {
      // setUser({
      //   email: email.value,
      //   password: password.value,
      // });
      //console.log(user);
      const user = {
        email: email.value,
        password: password.value,
      };
      checkUser(user);
    } else {
      setText("Please Enter all the Details");
      setTimeout(() => {
        setText(null);
      }, 1000);
    }
  }

  useEffect(() => {}, []);

  return (
    <FormArea>
<button onClick={login}>Login</button>

      <h3>Welcome Back!</h3>
      <p>We're so excited to see you again!</p>

      <MainForm onSubmit={(e) => onSubmit(e)}>
        <>
          <Label>Email</Label>
          <Input type="text" name="email"></Input>
          <Label>Password</Label>
          <Input type="password" name="password"></Input>
          <PStyle>Forgot your password?</PStyle>
          <LoginButton>Login</LoginButton>

          <Error>{text}</Error>
        </>
      </MainForm>

      <PLast>
        <p>
          {" "}
          Need an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </PLast>
    </FormArea>
  );
}

export default MainLogin;
