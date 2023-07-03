import axios from "axios";
import { useEffect,useState,useRef } from "react";
import { useParams } from "react-router"
import CodeEditor from "../CodeEditor"
import Loader from "../components/loader"
export default function PublicLink()
{
    const [loading,setLoading]=useState(true);
    const [code,setCode]=useState('');
    const [title,setTitle]=useState('');
    const [available,setAvailable]=useState(false);
    const [isPublic,setIsPublic]=useState(false);
    const param=useParams();
    const pass=useRef(null);
    useEffect(()=>{
        let link=param.link;
        axios.get(`https://codeshare-d6ar.onrender.com/${link}`).then((res)=>{
            let data=res.data;
            setCode(data[0].code);
            setTitle(data[0].title);
            setLoading(false);
            setAvailable(true);
            setIsPublic(true);
            
        }).catch((e)=>{
            if(e.response.status===403)
            {
                // Requires password
                setLoading(false);
                setIsPublic(false);
                setAvailable(true);
            }
            else
            {
                //Not found
                setLoading(false);
                setIsPublic(false);
                setAvailable(false);
            }
        })

    },[])  
    let handleSubmit=(e)=>{
        e.preventDefault();
        let passwrd=pass.current.value;
        let link=param.link;
        setLoading(true);
        axios.get(`https://codeshare-d6ar.onrender.com/${link}`,{params:{"password":passwrd}}).then((res)=>{
            let data=res.data;
            setCode(data[0].code);
            setTitle(data[0].title);
            setLoading(false);
            setAvailable(true);
            setIsPublic(true);

        }).catch(e=>{
            // Password is wrong
            setLoading(false);
            alert("Incorrect Password");
        })  

    }
    if(loading)
    {
        return (
            <div className="rounded-sm mt-10 m-4 p-3 px-6 w-fit ml-auto mr-auto bg-[#363735] md:ml-4 md:mr-4">
                <Loader/>
            </div>
        )
    }
    if(available)
    {
        // Two options : Either link is public or link is password protected.
        if(isPublic)
        {
            // Return CodeEditor with the paste that came from Backend
            return (<CodeEditor code={code} title={title}/>)
        }
        else
        {
            // Here return a component that would take password.
           return (
            <div className="rounded-sm mt-10 m-4 p-6 px-10 w-fit ml-auto mr-auto bg-[#363735]">
                <div className="text-xl font-bold">Password Protected </div>
                <form className="text-sm mt-2">
                    <div>
                    <label className="outlin w-[70px] inline-block text-sm">
                            Password
                        </label>
                        <input ref={pass} className="rounded-sm text-sm py-2 px-2 bg-inherit outline-none border-[.1px] border-[#646464]" required type="password"/>
                    </div>
                    <div className="flex justify-end mt-2">
                        <button type="submit" className="font-bold bg-green-600 rounded-sm text-sm py-2 px-2 outline-none" onClick={handleSubmit}>
                                Unlock
                        </button>
                    </div>
                </form>
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