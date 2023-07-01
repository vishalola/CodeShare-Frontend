import { useRef } from "react"
export default function PasteOption(props)
{
    const passCheck=useRef(null);
    const passLabel=useRef(null);
    let handleSubmit=(e)=>{
        e.preventDefault();
        let title=e.target[0].value;
        let language=e.target[1].value;
        let password=e.target[2].value;
        let passCheck=e.target[3].checked;
        console.log(props.code.current.value);
        if(passCheck)
        {
            console.log("locked");
        }
        else
        {
            console.log("unlocked");
        }
    }
    return (
        <div className="inline-block m-4 md:flex md:flex-col lg:w-fit justify-center items-center border-[.1px] rounded-sm border-[#646464] text-white">
            <form className="outlin my-3 flex flex-col" onSubmit={handleSubmit}>
            <div className="outlin px-4 my-2 text-2xl">Paste Options</div>
                <div className="m-3 inline-block">
                        <label className="outlin w-[70px] inline-block mx-2 text-sm">
                            Title
                        </label>
                        <input className="rounded-sm text-sm py-2 px-2 bg-inherit outline-none border-[.1px] border-[#646464]" required type="text" name="title"/>
                </div>
                <div className="m-3 inline-block">
                        <label className="w-[70px] inline-block mx-2 text-sm">
                            Language
                        </label>
                        <select className="rounded-sm text-sm py-2 px-2 bg-inherit outline-none border-[.1px] border-[#646464]" name="language">
                            <option value="cpp">cpp</option>
                            <option value="c">c</option>
                            <option value="javascript">javascript</option>
                            <option value="python">python</option>
                        </select>
                </div>
                <div className="m-3 w-fit flex justify-center items-center outlin ">
                        <label className="w-[70px] inline-block mx-2 text-sm">
                            Password
                        </label>
                        <input ref={passCheck} disabled className="cursor-not-allowed rounded-sm text-sm py-2 px-2 outline-none border-[.1px] border-[#646464]" required type="password" name="title"/>
                        <input type="checkbox" className="h-[15px] w-[15px] outlin mx-2  bg-black" name="passwordcheck"
                        onChange={(e)=>{
                            if(e.target.checked)
                            { 
                                passCheck.current.disabled=false;
                                passCheck.current.classList.remove("cursor-not-allowed")
                                passCheck.current.classList.add("bg-inherit")
                                passLabel.current.classList.add("text-green-500")
                                passLabel.current.textContent="Enabled"
                            }
                            else
                            {
                                passCheck.current.disabled=true;
                                passLabel.current.classList.remove("text-green-500")
                                passCheck.current.classList.add("cursor-not-allowed")
                                passCheck.current.classList.remove("bg-inherit")
                                passLabel.current.textContent="Disabled"
                            }
                        }} 
                        />
                        <label ref={passLabel} className="text-sm w-[60px]" >
                            Disabled
                        </label>
                </div>
                <div className="m-3 inline-block">
                        <label className="outlin w-[70px] inline-block mx-2 text-sm">
                        </label>
                        <button className="font-bold bg-green-600 rounded-sm text-sm py-2 px-2 outline-none" type="submit">
                            Create New Paste
                        </button>
                </div>
            </form>
        </div>
    )
}