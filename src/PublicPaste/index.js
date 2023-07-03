import axios from "axios";
import { useEffect,useState } from "react"
import PublicItem from "../components/publicitems"
import Loader from '../components/loader'
export default function PublicPaste(){
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get(`https://codeshare-d6ar.onrender.com/`).then(res=>{
            setLoading(false);
            let data=res.data;
            for(let i=0;i<data.length;i++)
            {
                setItems(item=>[...item,<PublicItem link={data[i].link} title={data[i].title} language={data[i].language} date={data[i].createdAt.substring(0,10)}/>])
            }
        }).catch(e=>console.log(e));
    },[])
    return (
        <div className="text-white border-[.1px] rounded-sm border-[#646464]
        m-4 p-2 overflow-scroll h-[300px] min-w-[200px] 
        ">
            {/* <PublicItem title="Pavitra's Paste" language="javascript" date="25-March-2023"/>
            <PublicItem title="Trial 01" language="javascript" date="25-March-2023"/> */}
            {loading && <Loader/>}
            {!loading && items}
        </div>
    )
}