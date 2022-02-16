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
  const [message, setMessage] = useState("");
  const [data, setData] = useState();
  let { id } = useParams();
  const { username } = useAuth();

  const sendMessage = async (e) => {
    await Client.post("/conversation", {
      message: message,
      senderName: username,
    });
    getConversation();
    setMessage("");
  };

  const handleMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const getConversation = () => {
    Client.get("/conversation").then((res) => {
      const data = res.data;
      console.log(data);
      setData(data);
    });
  };

  useEffect(() => {
    console.log(username);
    getConversation();
  }, [setMessage, setData]);

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
          <React.Fragment key={msg.id}>
            <p>{msg.senderName}</p>
            <li>{msg.message}</li>
          </React.Fragment>
        ))}
      </ConversationStyle>

    
    </MessageStyle>
  );
}

export default Message;
