import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  MessageStyle,
  Input,
  MessageBox,
  Form,
  ConversationStyle,
  Received,
} from "./Message.style";
import { Client } from "../../../../axios/Register";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../hooks/ProvideAuth";

function Message() {
  const [message, setMessage] = useState();

  const [data, setData] = useState();
  var { friendId,friendName } = useParams();
  const { username } = useAuth();
  const [generateId,setGeneratedId]=useState();
  const [messageNumber,setMessageNumber]=useState('');
const [message_id,setMessageId]=useState('')

 
  const getId=()=>{
//     const user=[username,friend];
//     console.log(username)
//     const id=user.sort();
//     const genId=id[0]+"$"+id[1];
//     console.log(genId)
//     setGeneratedId(genId);
// if(genId!=undefined)
    get(friendId);
  }

const get=async(genId)=>
{  
  var msg;
  await Client.get(`/chatDetails?chatId=${friendId}`)
.then(res=>{
  let data=res.data;
  if(data!= []){
    setData(data.messages);
    msg=res.data;
    console.log(data);
  }
})


// if(msg!=undefined){
//   setMessageNumber(msg.messages);
//   console.log(messageNumber);
// messageNumber.forEach(id => {
//   GetIndividualMessage(id);
// });
// }

}

  // const getAllMessage=async(data)=>{
 
  //   const allmessage=[];
  //   console.log(data);
  //   data.forEach(element => {
   
  //   // setData(allmessage);
  //   }
  //   )}


// const GetIndividualMessage=async(element)=>{
 
//   await Client.get(`/messages?messageId=${element}`)
//   .then(res=>{
//     const data=res.data;
//      let  d={...data};
//      console.log(data)
//       setData([...data,data.messages]);



//   //   const msg=res.data;
//   // setData(data=>[...data,msg[0]]);
//   })
// }

  const sendMessage = async (e) => {

    const messageDetails={
      "message":message,
      "senderName":username,
      "receiverName":friendName
    }
    console.log(messageDetails);
     console.log(data);
    const old=data;
  //  await Client.get("/messages/1")
  // .then(res=>{

  // });
  old.push(messageDetails);
  console.log(old);
const updatedMsg={"messages":old}
await Client.patch("/chatDetails/1",updatedMsg);

// const chatDetails={
//   "chat_id":generateId,
//   "messages_id": [...messageNumber,11]
// }
// await Client.patch(`/chatDetails/${generateId}`,chatDetails)

    // await Client.post("/conversation", {
    //   message: message,
    //   senderName: username,
    // });
    // getConversation();
     getId();
    setMessage("");
  };

  const handleMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  // const getConversation = () => {
  //   Client.get("/conversation").then((res) => {
  //     const data = res.data;
  //     setData(data);
  //   });
  // };

  useEffect(() => {
   
   // getConversation();
    getId();
   
    // getAllMessage();
  }, [setData,setGeneratedId,setMessage]);

  return (
    <MessageStyle>
      <div style={{ marginBottom: "10px" }}>Message Area</div>
      <MessageBox>
        <Input
          type="text"
          name="message"
          placeholder="Message Area"
          value={message}
          onChange={(e) => handleMessage(e)}
        ></Input>
         <button onClick={(e) => sendMessage(e)}>Send Message</button>
      </MessageBox>
      <ConversationStyle>
        {data?.map((msg,index) => (
          <React.Fragment key={index}>
            <p>{msg.senderName}</p>
            <li>{msg.message}</li>
          </React.Fragment>
        ))}
      </ConversationStyle>

   
    </MessageStyle>
  );
}

export default Message;