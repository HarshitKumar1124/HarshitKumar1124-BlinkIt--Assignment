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


//  getAllBlogs
export const getAllBlogs = ()=>async(dispatch)=>{

    console.log('fetching all blogs triggered')
    dispatch({
        type:REQUEST_GET_ALL_BLOGS
    })

    try{

        const {data} = await axios.get('http://localhost:5500/api/v1/get/blogs');

        console.log('fetched all blogs successful',data)

        dispatch({
            type:SUCCESS_GET_ALL_BLOGS,
            payload:data
        })
    }catch(error)
    {
        console.log('fetching all blogs failed',error.message)
        dispatch({
            type:FAIL_GET_ALL_BLOGS,
            payload:error.message
        })
    }


}


//  getSpecificBlogs
export const getSpecificBlog = (blogId)=>async(dispatch)=>{

    console.log('fetching specific blog triggered',blogId)
    dispatch({
        type:REQUEST_GET_SPECIFIC_BLOG
    })

    try{

        const {data} = await axios.get(`http://localhost:5500/api/v1/get/blog/${blogId}`);

        console.log('fetched SPECIFIC blog successful',data)

        dispatch({
            type:SUCCESS_GET_SPECIFIC_BLOG,
            payload:data
        })
    }catch(error)
    {
        console.log('fetching SPECIFIC blog failed',error.message)
        dispatch({
            type:FAIL_GET_SPECIFIC_BLOG,
            payload:error.message
        })
    }


}






export const delBlog = (ID)=>async(dispatch)=>{

    console.log(' deleting blogs triggered')
    dispatch({
        type:REQUEST_DELETE_BLOG
    })

    try{
        
        const api = `http://localhost:5500/api/v1/delete/blog/${ID}`
        const {data} = await axios.delete(api);

        console.log('delete blog successful',data)

        dispatch({
            type:SUCCESS_DELETE_BLOG,
            payload:data
        })
    }catch(error)
    {
        console.log('delete blog failed',error.message)
        dispatch({
            type:FAIL_DELETE_BLOG,
            payload:error.message
        })
    }


}




export const createBlog = (Obj)=>async(dispatch)=>{

    console.log(' creating blogs triggered',Obj)
    dispatch({
        type:REQUEST_CREATE_BLOG
    })

    try{
        
      
        const {data} = await axios.post(`http://localhost:5500/api/v1/new/blog`,Obj);

        console.log('create blog successful',data)

        dispatch({
            type:SUCCESS_CREATE_BLOG,
            payload:data
        })
    }catch(error)
    {
        console.log('create blog failed',error.message)
        dispatch({
            type:FAIL_CREATE_BLOG,
            payload:error.response.data.message
        })
    }


}


export const ResetBlogState = ()=>async(dispatch)=>{

    dispatch({
        type:REQUEST_BLOG_RESET
    })

}