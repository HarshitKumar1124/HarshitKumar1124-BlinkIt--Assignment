import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ResetBlogState, getSpecificBlog } from '../Redux/ReduxActions/blogActions'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ViewBlog = () => {
  
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const fetchParams = useParams();

  const {loading,status,Blog} = useSelector((state)=>state.getSpecificBlog)

  useEffect(() => {
   
    console.log(fetchParams.id)

    if(status==undefined)
    {
      toast.info('This page is not designed due to less time..but its working fine.\n \n Notice the corresponding blog id which is getting fetchined.',{
        autoClose:7000
      })
    
  
     
      dispatch(getSpecificBlog(fetchParams.id));
    }
   

   
  }, [status])

  const goBack=()=>{
  
    Navigate('/blogstore')
  }
  

  
  return (
    <>
    <div>
      <h1>Blog Content</h1>
      {
        Blog && status ?<>
         {JSON.stringify(Blog)}
        
        </>:<></> 
      }

      <Button onClick = {goBack}>Go Back</Button>
    </div>
    </>
  )
}

export default ViewBlog