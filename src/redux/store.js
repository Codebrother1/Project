import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import useReducer from './userReducer'


export default createStore(useReducer, applyMiddleware(promiseMiddleware))