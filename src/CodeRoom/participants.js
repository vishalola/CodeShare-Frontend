import { useState } from "react"
import ParticipantItem from "./participantItem";
export default function Participants(props){

    const [showParticipants,setShowParticipants] = useState(false);
    let handleParticipantVisibility = ()=>{
        setShowParticipants(!showParticipants);
    }
    return (
        <div className="bg-[#272822] px-3 py-2 relative rounded-lg outline outline-[#414141] w-[250px] mx-5 my-2">
            {/* Participants List */}
            {showParticipants && <div className="max-h-[400px] overflow-scroll absolute bottom-[100%] w-[90%] px-5 my-2 py-2 bg-[#383931] rounded-md">
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>
                <ParticipantItem online={true} username="Vishal Ola"/>
                <ParticipantItem username="Vidhit"/>
                <ParticipantItem username="pvtr"/>
                <ParticipantItem username="sahilyadav555"/>

            </div>}
            {/* Heading Part */}
            <div onClick={handleParticipantVisibility} className="select-none outlin cursor-pointer font-semibold items-center px-5 flex text-lg justify-center">
                    {showParticipants?"Hide":"Show"} Participants
            </div>

        </div>
    )
}