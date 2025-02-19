import errResponse from "../utils/errResponse.js";
import sucResponse from "../utils/sucResponse.js"
import {createLog} from "../utils/audit.js"
import { User } from "../models/user.model.js";


// Create a new user
export const createUser = async(req,res,next) => {

    // get the user
    // check whether inputs are empty
    // check whether user exists
    // create a new user
    // save the user

    try {

    
        
    } catch (error) {
        next(error)
    }
}



// Login a user
export const loginUser = async(req,res,next) => {

    // get the username and password
    // check whether inputs are empty
    // check whether user exists
    // check whether password is correct
    // generate a token
    // return the token

    try {

        
    } catch (error) {
        next(error)
    }
}

// Logout a user
export const logout = async(req,res)=>{
    
    return res
    .status(200)
    .clearCookie("accessToken")
    .json(new sucResponse(true,200,"User logged out successfully")) 

}






