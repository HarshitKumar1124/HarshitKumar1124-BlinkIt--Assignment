import React ,{useEffect}from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import {useDispatch, useSelector} from "react-redux"
import AuthUserSpeedDial from "../Components/GeneralCustomComponent/AuthUserSpeedDial.jsx"
import { loadUser } from '../Redux/ReduxActions/userActions.js'
import BlogCard from "../Components/GeneralCustomComponent/BlogCard.jsx"
import { getAllBlogs, ResetBlogState } from '../Redux/ReduxActions/blogActions';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogStore = () => {

  const dispatch = useDispatch()
  
  const {loading,isAuth,response:user} = useSelector((state)=>state.loadUser) 
  const {loading:blogLoading,response} = useSelector((state)=>state.getAllBlogs)
  const {loading:delLoading,isdeleted,message} = useSelector((state)=>state.deleteBlog)

  
  
  useEffect(() => {

   
     dispatch(loadUser());
     dispatch(ResetBlogState())
     dispatch(getAllBlogs());

     
    if(isdeleted===true)
    {
      dispatch(ResetBlogState())
      toast.success(message,isdeleted)
      
      
    }
   
     

   
  }, [isdeleted])
  

  return (
    <div style={{minHeight:"100vh"}}>
      {/* border:"2px solid red", */}
        <Navbar/>

       {(!loading && isAuth)?<AuthUserSpeedDial/>:<></>} 
       <section style={{padding:"5rem 0 0 0",display:"flex"}}>
       {/* border:"2px solid yellow", */}
        {
          (!blogLoading && response && response.Blogs.length!=0) ?response.Blogs.map((blog)=> {return <BlogCard  blogData={blog}/>}):<></>
        }
        
       </section>

    </div>
  )
}

export default BlogStore