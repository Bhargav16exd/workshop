import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "sonner";
import {backendAPI} from "../../constant"


//Save the user data in local storage
const initialState = {
    loggedInStatus  : JSON.parse(localStorage.getItem("loggedInStatus") || "false") ,
    role            : localStorage.getItem("role"),
    token           : localStorage.getItem("token") || '',
    data            : JSON.parse(localStorage.getItem("data")  || "{}"),
    ban             : JSON.parse(localStorage.getItem("ban") || "false")
}

//Function calls Signup API
export const handleSignupAPI = createAsyncThunk(
    'auth/signup',
    async function(data){
        try {

            const response =  axios.post(`${backendAPI}/api/v1/user/signup`,data)

            toast.promise(response,{
                loading:"Creating account"
            })

            return (await response).data
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
)

//Function calls Signin API
export const handleSigninAPI = createAsyncThunk(
    'auth/login',
    async function(data){
        try {

            const response =  axios.post(`${backendAPI}/api/v1/user/login`,data)

            toast.promise(response,{
                loading:"Logging in"
            })

            return (await response).data
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
)

//Function calls Logout API
export const handleLogoutAPI = createAsyncThunk(
    'auth/logout',
    async function(){
        try {
            const response = axios.get(`${backendAPI}/api/v1/user/logout`,{
                headers: {
                     "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })

            toast.promise(response,{
                loading:"Logging out"
            })

            return (await response).data
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(handleSigninAPI.fulfilled , (state,action)=>{

            localStorage.setItem("data",JSON.stringify(action.payload?.data))
            localStorage.setItem("role",action.payload?.data?.loggedInUserDetails?.role)
            localStorage.setItem("token",action.payload?.data?.token)
            localStorage.setItem("loggedInStatus",JSON.stringify(true))
            localStorage.setItem("ban" ,action.payload?.data?.loggedInUserDetails?.ban)

            state.role           = action.payload?.data?.loggedInUserDetails?.role
            state.data           = action.payload?.data
            state.loggedInStatus = true
            state.token          = action.payload?.data?.token 
            state.ban            = false
        })
        .addCase(handleLogoutAPI.fulfilled , (state,action)=>{

            localStorage.removeItem("data")
            localStorage.removeItem("role")
            localStorage.removeItem("token")
            localStorage.removeItem("loggedInStatus")
            localStorage.removeItem("ban")

            state.role           = null
            state.data           = {}
            state.loggedInStatus = false
            state.token          = ''
            state.ban            = false
        })
    }
    
})

export default authSlice.reducer