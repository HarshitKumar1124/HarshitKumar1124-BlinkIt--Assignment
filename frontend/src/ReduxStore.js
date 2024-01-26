
//Initializing  REDUX STORE


import {createStore,combineReducers,applyMiddleware} from "redux";

import {thunk} from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"
import {login,loadUser,logoutUser} from "./Redux/ReduxReducers/userReducers"
import { getAllBlogs,deleteBlog,createBlog,getSpecificBlog  } from "./Redux/ReduxReducers/blogReducers";


const reducer = combineReducers({
  
    login,
    loadUser,
    logoutUser,
    getAllBlogs,
    deleteBlog,
    createBlog,
    getSpecificBlog ,



});

let initailState ={
};

const middleware = [thunk]

const store = createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;