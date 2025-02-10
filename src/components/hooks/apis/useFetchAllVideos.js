import { getAllVideos } from "@/components/apis/videos";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllVideos(){

  const { 
        isFetching :isVideoFecthing,
        isError: isVideoError ,
        isFetched : isVideoFetched,
        data : videos
        } = useQuery({
        queryKey : "videos",
        queryFn : getAllVideos,
        cacheTime: 0
    })
    
    return {
        isVideoFecthing,
        isVideoError,
        isVideoFetched,
        videos
    } 
}

