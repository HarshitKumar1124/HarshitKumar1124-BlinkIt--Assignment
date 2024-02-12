import React ,{useEffect}from 'react'
import "./PostLayout.scss"
import Post from "./Post.jsx"
import PostSnippet from "./PostSnippet.jsx"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import {getAllBlogs} from '../../Redux/ReduxActions/blogActions.js'
import { useDispatch ,useSelector} from 'react-redux'
import { loadUser } from '../../Redux/ReduxActions/userActions.js'

const PostLayout = () => {

  const dispatch = useDispatch()
  const {loading:blogLoading,response} = useSelector((state)=>state.getAllBlogs)
  const {loading,isAuth,response:user} = useSelector((state)=>state.loadUser) 


  useEffect(() => {
   
    dispatch(loadUser());
    dispatch(getAllBlogs())

  }, [])
  
  return (
   (
    blogLoading==false && loading==false ?  <section className='post_section' id="postLayout_section">
    <div className='post_container'>
      <div>
        <h1><span>Featured Posts</span></h1>
        <p style={{fontSize:"1rem"}}>Here top liked blogs is needed to come up dynamically. But since,this was not mentioned to do i.e sort on bases of likes. <b>Thus, this area is non dynamic</b></p>
        <Post/>
        <Post/>
        <Post/>
        <Link to="/blogstore" ><Button style={{width:"100%"}}>Go to BlogStore</Button></Link>
      </div>
      <div>
        <div id="featured_post_section">
          <h3 style={{margin:"0.5rem 0"}}><span>Recent Post</span></h3>
          {!blogLoading && response && response.Blogs.length!=0 ?<>
          
          {response.Blogs.map((item,idx)=>{
              
              if(idx<4)
            return <PostSnippet key={idx} heading={item.heading} created={item.createdAt}/>
            else 
            return <></>
          })}
          
          
          </>:<></>}

        </div>
        <div id="user_post_section">
        <h3 style={{margin:"0.5rem 0"}}><span>User Post</span></h3>
        
          {isAuth && !blogLoading && response && response.Blogs.length!=0 ?<>
          
          {
            response.Blogs.map((item,idx)=>{
              if(isAuth && user._id===item.author_id)
              return  <PostSnippet key={idx} heading={item.heading} created={item.createdAt}/>;
              else
              return <></>
            })
          }
          
          </>:<></>}

          {isAuth!==true?<p style={{fontStyle:"italic",margin:'1rem 0'}}>No User Logged In</p>:<></>}

          {!blogLoading && response && response.Blogs.length==0?<p style={{fontStyle:"italic",margin:'1rem 0'}}>User has not created any Blog</p>:<></>}
       
        </div>
      </div>

    </div>
  </section>:<></>
   )
  )
}

export default PostLayout