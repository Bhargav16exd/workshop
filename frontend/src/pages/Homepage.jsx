import { useEffect } from "react";
import { Homelayout } from "../layout/Homelayout"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllPostsAPI} from "../redux/slices/postSlice"
import { Postcard } from "../components/Postcard";

export const Home = () =>{


    const dispatch = useDispatch()

    // Get all posts from redux store
    const posts = useSelector((state)=>state?.post?.posts?.data)
    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)

    async function getPosts(){

        // Calls getAllPostsAPI to get all posts
        await dispatch(getAllPostsAPI())
        
    }

    // Get all posts on page load
    useEffect(()=>{
        getPosts()
    },[])

    return(
        <>
         <Homelayout>

            <div className="h-full px-6 mb-10"> 

            {
                isLoggedIn ? 
                <div className="mt-6 flex justify-end items-start ">
                     <div className="w-1/2 flex justify-end ">
                        <button className="border py-2 px-4 rounded-md bg-black text-white ">
                            <Link to='/newpost'>Create Post</Link>
                        </button>
                    </div>

                </div>
                :
                <>
                </>
                
            }


                {/* Postcards */}
                <div className="py-4">
                        {
                            posts?.map((post)=>(<Link to={`/home/${post._id}`} key={post._id}><Postcard post={post} key={post._id}/></Link>))
                        }                 
                </div>

            </div>
            
         </Homelayout>
        </>
    )

}