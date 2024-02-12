import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import AuthUserSpeedDial from '../Components/GeneralCustomComponent/AuthUserSpeedDial'

const Dashboard = () => {

    const {loading,isAuth,response:user} = useSelector((state)=>state.loadUser)

  return (
    <>
    {loading==false?<div>
        <Navbar/>
        {(loading==false && isAuth)?<AuthUserSpeedDial/>:<></>} 
        <div style={{padding:"10rem"}}>
        <p>User ID -{user._id} </p>
        <p>Username -{user.name}</p>
        <p>Email ID - {user.email}</p>
        </div>
       
    </div>:<></>}
    </>
  )
}

export default Dashboard