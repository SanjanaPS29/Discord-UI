import React,{useState} from 'react'
import { useEffect } from 'react';
import {PendingStyle,Content} from './Pending.style';
import {baseURL,Client} from '../../../../axios/Register';


function Pending() {
const [requestFriend,setRequestFriend]=useState();

  useEffect(()=>{
  Client.get("/friendRequest")
  .then(res=>{
    const data=res.data;
      setRequestFriend(data);

      
  });
  console.log(requestFriend);
  },[])
 
  return (
    <PendingStyle>
      Sended Friend Request
      <Content>
      {
         requestFriend?.map((friend)=>(
           <li key={friend.id}>{friend.username}<button>request Sended</button></li>
         ))
      }
      </Content>
    </PendingStyle>
  )
 
}



export default Pending