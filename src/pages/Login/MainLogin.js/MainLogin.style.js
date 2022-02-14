import styled from "styled-components";

export const FormArea=styled.div`
padding-inline:1em;

display:flex;
flex-direction:column;
font-family:Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
width:100%;

color:#72767d;

h3{
    color:#fff;
    margin-bottom:0.3em;
}


`
export const MainForm=styled.form` 
 display:flex;
flex-direction:column;
 padding-bottom:1em;
 padding-top:1em;
 color:#8e9297;

`
export const Input=styled.input` 
 background-color:#2f3136;
 margin-bottom:1em;
 padding:0.5em;
`

export const Label=styled.label` 
 text-transform:uppercase;
 margin-bottom:0.5em;
`

export const LoginButton=styled.button` 
 cursor:pointer;
 background-color:#5865f2;
 padding:0.5em 0em;
margin-top:1em;
margin-bottom:1em;
border:none;
color:#fff;
font-size:1em;
font-weight:700;
`

export const PStyle=styled.p`  
 font-size:12px;
 color:#00aff4;
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