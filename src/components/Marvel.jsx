import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Marvel = () =>{
    const [marvelData,setMarvelData] = useState([])

    //image base URL
    const imgBaseURL = "https://image.tmdb.org/t/p/w500";
    const marvelApi = `https://api.themoviedb.org/3/keyword/180547/movies?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US&include_adult=false`
    useEffect(async()=>{
        const marvelRes = await fetch(marvelApi);
        const marvelJsonRes = await marvelRes.json()
        setMarvelData(marvelJsonRes.results)
    },[])


    return(
        <>
            <div className="Pheading"><h3>Marvel</h3></div>
            <div id ="main">
                {
                    marvelData.map((current)=>{
                        return(
                            <>
                                <Link to= {`/${current.name || current.original_title}/${current.id}`} className="links">
                                    <div className ="Pcontainer">

                                        <div id="imgBox">
                                            <img src={ imgBaseURL + current.poster_path } alt={current.original_title} />

                                        </div>

                                        <div id="rating"><p>{current.vote_average}</p></div>

                                        <div id="smallBox">
                                            <h4>{current.original_title}</h4>
                                            <p>{current.release_date}</p>
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

export default Marvel