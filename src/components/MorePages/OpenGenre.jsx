import React , { useState, useEffect } from "react";
import MorePageCard from "./MorePageCard";
import "./style/OpenGenre.css";

const OpenGenre = ({match}) =>{
    const [media, setMedia] = useState(match.params.mediaType);
    const [genreData, setGenreData] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [genreTotalPage, setgenreToalPage] = useState(0);
    const [genreTotalResult, setGenreTotalResult] =  useState(0);

    const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const genreName = match.params.genreName;
    const genreId = match.params.genreId;
    const apiKey = 'd8c71a493b8a032424dd28f4f5c013ef';
    const findByGenreApi = `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreId}`;

    useEffect(()=>{
        async function  fetchGenreData() {
            if(genreName && media){
                
                const genreResult = await (await fetch(findByGenreApi)).json();
                setGenreData(genreResult.results);
                setGenreTotalResult(genreResult.total_results);
                setgenreToalPage(genreResult.total_pages);
            }
        }
        fetchGenreData();
    },[])

   

    console.log(genreData)
    return(
        <>
            <div className ="genreContainer">
                <div className="genreNavbar">
                    <span className="genreDropDown">Movies</span>
                    <div className="genreDropDownItem">
                        <div>Movies</div>
                        <div>TV shows</div>
                    </div>
                </div>
                <div className="genreHeader">
                    <h2>{genreName}</h2>
                    <h2>{`${genreTotalResult} ${media}s`}</h2>
                </div>

                <div className = "openCardBox">
                    {
                        genreData && genreData.map((current)=>{
                            return(
                                <>
                                    <MorePageCard title={current.title || current.name} 
                                        id={current.id}
                                        overview = {current.overview}
                                        poster_path = {current.poster_path}
                                        release_date = {current.release_date}
                                    />
                                </>
                            )
                        })
                    }
                    
                </div>

            </div>
            
        </>
    )
}

export default OpenGenre;