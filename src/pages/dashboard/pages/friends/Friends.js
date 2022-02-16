import React, {useState,useEffect} from 'react'
import { Client } from '../../../../axios/Register';
import {Content,FriendStyle} from './Friends.style';
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../../../hooks/ProvideAuth";
function Friends() {

    const [requestFriend,setRequestFriend]=useState();
    const [acceptFriend,setAcceptFriend]=useState();
const navigate=useNavigate();
const {username}=useAuth();

const chatStart=friend=>{
console.log(friend);
const id=friend.id;
navigate(`/message/${id}`)

}

const addUsername=friend=>{
console.log(friend);
}

const handleFriendRequest=()=>{
  Client.get(`/friendRequest?username=${username}`)
  .then(res=>{
   const data=res.data;
   setRequestFriend(data);
  })
  }

const handleUnFriend=async (friend)=>{
  const newData={status:false}
await Client.patch(`/friends/${friend.id}`,newData)
}

  useEffect(()=>{
  Client.get("/friends")
  .then(res=>{
    const data=res.data;
const d=data.filter((friend)=>(friend.status==true));
      setRequestFriend(d);
  },[setRequestFriend])
  });

  return (
    <FriendStyle>Friends
    <Content>
      {
        // <button onClick={()=>addUsername(user)}>
         requestFriend?.map((friend)=>(
          //  <li key={friend.id}>{friend.username}<button onClick={()=>addUsername(friend)}>Chat</button></li>
           <li key={friend.id}>{friend.username}<div><button onClick={()=>chatStart(friend)}>Chat</button><button onClick={()=>handleUnFriend(friend)}>unFriend</button></div></li>
         ))
      }
      </Content>

      <Content>
        Accept Request

        {
        // <button onClick={()=>addUsername(user)}>
         requestFriend?.map((friend)=>(
          //  <li key={friend.id}>{friend.username}<button onClick={()=>addUsername(friend)}>Chat</button></li>
           <li key={friend.id}>{friend.username}<button>Accept</button></li>
         ))
      }
      </Content>

    </FriendStyle>

  )
}


export default Friends;