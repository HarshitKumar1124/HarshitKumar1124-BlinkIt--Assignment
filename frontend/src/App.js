import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Pages/home.js"
import SignInOut from "./Pages/signInOut.js"
import About from "./Pages/About.js"
import Blogstore from "./Pages/blogStore.js"
import CreateBlog from "./Components/GeneralCustomComponent/BlogDialougeBox.jsx"
import ViewBlog from './Pages/ViewBlog.js'
import ProtectedRoute from "./Components/GeneralCustomComponent/ProtectedRoute.jsx"
import Redirect from "./Components/GeneralCustomComponent/Redirect.jsx"



const App = () => {

  return (
    <Router>

      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signinout" element={<SignInOut/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/blogstore"element={<Blogstore/>}/>

          {/* this route must be protected route */}
          <Route exact path="/createblog" element={<ProtectedRoute Component={CreateBlog} />} />

          <Route exact path="/view/blog/:id" element={<ViewBlog/>}/>

          <Route path="*" element={<Redirect/>} />

          
      </Routes>
    </Router>
  )
}

export default App