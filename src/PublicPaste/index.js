import axios from "axios";
import { useEffect,useState } from "react"
import PublicItem from "../components/publicitems"
export default function PublicPaste(){
    const [items,setItems]=useState([]);
    useEffect(()=>{
        axios.get(`https://codeshare-d6ar.onrender.com/`).then(res=>{
            let data=res.data;
            for(let i=0;i<data.length;i++)
            {
                setItems(item=>[...item,<PublicItem link={data[i].link} title={data[i].title} language={data[i].language} date={data[i].createdAt.substring(0,10)}/>])
            }
        }).catch(e=>console.log(e));
    },[])
    return (
        <div className="text-white border-[.1px] rounded-sm border-[#646464]
        m-4 p-2 overflow-scroll h-[300px] 
        ">
            {/* <PublicItem title="Pavitra's Paste" language="javascript" date="25-March-2023"/>
            <PublicItem title="Trial 01" language="javascript" date="25-March-2023"/> */}
            {items}
        </div>
    )
}