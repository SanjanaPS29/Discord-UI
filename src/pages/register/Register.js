import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Input,
  Label,
  RegisterStyle,
  RegisterButton,
  FormStyle,
  Title,
} from "./Register.style";

function Register() {
  const [Newuser, setNewuser] = useState({
    email: "",
    username: "",
    password: "",
  });
const [text,setText]=useState();

  function onSubmit(e) {
    
    e.preventDefault();

const { email,username,password } = e.target;

if(email.value !='' && username.value!='' && password.value!=''){
  setNewuser({
    email:email.value,
    username:username.value,
    password:password.value
  })
  console.log(Newuser);
  createUser(Newuser);
}
else{
  setText("please enter all the details")
  }
}
 
const createUser=(Newuser)=>{
axios.post("http://localhost:3001/registration",Newuser)

}

// const HandleChange=(e)=>{
//   if(email.value !='' && username.value!='' && password.value!=''){
 
//   }
//}


// useEffect(()=>{

// },[setNewuser,setText,text])

  return (
    <RegisterStyle>
      <FormStyle onSubmit={(e)=> onSubmit(e)}>
        <div>
          <Title>Create an account</Title>
        </div>
        <Label>Email</Label>
        <Input type="text" name="email" ></Input>
        <Label>Username</Label>
        <Input type="text" name="username"></Input>
        <Label>Password</Label>
        <Input type="password" name="password" ></Input>
        <RegisterButton>Continue</RegisterButton>
        <p style={{ color: "#00aff4" }}>Already have an account?</p>
      </FormStyle>
      <p style={{ color: "#00aff4" }}>{text}</p>
    </RegisterStyle>
  );
}

export default Register;
