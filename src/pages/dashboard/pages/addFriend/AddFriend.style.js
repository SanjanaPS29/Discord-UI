import styled from 'styled-components';
import Friend from '../../../../assets/image-dashboard/friends1.svg'

export const AddFriendStyle=styled.div` 
// display:flex;
// flex-direction:column;
// background-color:#4f545c;
width: -webkit-fill-available;
height:-webkit-fill-available;
background-color:#4f545c;
text-align:left;
color:#fff;
padding:1em;
`

export const Content=styled.div` 
display:flex;
flex-direction:column;
height:50%;
justify-content:center;
 background-image:url(${Friend});
// background-size: cover;
`

export const Input=styled.input` 
 background-color:#2f3136;
 width:55%;
 color:#fff;
 padding:0.5em;
`

export const Form=styled.form`
display:flex;
`

export const SearchStyle=styled.div`
 //display:flex;
//  width:100%;
// justify-content: flex-start;
//  height:2em;
//  background-color:#2f3136;
//  color:#fff;
//  padding:0.8em 0em;
//  border-radius: 5px;
// margin-top:0.5em;

// button{
//  border:none;
//  padding-inline:2em;
//  background-color: #5865f2;
//  cursor:pointer;

// }

`
export const SearchList = styled.ul`
list-style:none;

li{
    display:flex;
    justify-content: space-between;
    background-color:#6cd46c54;
    border-radius:4px;
    padding:0.5em;
    margin-bottom:0.4em;
}
button{
    padding:0.3em 1em;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color:green;
    cursor:pointer;
    margin:3px;
}

`























