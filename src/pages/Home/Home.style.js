import styled from "styled-components";

export const Container=styled.div`
justify-content:center;
height:91vh;
background-color:#404eed;

`
export const HomeStyle=styled.div`
display:flex;
flex-direction:column;
background-color:#404eed;
color:#fff;
padding-inline: 4em;
div{
    padding-top:1em;
    
}
`


export const ButtonStyle=styled.button`
border-radius:20px;
border:none;
padding:1em;
margin:1em;
background-color:${props=>props.bg == 'dark'? '#2f3136' :'#fff' } ;
color:${props=>props.bg == 'dark'? '#fff' :'#2f3136' } ;
width:40%;
cursor:pointer;

`

export const Title=styled.div`
font-familty:Ginto, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size:4em;
font-style:normal;
text-transform:uppercase;
font-weight:700;

` 


export const MainContent=styled.div`
margin-inline:22em;

`