import React from 'react';
import { useReducer } from 'react';
import {AuthContext} from './app/views/store/contexts/AuthContexts'
import { AppRouter } from './app/router/Approuter';
import { authReducer } from './app/views/store/reducers/authReducer';
import './index.css'

const init =()=>{
  let sessionUser:any = sessionStorage.getItem('user');
  let user:any;
  if(!sessionUser){
    user = sessionUser;
  }else{
    user = JSON.parse(sessionUser);
  }
  return user;
}

function App() {

  const [user, dispatchUser ]= useReducer(authReducer, {}, init);
  return (
    <AuthContext.Provider value= {{user, dispatchUser}}>
      <AppRouter/>
    </AuthContext.Provider>

  );
}

export default App;
