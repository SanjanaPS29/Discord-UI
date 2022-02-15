import styled from 'styled-components';
import Friend from '../../../../assets/image-dashboard/no_online_friends.svg'

export const AddFriendStyle=styled.div` 
// display:flex;
// flex-direction:column;
// background-color:#4f545c;
background-image:url(${Friend});
background-size: cover;
text-align:left;
height:70vh;
color:black;
padding:1em;


`

export const Input=styled.input` 
background-color:#2f3136;
width:94%;
margin-right:10px;
color:#fff;
`

export const Form=styled.form`
display:flex;
`

export const SearchStyle=styled.div`
display:flex;
justify-content: space-between;
height:2em;
background-color:#2f3136;
padding:0.5em;

button{
align=items:center;
border:none;
background-color: #5865f2;
cursor:pointer;
}



`