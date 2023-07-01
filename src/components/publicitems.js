export default function PublicItem(props)
{
    return(
        <div className="border-b-[.1px] border-b-[#646464] p-2">
            <div className="text-blue-300 font-bold hover:underline cursor-pointer">
                <a>
                {props.title}
                </a>    
            </div>
            <div className="flex text-gray-400">
                <div className="text-sm px-1">{props.language}</div>
                <div className="text-sm px-1">{props.date}</div>
            </div>

        </div>
    )
}