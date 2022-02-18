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
navigate(`/message/${friend.friendId}/${friend.friendName}`)
}

const generateId=(name)=>{
    const user=[username,name];
    console.log(username)
    const id=user.sort();
    const genId=id[0]+"$"+id[1];
    console.log(genId);
 return genId;
}

const FirstFriend=(friend1,friend2)=>{
    console.log(friend1 +" "+friend2+" "+idgen);
const firstFriendrequest={
    "username":friend1,
    "friends":[ {
        "friendName":friend2,
         "friendId": idgen,
          "status": "friend"
    }
 ]
 
}
console.log(firstFriendrequest);
return firstFriendrequest;
}


const postNewFriend=(f)=>{
    console.log("new"+f);
   Client.post(`/friends`,f)
}


const updateFriends=async(data,name)=>{

let newFriend= {
    "friendName":name,
      "friendId": idgen,
      "status": "friend"
}
let updatedData=data.push(newFriend);
let newData={"friends":updatedData};
await Client.patch(`/friends/username=${name}`,newData);
}


const AddNewFriend=async(name)=>{
    // var info;
    // var id;
    // await Client.get(`/friends?username=${name}`)
    //     .then(res=>{
    //         let info=res.data;
    //       if(info==[]){
          const newF= FirstFriend(name);
          postNewFriend(newF);
          
        //   else{
        //    info=[...info];
        //   console.log(info);
        //   updateFriends(info,name);
        //   }
        // })
}

const addFriend=(friend)=>{
console.log(friend)
// const genId=Idgenerate;
const f1=friend.sourceUsername;
const f2=friend.targetUsername;

checkUserFriend(f1);
AddUser(data,f1);

AddNewFriend(f1,f2);
AddNewFriend(f2,f1);
    
}


const AddUser=(data,f1)=>{
    await Client.get(`/friends?username=${f1}`)
      .then(res=>{
            let data=res.data.length;
        console.log(data)
        if(data.length != 0){
            data=[...data];
            data=data.friends;
           updateFriends(data,f1);
            } 

        else{
            
        }
    }
        ); 




    
}


const checkUserFriend=async(f)=>{


}


const acceptFriendRequest=(friend)=>{
   const val= generateId(friend.sourceUsername);
   setIdgen(val);
   console.log(idgen);
   console.log(friend)
const updatedValue={"status":"accepted"};
// Client.patch(`/friendRequest/${friend.id}`,updatedValue);
setText("Friend request is accepted");
addFriend(friend);
setTimeout(()=>{
setText(null);
//Client.patch(`/friendRequest/${friend.id}`,updatedValue);
},2000)

getReceivedRequest();

}

const getFriend=async()=>{
    await Client.get('friends')
    .then(res=>{
        let data=res.data;
        if(data!=[]){
            getData();
        }
    })

}

const getUserFriend= async(name)=>{
    await Client.get(`/friends?username=${name}`)
      .then(res=>{
        const data=res.data.length;
    console.log(data)
    if(data.length != 0)
        setFriends(data.friends);
        } 
    );
}

const getData=async()=>{
    await Client.get(`/friends`)
    .then(res=>{
        let data=res.data;
        if(data!=[]){
            getUserFriend();
        }
    })

}

const getReceivedRequest=async()=>{
  await Client.get(`/friendRequest?targetUsername=${username}&status=sendedRequest`)
   .then(res=>{
     const data=res.data;
if(data !=[])
     setReceivedRequest(data);
   })
    }
  useEffect(()=>{
    getReceivedRequest();
      getFriend(username);
   
  },[setIdgen,setFriends,setReceivedRequest])
  

  return (
    <FriendStyle>Friends
    <Content>
      {
         friends?.map((friend,index)=>( 
            <li key={index}>{friend.friendName}
            <div><button onClick={()=>chatStart(friend)}>Chat</button><button>unFriend</button></div>
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