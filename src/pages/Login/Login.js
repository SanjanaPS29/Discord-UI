import React from 'react';
import {LoginStyle,Container} from './Login.style'
import MainLogin from './MainLogin.js/MainLogin';
import QRcode from './QRCode/QRcode';


function Login() {
  return (
    <Container>
    <LoginStyle>
      <MainLogin></MainLogin>
    <QRcode>
    </QRcode>
    </LoginStyle>
    </Container>
  );
}


export default Login;