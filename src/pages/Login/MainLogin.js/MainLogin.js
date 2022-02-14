import React,{ useState} from "react";
import { MainForm, FormArea, Input, Label, LoginButton,PStyle ,PLast} from './MainLogin.style'
import { Link } from "react-router-dom";
import axios from "axios";

function MainLogin() {


     const [user, setUser] = useState({
    email: "",
    password: "",
  });
const [text,setText]=useState();

      function onSubmit(e) {
     const b=async()=>{
  await axios.get("http://localhost:3001/registration/1")
.then(res=>{const details=res.data
if(details.password == password.value)
  console.log("correct")

});
}
    e.preventDefault();

var id;
const { email,password } = e.target;

if(email.value !='' && password.value!=''){
  setUser({
    email:email.value,
    password:password.value
  })

 axios.post("http://localhost:3001/registration?email=`${email}`")
          .then(res=>{res=res.data;
         const a={...res};
            console.log(a);
            id=a;
           });
 b();

}
else{
  setText("please enter all the details")
  }


 

}

  return (

      <FormArea>
        <h3>Welcome Back!</h3>
        <p>We're so excited to see you again!</p>

        <MainForm onSubmit={(e)=>onSubmit(e)}>
          <>
          <Label>Email</Label>
          <Input type="text" name="email"></Input>
          <Label>Password</Label>
          <Input type="password" name="password"></Input>
          <PStyle>Forgot your password?</PStyle>
           <LoginButton>Login</LoginButton>
          </>
        </MainForm>
       
        <PLast>
        <p> Need an account? <Link to="/register"><span>Register</span></Link></p>
      </PLast>
    </FormArea>

  );
}

export default MainLogin;
