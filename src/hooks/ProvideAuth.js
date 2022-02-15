import React,{createContext,useState , useContext} from 'react';
import { useEffect } from 'react';

const AuthContext = createContext({});

 function ProvideAuth({children}) {

  const sleep=miliseconds=>{

  };

  const [loggedIn,setLoggnedIn]=useState(false);
  // useEffect(()=> {
  //   // pull savd login state from local store/ 
  //   setTimeout(()=>{ setLoggnedIn(true);},2000)
  // },[]);
  

const login=()=>{
// sleep(2000).then(() => setLoggnedIn(true));
setTimeout(()=>{ setLoggnedIn(true);},2000)
}

const logout=()=>{
 
  setTimeout(() => { setLoggnedIn(false); }, 2000);
}

const authContextValue={
  login,
  loggedIn,
  logout
};

  return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  );
}

const useAuth=()=> React.useContext(AuthContext);
export {ProvideAuth,useAuth};