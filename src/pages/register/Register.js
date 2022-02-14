import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Client} from '../../axios/Register';

import {
  Input,
  Label,
  RegisterStyle,
  RegisterButton,
  FormStyle,
  Title,
  Container,
  Error,
} from "./Register.style";

function Register() {
  
const navigate = useNavigate();

  const [Newuser, setNewuser] = useState({
    // email: "",
    // username: "",
    // password: "",
  });

const [text,setText]=useState();
const [disable,setDisable]=useState(false);
  function onSubmit(e) {
    e.preventDefault();

const { email,username,password } = e.target;

if(email.value !='' && username.value!='' && password.value!=''){
  // setNewuser({
  //   email:email.value,
  //   username:username.value,
  //   password:password.value
  // });
const user={
  email:email.value,
  username:username.value,
  password:password.value
};
const Exist=userExist(user);

}
else{
  setText("Please Enter all the Details");
  setTimeout(()=>{
    setText(null);
  },1000);
  }
}

const createUser=(user)=>{
  Client.post("/",user);
setText("Thank you for Registering");
setTimeout(()=>{
  console.log(Newuser);
  setText(null);
  if(user!=""){
   navigate('/login');
  }
 
},1000);
}

const userExist= async(user)=>{
await Client.get(`?email=${user.email}`)
.then( res => {
  res=res.data;
   if(res.length>0){
     console.log("username already exist");
     setText("Email already Exist");
     setTimeout(()=>{
      setText(null);
    },1000);
     return true;
   }
   else{
    createUser(user);
   }
});
}
useEffect(()=>{

},[setNewuser])
// useEffect(()=>{

// },[setText])

  return (
    <RegisterStyle>
    <Container>
      <FormStyle onSubmit={(e)=> onSubmit(e)}>
      <Error>{text}</Error>
        <div>
          <Title>Create an account</Title>
        </div>
        <Label>Email</Label>
        <Input type="text" name="email" ></Input>
        <Label>Username</Label>
        <Input type="text" name="username"></Input>
        <Label>Password</Label>
        <Input type="password" name="password" ></Input>
        <RegisterButton disabled={disable}>Continue</RegisterButton>
        <p style={{ color: "#00aff4" }}>Already have an account?</p>

      
      </FormStyle>

      </Container>
    </RegisterStyle>
  );
}

export default Register;
