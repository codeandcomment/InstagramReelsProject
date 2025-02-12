import { useEffect, useRef } from "react";
import './Video.css'
import { ReelFooter } from "../ReelFooter/ReelFooter";
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

    },[playing,id])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{

                if(entry.isIntersecting){
                    videoRef.current.play();
                    setplaying(id)
                }
            })
        },{
            threshold:0.5
        });

        if(videoRef.current){
            observer.observe(videoRef.current)
        }

        return()=>{
            if(videoRef.current){
                observer.unobserve(videoRef.current);
            }
        }

    },[id,setplaying])

    return(<div className="video-wrapper">
        <video
          onClick={handleClick}  className="video-player" loop ref={videoRef} src={url}></video>
          <div className="bottom">
            <ReelFooter description={description} channel={'jaithra'}/>
          </div>
    </div>)


}