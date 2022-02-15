import React from "react";
import { Input, AddFriendStyle ,SearchStyle,Form} from './AddFriend.style'
import { useEffect , useState} from 'react/cjs/react.development';
import axios from 'axios';

function AddFriend() {


  const [data,setData ]=useState();
const [search,setSearch]=useState();

  const getData=async()=>{
  await axios.get("http://localhost:3001/registration")
  .then (res =>{
    const data=res.data;
    setData(data);
    console.log(data);
  })
  }

const onChange=(e)=>{
const {search}=e.target;
setSearch({'search':search});
}

const filterData=(searchTerm)=>{
  data.forEach(item =>{
      if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
          item.classList.remove('hide')
      }else{
          item.classList.add('hide')
      }
  })
}

const sendFriendRequest=(e)=>{
  e.preventDefault();

const {search}= e.target;
console.log(search.value);
const sendReq={"username":search.value};
 axios.post("http://localhost:3001/friendRequest",sendReq);
}

useEffect(()=>{
  getData();
},[])

  return (
    <AddFriendStyle>
      <div><h3>Add Friend</h3></div>
      <div>
       <p> You can add a friend with their Discord Tag. It's cAsE sEnsitivE!</p>
      </div>
      <SearchStyle>
        <Form onSubmit={(e)=>sendFriendRequest(e)}>
        <Input type="text" name="search" onChange={(e)=>onChange(e)}></Input>
        <button>Send Friend Request</button>   
        </Form>
      </SearchStyle>
      <div>
        <p>Friends List</p>
         {
           data?.map((user)=>(
<div key={user.username}>{user.username}</div>
           ))    
           }
         
      </div>
    </AddFriendStyle>
  );
}

export default AddFriend;



