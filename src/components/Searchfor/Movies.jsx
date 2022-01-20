import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylefor/MoviesTv.css";

const Movies = ({moviesResult, moviesTotalPage, setMoviesCurrentPage, moviesCurrentPage}) =>{
    
    
    const imgBaseURL = "https://image.tmdb.org/t/p/w200"

    return(
        <>
            {
               moviesResult && moviesResult.map((current)=>{
                    return(
                        <>
                            <div className="moviesTvContainer">
                                <Link to={`/${current.original_title}/${current.id}`}>
                                    <div className="searchedMovieImg">
                                        <img src={`${imgBaseURL}${current.poster_path}`} alt="" />
                                    </div>
                                </Link>
                                <div className="MoviesTvInfo">
                                    <div><Link to={`/${current.original_title}/${current.id}`} style={{fontWeight:"bold"}}>{current.original_title}</Link></div>
                                    <div>{current.release_date}</div>
                                    <p>{current.overview}</p>
                                </div>
                            
                            </div>
                        </>
                    )
                })
            }
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {moviesCurrentPage < moviesTotalPage && <button className= "lodeMoreBtn" 
                        onClick={() => {
                            setMoviesCurrentPage(moviesCurrentPage + 1);
                        }}
                        >
                        Load More
                </button>}
            </div>
            
        </>
    )
}

export default Movies;

