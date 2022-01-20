import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styleFor/KnownFor.css"

const KnownFor = ({knownForData}) =>{
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
    
    return(
        <>
            <div className="knownForContainer">
                {
                    knownForData && knownForData.map((current,index)=>{
                        if(index < 8){
                            return(
                                <>
                                    <Link to={`/${current.name || current.original_title}/${current.id}`}>
                                        <div className="knownforCard">
                                            <div className="knownForImgBox">
                                                <img src={`${imgBaseUrl}${current.poster_path}`} alt={current.original_title || current.name} />
                                            </div>
                                            <p>{current.original_title || current.name}</p>
                                        </div>
                                    </Link>
                                </>
                            )
                        }
                    })
                }
                
            </div>
        </>
    )
}

export default KnownFor;