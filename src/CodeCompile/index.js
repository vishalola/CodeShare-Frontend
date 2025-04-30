import TextEditor from "../CodeEditor/newEditor";
import { useRef,useState } from "react";
import axios from "axios";
import { AiOutlineLoading } from "react-icons/ai";
export default function CodeCompile(){
    const editorRef = useRef(null);
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    const errorDivRef = useRef(null);
    const [compiling,setCompiling]=useState(false);
    const API = process.env.REACT_APP_serverAPI;

    const handleCompile = ()=>{

        const inputData = inputRef.current.getValue();
        const codeData = editorRef.current.getValue();
        setCompiling(true);
        axios.post(`${API}/compiler/`,
        {
            "code":codeData,
            "input":inputData
        }).then(res=>{
            setCompiling(false);
            const outputRecieved = res.data.output;
            const executionTime = res.data.executionTime;
            outputRef.current.setValue(outputRecieved);
            errorDivRef.current.innerText = "[Finished in "+ executionTime + "s]"
        }).catch(error=>{
            setCompiling(false);
            console.log(error)
            if(errorDivRef.current)
            {
                errorDivRef.current.innerText = error.response.data.error;
            }


        })
    }
    return(
        <div className="h-[93vh] flex justify-center relative">
            <div className="w-full h-full">
                <div className="h-[70%]">
                    <TextEditor tabbed language="cpp" reference={editorRef}/>
                </div>
                <div ref={errorDivRef} className="border-t font-semibold border-r border-[#3d3d31] h-[30%] py-2 px-3 text-red-600 overflow-scroll">
                [Finished in 0.0s]               
                </div>
            </div>
            <div className="w-[450px] relative">
                <div className="h-1/2 w-full">
                    <TextEditor tabbed tabName={"input"}  language="plaintext" reference={inputRef}/>
                </div>
                <div className="h-1/2 w-full">
                    <TextEditor tabbed tabName={"output"} language="plaintext" reference={outputRef}/>
                </div>
            </div>


            <div onClick={handleCompile} className="bottom-2 z-[100] rounded-3xl absolute m-2 py-2 px-3 bg-green-600 transition-all cursor-pointer hover:bg-green-500 text-white">
                {compiling?
                <div className="text-2xl animate-spin">
                    <AiOutlineLoading/>
                </div>:
                <div>
                    Compile
                </div>
                }
            </div>

        </div>
    )
}