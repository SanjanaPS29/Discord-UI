import React,{createContext, useContext} from 'react';

const authContext=createContext();

 function ProvideAuth({children}) {

    const auth=useProvideAuth();
  return (
    <authContext.Provider value={auth}>
        {children}
    </authContext.Provider>
  );
}

function useAuth(){
    return useContext(authContext);
}

export default ProvideAuth;