import { useDispatch, useSelector } from "react-redux"
import { getAllPostsAPI, handleDeletePostAPI } from "../redux/slices/postSlice"
import { useNavigate } from "react-router-dom"

export const Postcard = ({post}) => {

    const currentUser = useSelector((state)=>state.auth?.data.loggedInUserDetails)
    const isLoggedIn = useSelector((state)=>state.auth?.loggedInStatus)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleDelete(){

     await dispatch(handleDeletePostAPI(post._id))
     navigate("/home")
     
    }



    return(
        <div className="border rounded-lg my-6 px-6 py-4">

            <div className="text-xl font-semibold my-4">
                {post?.title}
            </div>

            <div className="text-sm flex flex-col gap-2">

                <div>{post?.readableDate}</div>
                <div>{post?.readableTime}</div>
                 
            </div>


            {
                isLoggedIn ?
                <div className="w-full flex text-sm text-gray-700 my-4">
                {
                    currentUser?.role == "ADMIN"  || currentUser?.role == "MODERATOR" || post.user == currentUser._id? 
                    <div className="w-1/2 flex justify-start items-center">
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg" onClick={handleDelete}>
                            Delete
                        </button>
                    </div> 
                    :
                    <></>
                }
                
            </div>
                :
                <></>
            }

           
        
        </div>
    )
}