import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersAPI } from "../redux/slices/userSlice"
import { Usercard } from "../components/Usercard"
import set from "../assets/manage.png"
import {Link} from "react-router-dom"
import {handleLogoutAPI} from "../redux/slices/authSlice"
import Banner from "../assets/banner.jpg"

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

export const Homelayout = ({children}) => {

    // Get current user details from redux store
    const user = useSelector((state)=>state.auth?.data.loggedInUserDetails)
    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)


    // Get all users from redux store
    const users = useSelector((state)=>state.users?.user)

    const dispatch = useDispatch()


    async function getUsers(){

        // Calls getAllUsersAPI to get all users
        await dispatch(getAllUsersAPI())
    }

    async function handleLogout(){
        try {
            // Calls handleLogoutAPI to logout
            const res = await dispatch(handleLogoutAPI())
        } catch (error) {

        }
    }

    // Get all users on page load
    // useEffect(()=>{
    //     getUsers()
    // },[])


    return(
    <div>

      {/* Navbar */}
      <div className="h-20 border border-b-[1px] flex py-2 ">

        <div className="h-full w-1/2 flex font-bebas justify-start items-center px-10 font-semibold text-3xl">
            THE BLOG
        </div>

        {
            isLoggedIn ?
            <div className="h-full w-1/2 flex justify-end items-center px-10 font-semibold">
 
            <   div className=" py-2 px-4 ">
                    <Menu>
                        <MenuHandler>
                            <Button>{user?.username}</Button>
                        </MenuHandler>

                        <MenuList>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>    
                </div>

            </div>
            
            :
            <></>
        }

        {/*  */}
      </div>


      <div className="md:flex">

        {/* Left Section */}
        <div className="md:w-[75vw]">
            <div className="h-[14vh] overflow-hidden flex justify-center items-center md:max-w-[75vw]">
                <img src={Banner} alt=""  className="md:w-full"/>
            </div>

            <div className="flex text-base border-b items-center justify-around py-4 my-4 mx-6 border rounded-xl md:md:max-w-[75vw]">
                <Link to={'/home'}><div><span>Blogs</span></div></Link>
                <Link to={'/about'}><div>About</div></Link>
                <Link to={'/changelog'}><div>Changelog</div></Link>
            </div>

            
            <div className="flex md:max-w-[70vw] ">

                <div className="w-[100%]">
                    {children} 
                </div>

                {/* <div className="w-[25%] min-h-[90vh] border-l-[1px] flex flex-col justify-start items-start">

                    <div className="border-b-[1px] w-full py-4 px-4 font-semibold">
                        Users
                    </div>

                    <div className="w-full px-4">
                        {
                            users?.map((user)=>( <Usercard users={user} key={user._id}/>))
                        }
                    </div>
                    
                </div> */}
            </div>
        </div>


        {/* Right Section */}
        <div className="hidden md:visible border-l">

        </div>

        

      </div>

   




     
    </div>


)}