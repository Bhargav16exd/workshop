import {Routes,Route} from 'react-router-dom'
import { Signup } from './pages/SignupPage'
import { Sigin } from './pages/Signinpage'
import {Home} from "./pages/Homepage"
import RequireAuth from "./utils/RequireAuth"
import { Newpostpage } from './pages/Newpostpage'
import { NotFoundPage } from './pages/Notfound'
import { LandingPage } from './pages/Landingpage'
import { BlogPage } from './pages/BlogPage'
import { Aboutpage } from './pages/Aboutpage'

function App() {
  return (
    <>
      <Routes>

        {/* Public Routes anyone can access */}
        <Route path='/'      element={<LandingPage/>}></Route>
        <Route path='/login' element= {<Sigin/>}></Route>
        <Route path='/home/:id' element={<BlogPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>


        {/* This is a temporary page to create your account on the website */}
        {/* <Route path='/signup' element={<Signup/>}></Route> */}
       

        {/* Secured Routes Logged in people can access */}
        <Route element={<RequireAuth/> } >

              <Route path='/newpost' element={<Newpostpage/>}></Route>
        
        </Route>

        {/* No Matched route found Redirect to not found page */}
        <Route path='*' element={<NotFoundPage/>}></Route>
        

      </Routes>
    </>
  )
}

export default App
