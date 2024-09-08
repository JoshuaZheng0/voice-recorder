import React, { useState } from "react";

export default function AudioTimer({voice}){
    const [timeElapsed, setTimeElapsed] = useState(0);

    React.useEffect(()=>{
        let intervalId;
        if(voice){
            setTimeElapsed(0);
            intervalId=setInterval(() => {
                setTimeElapsed(prevTime => prevTime+1);
            }, 10); //timeElapsed++ every 10 milliseconds
        }
        return() => clearInterval(intervalId);
    },[voice]);

    const hours = Math.floor(timeElapsed/360000);
    const minutes = Math.floor((timeElapsed%360000)/6000);
    const seconds = Math.floor((timeElapsed%6000)/100);
    const centiseconds = timeElapsed%100;
    
    return(
        <div>
            {hours.toString().padStart(2,"0")}:{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}:{centiseconds.toString().padStart(2,"0")}
        </div>
    );
}