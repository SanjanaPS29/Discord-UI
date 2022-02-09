import styled from "styled-components";

export const MainContainer=styled.div`
display:flex;
flex-direction:column;
text-align:center;
`

export const Container=styled.div`
justify-content:center;
height:80vh;
background-color:#404eed;

`
export const HomeStyle=styled.div`
 display:flex;
 flex-direction:column;
background-color:#404eed;
color:#fff;
width:100%;
div{
    padding-top:1em;   
}
`



export const ButtonStyle=styled.div`
text-align:center;
`

export const Button=styled.button`
align=items:center;
border-radius:20px;
border:none;
padding:1em;
background-color:${props=>props.bg === 'dark'? '#2f3136' :'#fff' } ;
color:${props=>props.bg === 'dark'? '#fff' :'#2f3136' } ;
margin:1em;
cursor:pointer;
width:35%;

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

export const Invite=styled.div`
display:flex;
padding-top:6em;
padding-bottom:6em;
padding-inline:6em;
align-items:center;
background-color:${props=> props.bg || "#fff"} ;


div{
    padding-inline: 6em;
    text-align: initial
}

`

export const ReliableTech=styled.div`
background-color:#f6f6f6;
padding-inline:12em;
align-items:center;
text-align:center;

h3{
    font-size: 2em;
}
button{
    color: #fff;
    background-color: #5865f2;
    border-radius: 20px;
    padding-inline: 2em;
    padding: 1em 8em;
    border: none;
}

div{
    padding-inline:9em;
}
`