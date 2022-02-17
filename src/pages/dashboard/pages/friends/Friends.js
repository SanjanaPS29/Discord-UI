import React, {useState,useEffect} from 'react'
import { Client } from '../../../../axios/Register';
import {Content,FriendStyle} from './Friends.style';
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../../../hooks/ProvideAuth";
function Friends() {

    const [friends,setfriends]=useState();
    const [acceptFriend,setAcceptFriend]=useState();
    const[receivedRequest,setReceivedRequest]=useState();
   const [text,setText]=useState();

const navigate=useNavigate();
const {username}=useAuth();






const chatStart=friend=>{
console.log(friend);
// const id=friend.id;
navigate(`/message/${friend.friendName}`)

}

const addUsername=friend=>{
console.log(friend);
}

const handleFriendRequest=()=>{
  Client.get(`/friendRequest?username=${username}`)
  .then(res=>{
   const data=res.data;
   setfriends(data);
  })
  }


const handleUnFriend=async (friend)=>{
//   const newData={status:false}
// await Client.patch(`/friends/${friend.id}`,newData)
}

const acceptFriendRequest=(friend)=>{
  const updatedValue={statusId:"Friend",status:true}
Client.patch(`/friendRequest/${friend.id}`,updatedValue);
setText("Friend request is accepted");
// Client.put('/friends/id');
setTimeout(()=>{
setText(null);
},2000)
// Client.post('/friends,')
}

const getFriend=async()=>{
 await Client.get(`/friends?username=${username}`)
  .then(res=>{
    const data=res.data;
     let  d={...data}; 
     console.log(data[0].friends)
      setfriends(data[0].friends);
});



// Client.get('/friendRequest?status=true&statusId=Friend&sourceUsername')
}

const getReceivedRequest=()=>{
  Client.get(`/friendRequest?targetUsername=${username}`)
   .then(res=>{
     const data=res.data;
     setReceivedRequest(data);
   })
    }
  useEffect(()=>{
    getReceivedRequest();
    setTimeout(() => {
      getFriend();
    }, 2000);
   
  },[setfriends])
  

  return (
    <FriendStyle>Friends
    <Content>
      {
         friends?.map((friend,index)=>(
           <React.Fragment key={index}>
            <li >{friend}</li>
            <div><button onClick={()=>chatStart()}>Chat</button><button onClick={(e)=>handleUnFriend(friend)}>unFriend</button></div>
            </React.Fragment>
         ))
      }
      </Content>

      <Content>
        Accept Request
        {
receivedRequest?.map((friend)=>(
           <li key={friend.id}>{friend.sourceUsername}<button onClick={acceptFriendRequest(friend)}>Accept</button></li>
          //  
         ))
      }
      </Content>
<p>{text}</p>
    </FriendStyle>

  )
}


export default Friends;