import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ServerStatus from './serverStatus';

export default function Navbar(){
    const navigate=useNavigate();
    const location = useLocation();
    const [inRoom,setInRoom] = useState(false);
    const [inCompiler,setInCompiler] = useState(false);
    useEffect(()=>{
        if(location.pathname==='/newRoom' || location.pathname.includes('rooms'))
        {
            setInRoom(true);
        }
        else if(location.pathname==='/compile' || location.pathname.includes('compile'))
        {
            setInCompiler(true);
        }
        else
        {
            setInRoom(false);
            setInCompiler(false);
        }
    },[location])
    return (
        <div className="
        z-10
        flex justify-center items-center text-3xl font-semibold
        sticky top-0 bg-[#272822;] py-2">
            <div className="cursor-pointer w-fit " onClick={()=>{
                navigate('/');
            }}>

                Code<div className="inline text-green-600 ">{inRoom?"Room":inCompiler?"Compile":"Share"}</div>
            </div>
            <ServerStatus/>
        </div>
    )
}