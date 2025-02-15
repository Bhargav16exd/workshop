import { Homelayout } from "../layout/Homelayout"
import Avatar from "../assets/avatar.jpeg"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import Youtube from "../assets/youtube.png"

export const Aboutpage = () => {


    // Replace the following variables with your own information
    const name = "Yourname"
    const description = "Your description"
    const github = "Your github link"
    const linkedin = "Your linkedin link"
    const youtube = "Your youtube link"


    return(
        <Homelayout>
            <div className="px-8 flex flex-col items-center justify-center">
                
                <img src={Avatar} alt="Avatar" className="h-40 w-40 rounded-full mt-10 my-4" />

                <h1 className="font-bebas text-5xl my-4">{name}</h1>

                <p className="text-sm text-black/60 my-2">
                    {description}
                </p>

                <div className="flex gap-6 my-4">
                    <a href={github}><img src={Github} alt="Youtube" className="h-10 w-10"/></a>
                    <a href={linkedin}><img src={Linkedin} alt="Linkedin" className="h-10 w-10"/></a>
                    <a href={youtube}><img src={Youtube} alt="Youtube" className="h-10 w-10"/></a>
                </div>

                <div>

                </div>

            </div>
        </Homelayout>
    )

}