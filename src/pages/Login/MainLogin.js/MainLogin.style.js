import styled from "styled-components";

export const FormArea=styled.div`
display:flex;
flex-direction:column;
font-family:Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
`

export const MainForm=styled.form` 
display:flex;
flex-direction:column;
padding-botton:1em;
`
export const Input=styled.input` 
text-transform:uppercase;
color:#8e9297;
background-color:#2f3136;
margin-bottom:0.5em;
padding:0.5em;
`

export const Label=styled.label` 
text-transform:uppercase;
color:#8e9297;
margin-bottom:0.5em;
`

export const LoginButton=styled.button` 
cursor:pointer;
background-color:#5865f2;
padding:0.5em;
margin-top:1.5em;
`

export const PStyle=styled.p`  
font-size:12px;
color:#00aff4;
display:inline;
`

export const PLast=styled.div`
display:inline;
a{
    text-decoration:none;
}
p{
    font-size:12px; 
    span{
        color:#00aff4;
    }
}
`