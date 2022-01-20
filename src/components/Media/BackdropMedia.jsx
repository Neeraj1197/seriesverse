import React, {useEffect, useState} from "react";

const BackdropMedia = ({id, mediaType}) =>{
    const [backdropData, setBackdropData] = useState();

    const apiKey  = "d8c71a493b8a032424dd28f4f5c013ef"
    const backdropAPi = `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${apiKey}&language=en-US&include_image_language=en`;
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        async function fetchBackrop() {
            if(mediaType){
                const getbackdrop = await (await fetch(backdropAPi)).json();
                setBackdropData(getbackdrop.backdrops)
            }
        }
        fetchBackrop();
    },[id])

    
    return(
        <>
            <div style={{display: "flex", flexWrap: "nowrap", overflowX: "scroll", overflowY: "hidden"}}>
                {mediaType && backdropData && backdropData.map((current)=>{
                    return(
                        <> 
                            <img src={`${imgBaseURL}${current.file_path}`} style={{height:"300px", width:"auto"}} alt="" />
                        </>
                    )
                })
                

                }
                
            </div>
        </>
    )
}

export default BackdropMedia;