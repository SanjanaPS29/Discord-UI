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
  const [message, setMessage] = useState('');

  const [data, setData] = useState([]);
  var { friendName } = useParams();
  const { username } = useAuth();
  const [generateId,setGeneratedId]=useState();
  const [messageNumber,setMessageNumber]=useState('');
const [message_id,setMessageId]=useState('')

 
  const getId=()=>{
    const user=[username,friendName];
    console.log(username)
    const id=user.sort();
    const NewId=id[0]+"$"+id[1];
    console.log(NewId)
    setGeneratedId(NewId);
if(NewId!=undefined)
    get();
  }


const get=async()=>
{  
  var msg;
  await Client.get(`/chatDetails?chatId=${generateId}`)
.then(res=>{
 msg=res.data[0];
})
if(msg.messages!=undefined){
  setMessageNumber(msg.messages);
  console.log(messageNumber);
messageNumber.forEach(id => {
  GetIndividualMessage(id);
});
}

}

  // const getAllMessage=async(data)=>{
 
  //   const allmessage=[];
  //   console.log(data);
  //   data.forEach(element => {
   
  //   // setData(allmessage);
  //   }
  //   )}


const GetIndividualMessage=async(element)=>{
  
  await Client.get(`/messages?messageId=${element}`)
  .then(res=>{
    const data=res.data;
     let  d={...data}; 
     console.log(data)
      setData([...data,data.messages]);



  //   const msg=res.data;
  // setData(data=>[...data,msg[0]]); 
  })
}

  const sendMessage = async (e) => {

    const messageDetails={
      "message":message,
      "senderName":username,
      "receiverName":friendName
    }

await Client.post("/messages",messageDetails);

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
    get();
    setMessage("");
  };

  const handleMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const getConversation = () => {
    Client.get("/conversation").then((res) => {
      const data = res.data;
      setData(data);
    });
  };

  useEffect(() => {
    
    console.log(username);

   // getConversation();
    getId();
   
    // getAllMessage();
  }, [setData,setGeneratedId,setMessageNumber]);

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
        {data?.map((msg) => (
          <React.Fragment key={msg.messageId}>
            <p>{msg.senderName}</p>
            <li>{msg.message}</li>
          </React.Fragment>
        ))}
      </ConversationStyle>

    
    </MessageStyle>
  );
}

export default Message;
