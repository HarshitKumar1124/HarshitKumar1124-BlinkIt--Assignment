import React, { useState } from 'react'
import "./Footer.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrandLogo from "../../Assets/BrandLogo.svg"
import { Button } from '@mui/material';
import SubscribeButton from '../GeneralCustomComponent/SubscribeButton';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

    const RestrictionMessage=()=>{
        toast.info('This page was not mentioned to make!')
    }

    

    const [review,setReview] = useState("")

    const WritingReview =(e)=>{
        setReview(e.target.value)
    }


    const NodeMailer=(e)=>{
        toast.info('Nodemailer Feature is yet not activated as it was not mentioned to make for now!')
        toast.info(`This was your content !   "${review}"`)
        setReview("")
    }

  return (
    <section className='footer'>
        <div className='footer_container'>
           <div>
            <div>
                <img src={BrandLogo}/>
                <p>When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an unknown prnoto sans took a galley and scrambled it to five centurie.</p>
                <h3>Address</h3>
                <p>Harshit House <br/>Bangalore, Karnataka 560103</p>
            </div>
            <div>
                <h3 style={{color:"white"}}>Categories</h3>
                <div>
                    <li onClick={RestrictionMessage}>Career</li>
                    <li onClick={RestrictionMessage}>Action</li>
                    <li onClick={RestrictionMessage}>Business</li>
                    <li onClick={RestrictionMessage}>Adventure</li>
                </div>
            </div>
            <div>
            <h3 style={{color:"white"}}>Review</h3>
            <p>Submit review to be creator of the page.</p>
            <h3>Submit your review</h3>
            <textarea rows="5" cols="3" value={review} onChange={WritingReview}/>
            <SubscribeButton variant="contained" onClick={NodeMailer} target="_blank">Submit Review</SubscribeButton>
                    
            </div>
           </div>
           <div>
            <p><CopyrightIcon/> Developed By<span style={{fontStyle:"italic"}}> &nbsp; Harshit Kumar</span></p>
            <ul>
                <a href='https://www.instagram.com/harshitdreams8a_'><li><InstagramIcon/> Instagram</li></a>
                <a href='https://www.linkedin.com/in/harshit-kumar-9b4474206'><li><LinkedInIcon/> LinkedIN</li></a>
                <a href='https://github.com/HarshitKumar1124'><li><GitHubIcon/> Github</li></a>
                
            </ul>
           </div>
        </div>
    </section>
  )
}

export default Footer