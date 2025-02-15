import { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { handleSigninAPI } from "../redux/slices/authSlice";

export const Sigin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [signinData,setSigninData] = useState({
        username:"",
        password:""
    })
    
    function handleChange(e){
        const {name,value} = e.target
    
        setSigninData({
            ...signinData,
            [name]:value
        })
    }
    
    async function handleSubmit(e) {
    
        e.preventDefault()
    
        if(!signinData.username || !signinData.password ){
            toast.error('Username or password is empty')
            return
        }

        // Calls handleSigninAPI to signin
        const res = await dispatch(handleSigninAPI(signinData))

        if(res?.payload?.statusCode == 200){

            // Redirect to home page if user is not banned
            if(res?.payload?.data?.loggedInUserDetails?.ban == true){
                navigate('/ban')
            }
            else{
                navigate('/home')
            }
            
        }
        else{
            return
        }

    }

    return (
        <div className="h-screen w-screen bg-[#f3f4f6] flex justify-center items-center">

            <form className="h-auto w-[80%] sm:w-[35%] flex justify-center items-center flex-col bg-[#ffffff] border rounded-lg py-4 px-6">


                <div className="w-full flex justify-center items-start flex-col my-2">

                    <h1 className=" font-semibold text-3xl my-2">Sign in for Log</h1>
                    <p className="text-gray-500 text-sm my-2">Enter your username and password to access your account</p>

                </div>
                
                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Username
                    </label>
                    <input type="text" autoComplete="new-username" placeholder="Enter your username" className="my-1 outline-none border rounded-md w-full py-2 px-2" onChange={handleChange} name="username" value={signinData.username} />
                </div>

                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Password
                    </label>
                    <input type="password" autoComplete="new-password" placeholder="Enter password" className="my-1 outline-none border rounded-md w-full py-2 px-2" onChange={handleChange} name="password" value={signinData.password} />
                </div>

                <div className="my-1 bg-black text-white text-center border rounded-md w-full py-2 px-2" onClick={handleSubmit}>
                    Login
                </div>

                <div className="text-base my-3 text-gray-600 flex ">
                    Already have an account ?  <div className="text-blue-500 mx-2"> <Link to={'/'}>Sign up</Link></div>
                </div>
            </form>

        </div>
    );
}