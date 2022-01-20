import React, { useState } from "react";
import "./styleMediaFor/Media.css"
import VideoMedia from "./VideoMedia";
import BackdropMedia from "./BackdropMedia"
import PosterMedia from "./PosterMedia"

const MediaNavbar = ({id, mediaType}) =>{
    const [showBackdrop, setShowBackdrop] = useState(true)
    const [showPoster, setShowPoster] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

   
         const showVideoMedia = ()=>{
            setShowBackdrop(false)
            setShowPoster(false)
            setShowVideo(true)
            document.getElementById("video").style.borderBottom = "3px solid black"
            document.getElementById("poster").style.borderBottom = "none"
            document.getElementById("backdrop").style.borderBottom = "none"
        }
        const showBackdropMedia = ()=>{
            setShowBackdrop(true)
            setShowPoster(false)
            setShowVideo(false)
            document.getElementById("backdrop").style.borderBottom = "3px solid black"
            document.getElementById("video").style.borderBottom = "none"
            document.getElementById("poster").style.borderBottom = "none"
        }
        const showPosterMedia = ()=>{
            setShowBackdrop(false)
            setShowPoster(true)
            setShowVideo(false)
            document.getElementById("poster").style.borderBottom = "3px solid black"
            document.getElementById("video").style.borderBottom = "none"
            document.getElementById("backdrop").style.borderBottom = "none"
        }
   
    return(
        <>
            <div>
                <div className="mediaNavbar">
                    <h4 style={{margin: "0 25px 0 0"}}>Media</h4>
                    <span id="video" onClick ={()=>showVideoMedia()}>Video</span>
                    <span id="backdrop" onClick ={()=>showBackdropMedia()}>Backdrops</span>
                    <span id="poster" onClick ={()=>showPosterMedia()}>Poster</span>
                </div>

                <div className="renderMedia">
                    {showVideo && <VideoMedia id={id} mediaType = {mediaType}/>}
                    {showBackdrop && <BackdropMedia id={id} mediaType = {mediaType}/>}
                    {showPoster && <PosterMedia id={id} mediaType = {mediaType}/>}
                </div>

            </div>
            
        </>
    )
}

export default MediaNavbar;