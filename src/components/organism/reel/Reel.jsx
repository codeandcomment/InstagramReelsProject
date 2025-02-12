import { useEffect, useState } from 'react'
import useFetchAllVideos from '@/components/hooks/apis/useFetchAllVideos';
import Video from '@/components/atoms/video/Video';

export const Reel =() =>{

     const [playing,setplaying] = useState(1)
     const [videosDownloaded,setVideosDownloaded] = useState([]);

     const {isVideoFecthing,
      isVideoError,
      isVideoFetched,
      videos} = useFetchAllVideos();
    
     useEffect(()=>{
      if(isVideoFetched && videos)
        setVideosDownloaded([...videos])
    },[videos,isVideoFetched]) 
    
    
        if(isVideoFecthing){
          return (<div>Loading.....</div>)
        }

        if(isVideoError){
            return (<div>Error Fetching Video.</div>)
        }
    
      return (

          <div className="app">
            <div className="container">
              {
                isVideoFetched && videosDownloaded.map((currentvideo)=>(
                  <Video
                  url={currentvideo.url}
                  key={currentvideo.id}
                  id={currentvideo.id}
                  description={currentvideo.description}
                  playing={playing}
                  setplaying={setplaying}
                  />
                ))
              }
              
            </div>
           </div>

      )
}