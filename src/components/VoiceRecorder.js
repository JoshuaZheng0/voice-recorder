import React, { useState } from "react";
import { ReactMic } from "react-mic";
import AudioTimer from "./AudioTimer";

export default function(){

    const [voice,setVoice] = useState(false);
    const [blobLink, setBlobLink] = useState(null);

    const stopRec = () =>{
        setVoice(false);
    }
    const startRec = () =>{
        setVoice(true);
    }
    const onStop = (recordedBlob) =>{
        setBlobLink(recordedBlob.blobURL);
    }    
    
    return(
        <div className="max-w-lg py-4 px-4 pt-4 border-spacing-1 border-cyan-600 bg-cyan-200">
            <h2>Audio Recorder</h2>
            <AudioTimer voice ={voice}></AudioTimer>
            <ReactMic 
            record = {voice}
            onStop={onStop}></ReactMic>
            <div>{voice?<button onClick={stopRec}>STOP</button>:<button onClick={startRec}>RECORD</button>}</div>
            <div>{blobLink?<div><audio controls src={blobLink}></audio><a href={blobLink} download="recording.wav">
                        <button>Download</button>
                    </a></div>:""}</div>
        </div>
    );
}