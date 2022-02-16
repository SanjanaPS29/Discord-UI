import React from "react";
import {
  Input,
  AddFriendStyle,
  SearchStyle,
  Form,
  Content,
  SearchList
} from "./AddFriend.style";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

function AddFriend() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
const [username,setUsername]=useState("");
const [friendStatus,setFriendStatus]=useState(false);
const [text,setText]=useState();

  const getData = async () => {
    await axios.get("http://localhost:3001/registration").then((res) => {
      const d = res.data;
      setData(d);
      console.log(data);
    });
  };

  const filterData = (searchTerm) => {
    const search = searchTerm.target.value;
    setUsername(search);
    console.log(searchTerm.target.value);
     
    if (search === "") {
      setSearch([]);
    } else {
      const newData = data.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      );
      setSearch(newData);
    }
  };

  const sendFriendRequest = (e) => {
    e.preventDefault();

    const { search } = e.target;
    console.log(e.target);
    const sendReq = { username: search.value };
    axios.post("http://localhost:3001/friendRequest", sendReq);
   setText("Successfully Friend Request Send");
    setTimeout(()=>{
setText(null);
    },2000)
  };

  useEffect(() => {
    getData();
  }, [setData, setSearch,setUsername]);


const addUsername=user=>{
  setUsername(user.username);
console.log(user);
}

  return (
    <AddFriendStyle>
      
      <div>
        <h3>Add Friend</h3>
     
      </div>
      <div>             
        <p>
          You can add a friend with their Discord Tag. It's cAsE sEnsitivE!
        </p>
     
      </div>
  
      <SearchStyle>
        <Form onSubmit={(e) => sendFriendRequest(e)}>    
          <Input
            type="text"
            name="search"
         value={username}
            onChange={(e) => filterData(e)}
          >    
          </Input>
             <button>Send Friend Request</button>        
        </Form>
      </SearchStyle>
        
      <SearchList>
          
        {search?.map((user) => (
          <><li key={user.id}>{user.username} <button onClick={()=>addUsername(user)}>Add</button></li></>
        ))}
               <p>{text}</p>       
      </SearchList>
      <Content></Content>  
    </AddFriendStyle>
  );
}

export default AddFriend;
