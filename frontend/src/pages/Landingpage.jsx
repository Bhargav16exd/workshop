import { Link } from "react-router-dom"

export const LandingPage = () => {

    return (
        <div className="h-screen w-screen global-padding flex flex-col justify-center items-start">

            <h1 className="font-bebas text-7xl my-4 md:text-9xl ">Hello everyone ,</h1>

            <h1 className="font-bebas text-7xl my-4 md:text-9xl">WELCOME TO <span className="text-white bg-[#8c52ff] px-4 ">THE BLOG</span></h1>

            <Link to={'/home'}>
             <button className="my-4 text-white bg-black p-4 rounded-lg">VISIT BLOG</button>
            </Link>
            
             
        </div>
    )

}