import React, { useEffect, useState } from "react";
import "./style/VideoModal.css"

const VideoModal = ({closeVideoModal, id, mediaType}) =>{
    const [videoData, setVideoData] = useState([])
    const videoAPI = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US`;

    useEffect(async()=>{
        const videoApiResponse = await (await fetch(videoAPI)).json()
        setVideoData(videoApiResponse.results[0])
        
    },[])
    
    const videoKey = videoData.key;

    // const videoKey =videoData.key
    const baseVideoURL = "https://www.youtube.com/embed/"

    return(
        <>
            <div className="videoModalBack" onClick={()=>closeVideoModal(false)}>
                <div className="videoModalContainer">
                    <div className="close_btn"><button onClick={()=>closeVideoModal(false)}>X</button></div>
                    <iframe width="850" height="490" src={baseVideoURL + videoKey} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
            </div>
        </>
    )
}

export default VideoModal;