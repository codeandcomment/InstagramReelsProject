import { useEffect, useRef } from "react";
import './Video.css'
export default function Video({
    id,
    url,
    description,
    playing,
    setplaying
}){

    function handleClick(){

        if(videoRef.current.paused){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
            setplaying(null);
        }

    }

    const videoRef = useRef(null);

    useEffect(()=>{

        if(playing!==id){
            videoRef.current.pause();
        }

    },[playing])


    return(<div className="video-wrapper">
        <video
          onClick={handleClick}  className="video-player" loop ref={videoRef} src={url}></video>
    </div>)


}