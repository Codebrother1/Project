import axios from 'axios'



initialState = {
  user: {},
  isLoggiedIn: false
}


const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER"


export function loginUser(user){
  return {
    type: LOGIN_USER,
    payload: user
  }
}

export function logoutUser(){
  return{
    type: LOGOUT_USER,
    payload: initialState
  }
}

export function getUser(){
  const user = axios('./auth/user').then(res => res.data)
  return {
    type: GET_USER,
    payload: user
  }
}



export default function userReducer(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      return {...state, user: action.payload, isLoggiedIn: true}
     case LOGOUT_USER:
       return initialState
      case GET_USER + "_PENDING"  :
        return state;
      case GET_USER + "_FUFILLED"  :
        return {...state, user: action.payload, isLoggiedIn: true};
      case GET_USER + "_REJECTED"  :
        retuen initialState
      default: 
      return state
  }
}