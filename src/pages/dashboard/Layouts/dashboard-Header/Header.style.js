import styled from "styled-components";


export const HeaderStyle=styled.ul`
display:flex;
padding:0.5em 1em;
margin:0px;
background-color:#4f545c;
li{
    
    margin-inline:0.5em;
    padding-inline:0.8em;
    margin:2px;
}

`
export const ListStyle=styled.li` 
list-style:none;
color:${props=> props.color || "#fff"};
`

export const Button=styled.button` 
background-color:#3ba55d;
color:#fff;
border:none;
border-radius:5px;
padding:3px 5px;

`