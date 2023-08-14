import CodeInput from "../CodeInput"
import PasteOption from "../PasteOptions"
import PublicPaste from "../PublicPaste"
import { useRef } from "react"
export default function Home()
{
    const code=useRef(null);
    document.title="CodeShare";
    return (
        <div>
        <CodeInput reference={code}/>
        <div className='lg:flex-row flex flex-col'>
        <PasteOption code={code}/>
        <PublicPaste/>
        </div>
      </div>
    )
}