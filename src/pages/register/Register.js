import React from 'react';
import {Input,Label,RegisterStyle,RegisterButton,FormStyle,Title} from './Register.style'

function Register() {
  return (
  <RegisterStyle>
 <FormStyle>
 <div><Title>Create an account</Title></div>
 <Label>Email</Label>
<Input></Input>
<Label>Username</Label>
<Input></Input>
<Label>Password</Label>
<Input></Input>
<RegisterButton>Continue</RegisterButton>
<p style={{color:'#00aff4'}}>Already have an account?</p>
</FormStyle>
  </RegisterStyle>
  );
}


export default Register;