import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./style/PopularContainer.css";

const PupularContainer = () =>{
    const [popularData, setPopularData] = useState([]);
    let page =1;
    
    //change API on click
    const [popularAPI, setPopularAPI] = useState("https://api.themoviedb.org/3/movie/popular?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US")
    useEffect( async() =>{
        
        const movieResponse = await fetch(popularAPI);
        const movieJsonResponse = await movieResponse.json();
        setPopularData(movieJsonResponse.results);
    },[popularAPI])



  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  //onClick function
    const movie = () =>{
        setPopularAPI(`https://api.themoviedb.org/3/movie/popular?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US&page=${page}`);
        
    }
    const tv = () =>{
        setPopularAPI(`https://api.themoviedb.org/3/tv/popular?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US&page=${page}`);
        
    }
    
   
    return(
        <>
        <div className="Pheading"><h3>What's Popular</h3>
            <div className="Plinks">
                <button autoFocus onClick={()=>movie()}>Movies</button>
                <button onClick={()=>tv()}>On TV</button>
                <button>For Rent</button>
                <button>In Theatres</button>
            </div>
        </div>
        <div id ="main">
            {
                popularData.map((current)=>{
                        return(
                            <>
                                <Link to= {`/${current.name || current.original_title}/${current.id}`} className="links">
                                    <div className ="Pcontainer">

                                        <div id="imgBox">
                                            <img src={ imgBaseURL + current.poster_path } alt={current.original_title} />
            
                                        </div>

                                        <div id="rating" ><p>{current.vote_average}</p></div>

                                        <div id="smallBox">
                                            <h4>{current.name || current.title}</h4>
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

export default PupularContainer;