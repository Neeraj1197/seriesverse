import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trending = () =>{
    const [trendingData, setTrendingData] = useState([]);
    const [trendType, setTrendType] = useState("day");
    
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef"
    const trendApi = `https://api.themoviedb.org/3/trending/all/${trendType}?api_key=${apiKey}`
    const imgURL = "https://image.tmdb.org/t/p/w500";

    useEffect(  () =>{
        async function fetchTrendingData(){
            if(trendType){
                const trendResponse = await (await fetch(trendApi)).json();
                 setTrendingData(trendResponse.results);
            }
        } 
        fetchTrendingData()
    },[trendType])

    

    return(
        <>
            
            <div className="Pheading"><h3>Trending</h3>
            <div className="Plinks">
                <button autoFocus onClick={()=>setTrendType("day")}>Today</button>
                <button onClick={()=>setTrendType("week")}>This Week</button>
            </div>
        </div>
        <div id ="main">
            {
                trendingData.map((current)=>{
                    
                        return(
                            <>
                                <Link to= {`/${current.name || current.original_title}/${current.id}`} className="links">
                                    <div className ="Pcontainer">

                                        <div id="imgBox">
                                            <img src={ imgURL + current.poster_path } alt={current.original_title} />
            
                                        </div>

                                        <div id="rating"><p>{current.vote_average}</p></div>
                                        
                                        <div id="smallBox">
                                            <h4>{current.name || current.original_title}</h4>
                                            <p>{current.first_air_date || current.release_date}</p>
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

export default Trending;
