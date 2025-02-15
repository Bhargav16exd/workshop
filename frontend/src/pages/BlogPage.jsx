import { useParams } from "react-router-dom"
import { Homelayout } from "../layout/Homelayout"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getSinglePostAPI } from "../redux/slices/postSlice"

export const BlogPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const [post,setPost] = useState({})

    async function getPost(){
        setPost(await dispatch(getSinglePostAPI(id)))
    }

    useEffect(()=>{
        getPost()
    },[])


    
    return (
        <Homelayout>


            <div className="px-6 md:px-10 min-h-[70vh]">

                <h1 className="font-bebas text-7xl my-10 ">{post?.payload?.data?.title}</h1>

                <div className="my-2 text-black/60 font-thin">{post?.payload?.data?.readableDate}</div>
                <div className="my-2 text-black/60 font-thin">{post?.payload?.data?.readableTime}</div>

                <div className="my-6 font-serif text-xl">
                 {post?.payload?.data?.content}
                </div>
            
            </div>

            
        </Homelayout>
    )
}