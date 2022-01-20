import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Recomandation.css"


const Recomandation = ({mediaType, id}) =>{
    const [recomandedData, setRecomandedData] = useState()
    

    const APIKey = "d8c71a493b8a032424dd28f4f5c013ef"
    const recomandationApi = `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${APIKey}&language=en-US&page=1`
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";

    useEffect(async()=>{
        const recomandedDataReq = await fetch(recomandationApi);
        const reconmandedJsonData = await recomandedDataReq.json();
        setRecomandedData(reconmandedJsonData.results)
    },[id])

    
   

    return(
        <>
        
            <div className = "recomandationContainer">
                {recomandedData &&
                    recomandedData.map((current)=>{
                        return(
                            <>
                                <Link to= {`/${current.name || current.title}/${current.id}`}  className="links">
                                    <div className="recomandationCard" onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                        <div className="recomandationImgBox" >
                                            <img src={`${imgBaseURL + current.backdrop_path}`} alt={current.title} />
                                            <div className="date" ><span>{current.release_date || current.first_air_date}</span></div>
                                        </div>
                                        <div className ="nameAndRating">
                                            <span>{current.original_title || current.name}</span>
                                            <span>{(current.vote_average * 10).toFixed(2) + "%"}</span>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
                    
            </div>
            
        </>
    )
}

export default Recomandation;