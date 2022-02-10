import styled from "styled-components";

export const AsideConversationStyle=styled.div`
display:flex;
flex-direction:column;
background-color:#292b2f;
padding-inline:1em;
color:#fff;
width:20%;
`

export const Messages=styled.div` 
display:flex;
flex-direction:column;
padding:0px;
div{
    padding:0px;
}
`

export const Content=styled.div`
margin-top:5px;
div{
    margin-bottom:5px;
    margin-top:5px;
}

`

export const DirectMessage=styled.div`
display:flex;
justify-content: space-between;
`

export const LinkStyle=styled.div` 
padding-top:0.5em;
padding-botton:1em;

`

export const InputSearch=styled.input.attrs({type:'text' ,placeholder:'Find or start a conversations'})` 
margin-top:10px;
padding:4px 6px;
background-color:#202225;
border:none;
padding-right:4em;
margin-right:0px;
color:#fff;
`