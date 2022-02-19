import React, {useState,useEffect} from 'react'
import { Client } from '../../../../axios/Register';
import {Content,FriendStyle} from './Friends.style';
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../../../hooks/ProvideAuth";
function Friends() {

  const [friends,setFriends]=useState();
  const[receivedRequest,setReceivedRequest]=useState();
 const [text,setText]=useState();
const navigate=useNavigate();
const {username}=useAuth();
const [idgen,setIdgen]=useState();

const chatStart=friend=>{
console.log(friend);
let id = generateId(friend.friendName);
navigate(`/message/${id}/${friend.friendName}`)
}

const generateId=(name)=>{
  const user=[username,name];
  console.log(username)
  const id=user.sort();
  const genId=id[0]+"$"+id[1];
  console.log(genId);
return genId;
}

const postNewFriend=(f)=>{
 //   console.log("new"+f);
   Client.post(`/friends`,f)
}


const updateFriends=async(data,newData,generatedId)=>{
console.log("updateFriends "+data+" "+newData);

let friendList=data.friends;
console.log("alredy"+friendList);

friendList.push(newData);
let newFriendList={"friends":friendList};
console.log("updateFriends "+newFriendList)
await Client.patch(`/friends/${data.id}`,newFriendList);
}

const AddNewFriend=async(name,frin,generatedId)=>{

        const firstFriendrequest={
            "username":name,
            "friends":[ {
                "friendName":frin,
                "friendId": generatedId,
                 "status": "friend"
            }
         ]
         
        }
          const newFriend= firstFriendrequest;
          console.log()
            Client.post(`/friends`,newFriend)
          
}

const addFriend=(friend)=>{
console.log(friend)
// const genId=Idgenerate;
const f1=friend.sourceUsername;
const f2=friend.targetUsername;

// check if the friend is alreadt exist for both 
 const generatedId= generateId(friend.sourceUsername);

checkUserFriend(f1,f2,generatedId);
checkUserFriend(f2,f1,generatedId);
//AddUser(data,f1);

// AddNewFriend(f1,f2);
// AddNewFriend(f2,f1);
  
}


const AddingExistingFriend=async(data,frin,generatedId)=>{

    const newdata= {
        "friendName":frin,
        "friendId": generatedId,
         "status": "friend"
       }
 
         updateFriends(data,newdata);
}


 const checkUserFriend=async(name,frin,generatedId)=>{
    await Client.get(`/friends?username=${name}`)
     .then(res=>{
      let data=res.data;
    console.log(data.length)
    if(data.length !== 0){
   //   setFriends(data.friends);
   data=data[0];
   console.log("check"+data)
AddingExistingFriend(data,frin,generatedId);
console.log("check"+data)
      } 
      else{
        AddNewFriend(name,frin,generatedId);
        console.log(" no friends")
      }
  }
    );
}


const acceptFriendRequest=(friend)=>{
    
   console.log(friend)
const updatedValue={"status":"accepted"};
Client.patch(`/friendRequest/${friend.id}`,updatedValue);
setText("Friend request is accepted");

 
addFriend(friend);
setTimeout(()=>{
setText(null);
},2000)
 getUserFriend(username);
getReceivedRequest();

}

const getReceivedRequest=async()=>{
 await Client.get(`/friendRequest?targetUsername=${username}&status=sendedRequest`)
 .then(res=>{
  const data=res.data;

if(data !=[])
  setReceivedRequest(data);
 })
  }


  const getUserFriend= async(name)=>{
    await Client.get(`/friends?username=${name}`)
     .then(res=>{
      const data=res.data;
    if(data.length !== 0)
      console.log(data);
    const friendList=data[0];
      setFriends(friendList.friends);
      } 
    );
}



const unFriend=(id)=>{
    // await Client.get(`/friends?username=${name}`)
    //      .then(res=>{
    //       const data=res.data;
    //     if(data.length !== 0)
    //       console.log(data);
    //     const friendList=data[0];
    //       setFriends(friendList.friends);
    //       } 
    //     );
}

 useEffect(()=>{
  getReceivedRequest();
 getUserFriend(username);
 
 },[setIdgen,setFriends,setReceivedRequest])
 

 return (
  <FriendStyle>Friends
  <Content>
   {
    friends?.map((friend,index)=>( 
      <li key={index} >{friend.friendName}
      <div><button onClick={()=>chatStart(friend)}>Chat</button><button onClick={()=>unFriend(friend.friendId)}>unFriend</button></div>
      </li>
    ))
   }
   </Content>
   <Content>
    Accept Request
    {
receivedRequest?.map((friend)=>(
     <li key={friend.id}>{friend.sourceUsername}<button onClick={()=>acceptFriendRequest(friend)}>{friend.status=="sendedRequest"?"Accept": "Accepted"}</button></li>
    ))
   }
   </Content>
<p>{text}</p>
  </FriendStyle>
 )
}


export default Friends;