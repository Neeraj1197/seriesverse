import React, { useState, useEffect } from "react";
import DropDownCard from "../DropDownCard";


const PopularMovies = () =>{
    const [popularData, setPopularData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        async function fetchPopularApi() {
            const PopularApiResponse = await (await fetch(popularApi)).json();
            setPopularData([...popularData,PopularApiResponse.results].flat());
            setTotalPage(PopularApiResponse.total_pages)
        }
        fetchPopularApi();
    },[currentPage])
    return(
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center",padding:"17px"}}>
                {
                   popularData && popularData.map((current)=>{
                       return(
                           <>
                                <DropDownCard Name={current.title || current.name}
                                    id={current.id}
                                    posterPath = {current.poster_path}
                                    rating = {current.vote_average}
                                    releaseDate = {current.release_date || current.first_air_date}
                                    />
                           </>
                       )
                   })
                }
                {currentPage <=totalPage && <button className= "lodeMoreBtn" 
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                    >
                    Load More
                </button>}
            </div>    
        </>
    )
}

export default PopularMovies;