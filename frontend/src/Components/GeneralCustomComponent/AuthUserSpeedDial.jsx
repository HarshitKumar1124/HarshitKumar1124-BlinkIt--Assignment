import React, { useState,useEffect } from 'react'
import {Backdrop,SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import WindowIcon from '@mui/icons-material/Window';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ResetState, logoutUser } from '../../Redux/ReduxActions/userActions';



import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AuthUserSpeedDial = () => {

    const [open,setOpen] = useState(false)
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const {response} = useSelector(state=>state.logoutUser)
   

    const handle=()=>{
        setOpen(!open)
    }

    const LogOut=()=>{
        handle();
        dispatch(logoutUser());
        
    
    }

    const CreateBlog = ()=>{
        handle();
        Navigate('/createblog')

    }

    const actions = [
        { icon: <ExitToAppIcon/>, name: 'Log Out' ,func:LogOut},
        { icon: <NoteAddIcon />, name: 'Create Blog',func:CreateBlog },
        

      ];


      useEffect(() => {
       
        console.log(response)
        if(response && response.logout)
        {
          dispatch(ResetState())
          toast.success(response.message)
          Navigate('/')
        }

      }, [response])
      


  return (<>
    <div style={{position:"absolute",width:"100vw",height:"100vh",bottom:0}}>
      {/* ,border:"2px solid red" */}

      <Backdrop open={open} style={{zIndex:5}} />
      
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 20, right: 20 }}
        icon={<SpeedDialIcon style={{position:"absolute",bottom:"1.5rem"}} openIcon={<DoDisturbIcon fontSize='large'  />} icon={< WindowIcon fontSize='large'/>} />}
        onClose={handle}
        onOpen={handle}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
            
          />
        ))}
      </SpeedDial>    

       
    </div>
   
    </>
  )
}

export default AuthUserSpeedDial