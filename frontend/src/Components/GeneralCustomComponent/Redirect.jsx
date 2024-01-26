import React,{useEffect} from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {

    const Navigate = useNavigate()

    useEffect(() => {
     
        toast.error('404 Page Not Found! Redirecting to Homepage',{
            position:'bottom-center',
            autoClose:5000

        })

      
        Navigate('/')
        
    }, [])
    


  return (
    <></>
  )
}

export default Redirect