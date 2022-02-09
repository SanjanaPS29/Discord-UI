import styled from "styled-components";
import loginbackground from '../../assets/login-bg.PNG';

export const Input=styled.input` 
text-transform:uppercase;
color:#8e9297;
background-color:#2f3136;
width:100%;
margin-bottom:2em;
margin:1em 0em;
padding:.8em 0em;
`

export const Label=styled.label` 
text-transform:uppercase;
color:#8e9297;
margin:1em 0em;
`

export const RegisterStyle=styled.div` 
background-image:url(${loginbackground});
align-item:center;
padding:1em;
border-radius:5px;
padding-bottom:12.8%;
background-size:cover;
`
export const FormStyle=styled.form` 

margin-inline: auto;
background-color:#36393f;
width:28%;
background-color: #36393f;
border-radius: 5px;
padding: 2em;


`

export const Title=styled.div`
color:#fff;
font-height:16px;
font-size:20px;
color:#fff;
text-align:center;

`

export const RegisterButton=styled.button` 
cursor: pointer;
background-color: #5865f2;
padding: 1em 0em;
width: 100%;
margin-top: 1.5em;
color: white;
border:none;
`
