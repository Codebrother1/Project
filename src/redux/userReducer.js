initialState = {
  user: {},
  isLoggiedIn: false
}


const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER"


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



export default function userReducer(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      return {...state, user: action.payload, isLoggiedIn: true}
     case LOGOUT_USER:
       return {...action.payload} 
      default: 
      return state
  }
}