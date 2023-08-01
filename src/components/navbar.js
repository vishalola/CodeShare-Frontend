import { useNavigate } from "react-router";
export default function Navbar(){
    const navigate=useNavigate();
    return (
        <div className="
        text-center text-3xl font-semibold
        sticky top-0 bg-[#272822;] py-2">
            <div className="cursor-pointer " onClick={()=>{
                navigate('/');
            }}>
                Code<div className="inline text-green-600">Share</div>
            </div>
        </div>
    )
}