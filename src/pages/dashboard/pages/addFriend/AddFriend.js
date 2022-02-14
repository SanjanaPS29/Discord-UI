import React from "react";
import { Input, AddFriendStyle } from './AddFriend.style'

function AddFriend() {
  return (
    <AddFriendStyle>
      <div><h3>Add Friend</h3></div>
      <div>
       <p> You can add a friend with their Discord Tag. It's cAsE sEnsutivE!</p>
      </div>
      <div>
        <Input type="text"></Input>
        <button>Send Friend Request</button>
      </div>
    </AddFriendStyle>
  );
}

export default AddFriend;
