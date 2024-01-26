import React, { useRef ,useEffect,useState} from 'react'
import './Topics.scss'
import { Button } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation"

import { EffectCards, Navigation } from 'swiper/modules';

import scene from "../../Assets/topic-1.png"
import scene2 from "../../Assets/topic-2.png"
import scene3 from "../../Assets/topic-3.png"
import scene4 from "../../Assets/topic-4.png"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

const Topics = () => {

  const swiperRef = useRef(null)
  const swipeNext = useRef(null)
  const swipeBack = useRef(null)

  const [curSlide, setcurSlide] = useState(1)

  useEffect(() => {

    if(curSlide==1)
    {
      swipeBack.current.disabled = true
      swipeBack.current.classList.remove('activeButton')
      console.log(swipeBack)
    }
  else
  {
    swipeBack.current.disabled=false;
    swipeBack.current.classList.add('activeButton')
  }

  if(curSlide==4)
  {
    swipeNext.current.disabled = true;
    swipeNext.current.classList.remove('activeButton')
  }
  else 
  {
    swipeNext.current.disabled = false;
    swipeNext.current.classList.add('activeButton')
  }
    
  
  }, [curSlide])

  const toSlideNext=()=>{
    console.log("next pressed",curSlide)
    swiperRef.current?.swiper.slideTo(curSlide+1);
    setcurSlide(curSlide+1);
  }

  const toSlideBack=()=>{
    console.log('bacl pressed',curSlide)
    swiperRef.current?.swiper.slideTo(curSlide-1);
    setcurSlide(curSlide-1);
  }

  const filterFeature=()=>{
    toast.info('Filtering on the basis of topics is not active yet!')
  }
  

  return (
   <section className='container' id="topic_section" >
    <div className='topic_container'>

        <div>
            <h2>Hot Topics</h2>
            <p>Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</p>
            <div>
                <Button ref={swipeBack} onClick={toSlideBack} ><ArrowBackIcon/> </Button>
                <Button ref={swipeNext} onClick={toSlideNext} ><ArrowForwardIcon/> </Button>
            </div>
        </div>
        <div style={{overflow:"hidden"}}>
        {/* border:"2px solid greenyellow", */}
          <Swiper 
          ref={swiperRef}
          slidesPerView={3}
          modules={[Navigation]}
          className='swiper'
          centeredSlides={true}
          centeredSlidesBounds={true}
        
          
          >
            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene2}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene3}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene4}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene4}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}} onClick={filterFeature}>
                <img src={scene4}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>

            <SwiperSlide className='Slides'>
              <a className='img_container' style={{cursor:"pointer"}}  onClick={filterFeature}>
                <img src={scene4}/>
                <div className='sliderTitle'>
                  <h2>Topic Name</h2>
                  <p>32 Articles</p>
                </div>
                
              </a>     
            </SwiperSlide>
      
            
           

          </Swiper>

          

        </div>

    </div>
   </section>
  )
}

export default Topics