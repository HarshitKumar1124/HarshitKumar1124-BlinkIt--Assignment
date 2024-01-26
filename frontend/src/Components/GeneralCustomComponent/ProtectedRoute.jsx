import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
import {Route, useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProtectedRoute = ({Component}) => {

  const Navigate = useNavigate()
  
 const {loading,isAuth} = useSelector((state)=>state.loadUser)

 useEffect(() => {

  console.log('Protected Route check')
   
  if(!loading && !isAuth)
  {
    toast.error('Unauthorised User cannot access this page!',{
      autoClose:5000
    })
    Navigate('/signinout')
  }
 
  
 }, [])
 

  return  <Component/>

    
  
}

export default ProtectedRoute