import errResponse from '../utils/errResponse.js'
import {Blog} from "../models/blog.model.js"
import sucResponse from '../utils/sucResponse.js'
import { createLog } from '../utils/audit.js'




// Convert date and time to readable format

const convertDateAndTimeReadable = (blogs)=>{

    return blogs.map(blog=>{
        const readableDate = blog.createdAt.toDateString()
        const readableTime = blog.createdAt.toLocaleTimeString("en-US",{timeZone:"Asia/Kolkata"})
        return {
            ...blog._doc,
            readableDate,
            readableTime
        }
    })
}



// ADD BLOG
export const createBlog = async(req,res,next)=>{

    try {

        // get the title and content
        // check whether inputs are empty
        // create a new blog
        // save the blog
        // return the blog response



       
    } catch (error) {
        next(error)
    }
}

// DELETE BLOG 
// RBAC (Role Based Access Control) is implemented here
export const deleteBlog = async(req,res,next)=>{

    // Check if blog exist
    // check if the user deleting the blog is owner of the blog or admin or moderator
    // if owner or admin or moderator delete the blog
    // else unauthorized

    try {


          
    } catch (error) {
        next(error)
    }
}


// GET BLOGS
export const getBlogs = async(req,res,next)=>{

    try {

        // get all blogs
        // if no blogs found throw error
        // convert date and time to readable format
        // return the blogs response


        
    } catch (error) {
        next(error)
    }

}

export const getBlog = async(req,res,next)=>{

    try {

        // get the single blog id 
        // check whether id is empty
        // find the blog
        // if blog not found throw error
        // convert date and time to readable format
        // return the blog response
        

        
    } catch (error) {
        next(error)
    }

}