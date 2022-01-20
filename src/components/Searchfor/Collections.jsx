import React from "react";
import { Link } from "react-router-dom";
import "./stylefor/MoviesTv.css";


const Collections =({collectionsResult, collectionsTotalPage, collectionsCurrentPage, setCollectionsCurrentPage}) =>{
    const imgBaseURL = "https://image.tmdb.org/t/p/w200";
    return(
        <>
            {
                collectionsResult && collectionsResult.map((current)=>{
                    return(
                        <>
                            <div className="moviesTvContainer">
                                <Link to="#">
                                    <div className="searchedMovieImg">
                                        <img src={`${imgBaseURL}${current.poster_path}`} alt="" />
                                    </div>
                                </Link>
                                
                                <div className="MoviesTvInfo">
                                    <div><Link to="#" style={{fontWeight:"bold"}}>{current.original_name}</Link></div>
                                    <p>{current.overview}</p>
                                </div>
                                
                            </div>
                        </>
                    )
                })
            }
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {collectionsCurrentPage < collectionsTotalPage && <button className= "lodeMoreBtn" 
                        onClick={() => {
                            setCollectionsCurrentPage(collectionsCurrentPage + 1);
                        }}
                        >
                        Load More
                </button>}
            </div>
            
            
        </>
    )
}

export default Collections;
