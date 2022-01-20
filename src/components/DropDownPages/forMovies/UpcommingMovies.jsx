import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDownCard from "../DropDownCard";

const UpcommingMovies = () =>{
    const [upcommingData, setUpcommingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)

    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const upcommingApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${currentPage}`;
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        async function fetchUpcommingApi() {
            const upcommingApiResponse = await (await fetch(upcommingApi)).json();
            setUpcommingData([...upcommingData,upcommingApiResponse.results].flat());
            setTotalPage(upcommingApiResponse.total_pages)
        }
        fetchUpcommingApi()
    },[currentPage])
    return(
        <>
            <div style={{display:"flex", padding:"17px",flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
                {
                   upcommingData && upcommingData.map((current)=>{
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

export default UpcommingMovies;