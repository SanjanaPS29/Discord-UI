import React from 'react'
import { useAuth } from '../../../../../hooks/ProvideAuth'
import { ActiveStyle,Activety } from './ActiveNow.style'
import axios from 'axios';


 function ActiveNow() {



  const {logout}= useAuth();
  return (
    <ActiveStyle>
        <div><h3>Active Now</h3></div>
    <Activety>
        <button onClick={logout}>Logout</button>
         <h4>It's quite for now...</h4>
         <p>when a friend starts an activity--Like playing a game or hanging out on voice--we'll show it here?
             
         </p>
    </Activety>
    </ActiveStyle>
  )
}

export default ActiveNow;
