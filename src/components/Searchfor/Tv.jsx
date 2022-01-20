import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylefor/MoviesTv.css"
const Tv = ({tvShowsResult, tvShowsCurrentPage, tvShowsTotalPage, setTvShowsCurrentPage}) =>{
    
    const imgBaseURL = "https://image.tmdb.org/t/p/w200"
    return(
        <>
            {
                tvShowsResult && tvShowsResult.map((current)=>{
                    return(
                        <>
                            <div className="moviesTvContainer">
                                <Link to={`${current.original_name}/${current.id}`}>
                                    <div className="searchedMovieImg">
                                        <img src={`${imgBaseURL}${current.poster_path}`} alt={current.name} />
                                    </div>
                                </Link>
                                <div className="MoviesTvInfo">
                                    <div><Link to={`${current.original_name}/${current.id}`} style={{fontWeight:"bold"}}>Marvel Studios: Legends</Link></div>
                                    <div>{current.first_air_date}</div>
                                    <p>{current.overview}</p>
                                </div>
                                
                            </div>
                        </>
                    )
                })
            }
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {tvShowsCurrentPage < tvShowsTotalPage && <button className= "lodeMoreBtn" 
                        onClick={() => {
                            setTvShowsCurrentPage(tvShowsCurrentPage + 1);
                        }}
                        >
                        Load More
                </button>}
            </div>
        </>
    )
}

export default Tv;