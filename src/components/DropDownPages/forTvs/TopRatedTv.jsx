import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDownCard from "../DropDownCard";

const TopRatedTv = ()=>{
    const [topRatedTvData, setTopRatedTvData] = useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const TopRatedTvApi = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`;

    useEffect(()=>{
        async function fetchTopRatedApi() {
            const topRatedApiResponse = await (await fetch(TopRatedTvApi)).json();
            setTotalPage(topRatedApiResponse.total_pages);
            setTopRatedTvData([...topRatedTvData,topRatedApiResponse.results].flat())
        }
        fetchTopRatedApi()
    },[currentPage])
    return(
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", padding:"17px"}}>
                {
                   topRatedTvData && topRatedTvData.map((current)=>{
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
                {currentPage <= totalPage && <button className= "lodeMoreBtn" 
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

export default TopRatedTv;