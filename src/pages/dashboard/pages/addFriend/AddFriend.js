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
import {useAuth} from '../../../../hooks/ProvideAuth';
import {Client} from '../../../../axios/Register';

function AddFriend() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

 const [addFriend,setaddFriend]=useState("");
const [friendStatus,setFriendStatus]=useState(false);
const [text,setText]=useState();
const {username}=useAuth();
const [existingFriend,setExistingFriend]=useState([]);

  const getData = async () => {
    await axios.get("http://localhost:3001/registration").then((res) => {
      const d = res.data;
      setData(d);
      console.log(data);
    });
  };


const getAlreadyFriend=async()=>{
      await axios.get(`http://localhost:3001/friends?username=${username}`)
      .then((res) => {
              data=res.data[0].friends;
        let friend=[]; 
        data.forEach(element => {
            let val=element.friendName;
           friend.push(val )
        });
      console.log(friend);
            });
}

  const filterData = (searchTerm) => {
    const search = searchTerm.target.value;
const friendArray=existingFriend;
friendArray.indexOf("san");
    setaddFriend(search);
    if (search === "") {
      setSearch([]);
    } else {
    let notFriend = data.filter((user)=> friendArray.indexOf("san") <= -1 );
    console.log(notFriend);
      const newData = notFriend.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      );
      setSearch(newData);
    }
  };

  const sendFriendRequest = (e) => {
    e.preventDefault();

    const { search } = e.target;
    console.log(e.target);
    const sendReq = { 
      "sourceUsername": username,
      "targetUsername": search.value,
      "status":"sendedRequest"
    };
    console.log(sendReq);
    Client.post("/friendRequest", sendReq);
   setText("Successfully Friend Request Send");
    setTimeout(()=>{
setText(null);
    },2000)
  };

  useEffect(() => {
    getData();
const fri=getAlreadyFriend();
setExistingFriend(fri);
  }, [setData, setSearch,setaddFriend]);


const add=user=>{
  setaddFriend(user.username);
console.log(user);
}

  return (
    <AddFriendStyle>  
      <div><h3>Add Friend</h3></div>
      <div>  <p> You can add a friend with their Discord Tag. It's cAsE sEnsitivE!</p> </div>
      <SearchStyle>
        <Form onSubmit={(e) => sendFriendRequest(e)}>    
          <Input
            type="text"
            name="search"
           value={addFriend}
            onChange={(e) => filterData(e)}
            ></Input>  
             <button>Send Friend Request</button>        
        </Form>
      </SearchStyle> 
      <SearchList>
        {search?.map((user) => (
          <React.Fragment key={user.id}><li>{user.username} <button onClick={()=>add(user)}>Add</button></li></React.Fragment>
        ))}
       <p>{text}</p>       
      </SearchList>
      <Content></Content>  
    </AddFriendStyle>
  );
}

export default AddFriend;