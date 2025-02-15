import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


// Function checks if the user is logged in or not
export default function RequireAuth(){

    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)
    return (<>
      {
        isLoggedIn  ? <Outlet/> : <Navigate to="/login" />
      }
    </>)

}