import styled from "styled-components";
import loginbackground from '../../assets/login-bg.PNG';

export const Container=styled.div` 
margin-inline:30%;
background-color:#36393f;
padding-inline:0.5em;
border-radius:10px;
div{
    width:100%;
}
`

export const LoginStyle=styled.div` 
display:flex;
margin:auto;
padding-top:1em;
padding-bottom:1em;

color:#8e9297;
padding-inline:2em;
h3{
    color:#fff;
}
`
export const Background=styled.div` 
background-image:url(${loginbackground});
background-size: cover;
background-color:#fff;
padding-top:4em;
padding-bottom:12.9em;
`