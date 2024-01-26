import axios from "axios"
import {
    REQUEST_CREATE_BLOG,
    SUCCESS_CREATE_BLOG,
    FAIL_CREATE_BLOG,
    REQUEST_DELETE_BLOG,
    SUCCESS_DELETE_BLOG,
    FAIL_DELETE_BLOG,
    REQUEST_GET_ALL_BLOGS,
    SUCCESS_GET_ALL_BLOGS,
    FAIL_GET_ALL_BLOGS,
    REQUEST_BLOG_RESET,
    REQUEST_GET_SPECIFIC_BLOG,
    SUCCESS_GET_SPECIFIC_BLOG,
    FAIL_GET_SPECIFIC_BLOG,
} from "../ReduxConstants/blogConstants"


//getallblogs Reducer
export const getAllBlogs = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_GET_ALL_BLOGS:
            return{
                loading:true,

            };
        case SUCCESS_GET_ALL_BLOGS:
            return{
                loading:false,
                response:action.payload
                
            }
        case FAIL_GET_ALL_BLOGS:
            return{

                loading:false,
                response:action.payload
               
            }
        default:
            return state
    }
}

//deleteblogs Reducer
export const deleteBlog = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_DELETE_BLOG:
            return{
                loading:true,

            };
        case SUCCESS_DELETE_BLOG:
            return{
                loading:false,
                isdeleted:true,
                message:action.payload.message

                
            }
        case FAIL_DELETE_BLOG:
            return{

                loading:false,
                isdeleted:false,
                response:action.payload
               
            }
        case REQUEST_BLOG_RESET:
            return {

            }
        default:
            return state
    }
}


//creating Blog Reducer
export const createBlog = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_CREATE_BLOG:
            return{
                loading:true,

            };
        case SUCCESS_CREATE_BLOG:
            return{
                loading:false,
                created:true,
                response:action.payload

                
            }
        case FAIL_CREATE_BLOG:
            return{

                loading:false,
                created:false,
                response:action.payload
               
            }
        case REQUEST_BLOG_RESET:
            return {

            }
        default:
            return state
    }
}




//getSpecificblog Reducer
export const getSpecificBlog = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_GET_SPECIFIC_BLOG:
            return{
                loading:true,

            };
        case SUCCESS_GET_SPECIFIC_BLOG:
            return{
                loading:false,
                status:action.payload.status,
                Blog:action.payload.Blog
                
            }
        case FAIL_GET_SPECIFIC_BLOG:
            return{

                loading:false,
                response:action.payload
               
            }
            case REQUEST_BLOG_RESET:
                return {
    
                }
        default:
            return state
    }
}