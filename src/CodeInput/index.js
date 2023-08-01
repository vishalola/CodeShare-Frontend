export default function CodeInput(props){
    let heightAdjust=(e)=>{
        e.target.style.height=`${e.target.scrollHeight}px`
    }
    return (
        <div className="outlin text-white m-4 mt-0">
            <div className="px-1 my-1 text-lg font-bold text-white">New Paste</div>
            <textarea ref={props.reference} placeholder="Paste/Enter Here..." className="
            bg-[#363735]  text-white w-full resize-none min-h-[300px] rounded-md
            py-3 px-4 outline-none
            " onInput={heightAdjust}>
            </textarea>
        </div>
    )
}