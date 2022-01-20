import React, {useEffect, useState} from "react";

const PosterMedia = ({id, mediaType}) =>{
    const [posterData, setPosterData] = useState();

    const apiKey  = "d8c71a493b8a032424dd28f4f5c013ef"
    const posterAPi = `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${apiKey}&language=en-US&include_image_language=en`;
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        async function fetchPackrop() {
            if(mediaType){
                const getposter = await (await fetch(posterAPi)).json();
                setPosterData(getposter.posters)
            }
        }
        fetchPackrop();
    },[id])

    
    return(
        <>
            <div style={{display: "flex", flexWrap: "nowrap", overflowX: "scroll", overflowY: "hidden"}}>
                {mediaType && posterData && posterData.map((current)=>{
                    return(
                        <> 
                            <img src={`${imgBaseURL}${current.file_path}`} style={{height:"300px", width: "auto"}} alt="" />
                        </>
                    )
                })
                

                }
                
            </div>
        </>
    )
}

export default PosterMedia;