import { useEffect,useState } from "react";
import { useParams } from "react-router"

export default function PublicLink()
{
    const [available,setAvailable]=useState(false);
    const [isPublic,setIsPublic]=useState(false);
    const param=useParams();
    useEffect(()=>{
        let link=param.link;
        // Now send this link to get the paste
        // If paste is available and public, return that.
        // If paste is available but password protected, ask for password
        // If paste is not available, then show no paste with such link.
        if(link==="12")
        {
            setAvailable(true);
        }
        else
        {
            setAvailable(false);
        }

    },[])  
    if(available)
    {
        // Two options : Either link is public or link is password protected.
        if(isPublic)
        {
            // Return CodeEditor with the paste that came from Backend
        }
        else
        {
            // Here return a component that would take password.
           return (
            <div className="rounded-sm mt-10 m-4 p-6 px-10 w-fit ml-auto mr-auto bg-[#363735]">
                <div className="text-xl font-bold">Password Protected </div>
                <div className="text-sm mt-2">
                    <div>
                    <label className="outlin w-[70px] inline-block text-sm">
                            Password
                        </label>
                        <input className="rounded-sm text-sm py-2 px-2 bg-inherit outline-none border-[.1px] border-[#646464]" required type="password"/>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button className="font-bold bg-green-600 rounded-sm text-sm py-2 px-2 outline-none">
                                Unlock
                        </button>
                    </div>
                </div>
            </div>
           )
        }
    }
    else
    {
        // Code for link not available
        return (
            <div className="rounded-sm mt-10 m-4 p-3 px-6 w-fit ml-auto mr-auto bg-[#363735] md:ml-4 md:mr-4">
                <div className="text-xl font-bold">404 Not Found</div>
                <div className="text-sm mt-2">
                This page is no longer available. Either the link is invalid or the paste has been removed by the creator.
                </div>
            </div>
        )
    }
}