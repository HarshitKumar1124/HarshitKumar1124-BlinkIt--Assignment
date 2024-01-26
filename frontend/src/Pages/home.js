import React,{useEffect} from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Main from "../Components/Main/Main.jsx"
import Topics from "../Components/Topics/Topics.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import PostLayout from "../Components/PostLayout/PostLayout.jsx"
import { loadUser } from '../Redux/ReduxActions/userActions.js'
import { useDispatch ,useSelector} from 'react-redux'
import AuthUserSpeedDial from '../Components/GeneralCustomComponent/AuthUserSpeedDial.jsx'

const Home = () => {

  const dispatch = useDispatch()
  const {loading,isAuth,response:user} = useSelector((state)=>state.loadUser) 

  useEffect(() => {

    if(isAuth===undefined)
    dispatch(loadUser());
  }, [isAuth])
  
  return (
    <div>
      {(!loading && isAuth)?<AuthUserSpeedDial/>:<></>}
      <Navbar/>
      
      <Main/>
      <Topics/>
      <PostLayout/>
      <Footer/>
       
    </div>
  )
}

export default Home