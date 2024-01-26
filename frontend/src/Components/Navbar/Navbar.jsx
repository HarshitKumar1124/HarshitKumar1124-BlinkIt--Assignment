import React from "react";
import "./Navbar.scss";
import { Grid,Collapse } from "@mui/material";
import Logo from '../../Assets/BrandLogo.svg'
import SubscribeButton from "../GeneralCustomComponent/SubscribeButton"
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import UsernameTemplate from "../GeneralCustomComponent/UsernameTemplate";

const Navbar = () => {

  const Navigate = useNavigate()

  const {loading,isAuth,response:user} = useSelector(state=>state.loadUser)

  return (
    <Grid 
    className="navbar"
    container 
    justifyContent="center"
    >
        <Grid item container xs={10} className="innerNavbar" >
        <Grid item xs={2} className="items" >
       
         <Link to='/'> <img src={Logo} alt="Website Logo"/></Link>
          </Grid>
          <Grid item md={8}className="items" >
      
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/blogstore"><li>Blogs</li></Link>

          </ul>
          </Grid>
          <Grid item xs={2} className="items" >
        
         {isAuth!=true?<SubscribeButton variant="contained" onClick={()=>Navigate('/signinout')} >Be Blogger</SubscribeButton>:<UsernameTemplate userData={user}/>}
          </Grid>
          
          
        </Grid>
   
    </Grid>
  );
};

export default Navbar;
