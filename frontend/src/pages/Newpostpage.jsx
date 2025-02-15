import { Link, useNavigate } from "react-router-dom"
import { Homelayout } from "../layout/Homelayout"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { handleNewPostAPI } from "../redux/slices/postSlice"
import { toast } from "sonner"

export const Newpostpage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newPostData,setNewPostData] = useState({
        title:"",
        content:""
    })

    function handleChange(e){
        const {name,value} = e.target
    
        setNewPostData({
            ...newPostData,
            [name]:value
        })
    }

    async function handleSubmit(e) {

            e.preventDefault()
        
            if(!newPostData.title || !newPostData.content ){
                toast.error('Title or content is empty')
                return
            }
    
            // Calls handleNewPostAPI to create a new post
            const res = await dispatch(handleNewPostAPI(newPostData))
    
            if(res?.payload?.statusCode == 200){
                navigate('/home')
            }
            else{
                return
            }
    }

    return(
       <Homelayout>
         <div className="h-full px-8">


            <div className="w-full py-4 flex">
                <div className="w-full flex justify-end ">
                    <button className="border py-2 px-4 rounded-md bg-black text-white ">
                        <Link to='/home'> Go back</Link>
                    </button>
                </div>
            </div>

           
            <div className="border-gray-400 my-4 rounded-lg w-full">
    
                <form className="h-auto  flex justify-center items-center flex-col bg-[#ffffff] border rounded-lg py-4 px-6">
                    
                    {/* Create a new log post div */}
                    <div className="w-full flex justify-center items-start flex-col my-4">
                        <h1 className=" font-semibold text-3xl my-2">Create a new log post</h1>
                    </div>

                    {/* Title input */}
                    <div className="w-full flex justify-center items-start flex-col my-2">
                        <label className="my-2 font-medium">
                            Title
                        </label>
                        <input type="text" autoComplete="new-title" placeholder="Enter your log post title" className="my-2 outline-none border rounded-md w-full py-2 px-2" name="title" onChange={handleChange} value={newPostData.title} />
                    </div>

                    {/* Content input */}   
                    <div className="w-full flex justify-center items-start flex-col my-2">
                        <label className="my-2 font-medium">
                            Content
                        </label>
                        <textarea autoComplete="new-content" placeholder="Write your blog post content here" className="my-2 outline-none border rounded-md w-full py-2 px-2 min-h-[25vh]" name="content" onChange={handleChange} value={newPostData.content} />
                    </div>

                    {/* Create Post button */}
                    <div className="my-1 bg-black text-white text-center border rounded-md w-full py-2 px-2  cursor-pointer " onClick={handleSubmit} >
                        Create Post
                    </div>
                </form>

            </div>

         </div>
       </Homelayout>
    )

}