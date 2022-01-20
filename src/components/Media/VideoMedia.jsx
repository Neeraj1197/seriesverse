import React, {useState, useEffect} from "react";

const VideoMedia = ({mediaType, id}) =>{
    const [videoPath, setVideoPath] = useState()

    const apiKey  = "d8c71a493b8a032424dd28f4f5c013ef"
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";
    const videoApi = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${apiKey}&language=en-US`

    useEffect(()=>{
        async function fetchVideoPath() {
            if(mediaType){
                const videoPathData = await (await fetch(videoApi)).json()
                setVideoPath(videoPathData.results)
            }
        }
        fetchVideoPath();
    },[id])

    return(
        <>
            {
                videoPath && videoPath.map((current)=>{
                    return(
                        <>
                            {/* <div>
                                <div style={{height:"300px", width: "auto", display: "flex", justifyContent: "center", alignItem: "center" , backgroundImage: `url(${imgBaseURL}${current.})` }}>
                                        <div style={{borderRadius: "50%", height: "20px", width: "20px" ,backgroundColor: "rgba(0,0,0,0.5)"}}><i class="fas fa-play"></i></div>
                                </div>
                            </div> */}
                        </>
                    )
                })
            }
            
        </>
    )
}

export default VideoMedia;