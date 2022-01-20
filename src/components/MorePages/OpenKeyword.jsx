import React ,{ useState, useEffect} from "react";
import MorePageCard from "./MorePageCard";
import "./style/OpenGenre.css";

const OpenKeyword = ({match}) =>{
    const [media, setMedia] = useState(match.params.mediaType);
    const [keywordData, setKeywordData] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [keywordTotalPage, setKeywordToalPage] = useState(0);
    const [keywordTotalResult, setKeywordTotalResult] =  useState(0);

    const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const keywordName = match.params.keywordName;
    const keywordId = match.params.KeywordId;
    const apiKey = 'd8c71a493b8a032424dd28f4f5c013ef';
    const findByKeywordApi = `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${currentPage}&with_keywords=${keywordId}`;

    useEffect(()=>{
        async function  fetchKeywordData() {
            if(keywordName && media){
                
                const keywordResult = await (await fetch(findByKeywordApi)).json();
                setKeywordData(keywordResult.results);
                setKeywordTotalResult(keywordResult.total_results);
                setKeywordToalPage(keywordResult.total_pages);
            }
        }
        fetchKeywordData();
    },[])
    
    if(keywordData){
        console.log(keywordData);
        console.log(keywordId);
    }
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
                    <h2>{keywordName}</h2>
                    <h2>{`${keywordTotalResult} ${media}s`}</h2>
                </div>

                <div className = "openCardBox">
                    {
                        keywordData && keywordData.map((current)=>{
                            return(
                                <>
                                    <MorePageCard title={current.title || current.name} 
                                        id={current.id}
                                        overview = {current.overview}
                                        poster_path = {current.poster_path}
                                        release_date = {current.release_date || current.first_air_date}
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

export default OpenKeyword;