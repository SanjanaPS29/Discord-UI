import React from 'react';
import { QRStyle,Code } from './QRCode.style';

 function QRcode() {
  return (
  <QRStyle>
    <div><h3>Login in with QR Code</h3></div>
    <div><img src={"../../../assets/discord.png"}/></div>
    <Code/>
    <div><p>Scan this with the <strong>Discord mobile app</strong> to log in instantly.</p></div>
  </QRStyle>
  );
}

export default QRcode;
