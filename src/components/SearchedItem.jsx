import React, { useEffect, useState } from "react";
import "./style/SearchedItem.css"
import Movies from "./Searchfor/Movies"
import Tv from "./Searchfor/Tv";
import People from "./Searchfor/People";
import Companies from "./Searchfor/Companies";
import Collections from "./Searchfor/Collections";
import KeywordSearch from "./Searchfor/KeywordSearch";

const SearchedItem = ({match}) =>{
    const [componentToShow, setComponentToShow] = useState("tv");

    //for movies search
    const [moviesResult, setMoviesResult] = useState([])
    const [moviesCurrentPage, setMoviesCurrentPage] = useState(1);
    const [moviesTotalResult, setMoviesTotalResult] = useState(0);
    const [moviesTotalPage, setMoviesTotalPage] = useState(0)
    
    //for companies
    const [companiesResult, setCompaniesResult] = useState([])
    const [companiesCurrentPage, setCompaniesCurrentPage] = useState(1);
    const [companiesTotalResult, setCompaniesTotalResult] = useState(0);
    const [companiesTotalPage, setCompaniesTotalPage] = useState(0);
    
    //for collections
    const [collectionsResult, setCollectionsResult] = useState([])
    const [collectionsCurrentPage, setCollectionsCurrentPage] = useState(1);
    const [collectionsTotalResult, setCollectionsTotalResult] = useState(0);
    const [collectionsTotalPage, setCollectionsTotalPage] = useState(0)

    //for Keywords
    const [keywordsResult, setKeywordsResult] = useState([])
    const [keywordsCurrentPage, setKeywordsCurrentPage] = useState(1);
    const [keywordsTotalResult, setKeywordsTotalResult] = useState(0);
    const [keywordsTotalPage, setKeywordsTotalPage] = useState(0);

    //for People
    const [peopleResult, setPeopleResult] = useState([])
    const [peopleCurrentPage, setPeopleCurrentPage] = useState(1);
    const [peopleTotalResult, setPeopleTotalResult] = useState(0);
    const [peopleTotalPage, setPeopleTotalPage] = useState(0);

    //for TvShow
    const [tvShowsResult, setTvShowsResult] = useState([])
    const [tvShowsCurrentPage, setTvShowsCurrentPage] = useState(1);
    const [tvShowsTotalResult, setTvShowsTotalResult] = useState(0);
    const [tvShowsTotalPage, setTvShowsTotalPage] = useState(0)


    const apiKey = 'd8c71a493b8a032424dd28f4f5c013ef';
    const searchValue = match.params.searchVal;

    const searchMovieApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${moviesCurrentPage}&include_adult=false&query=${searchValue}`;
    const searchCompaniesApi = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&page=${companiesCurrentPage}&include_adult=false&query=${searchValue}`;
    const searchCollectionsApi = `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&language=en-US&page=${collectionsCurrentPage}&include_adult=false&query=${searchValue}`;
    const searchKeywordsApi = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&page=${keywordsCurrentPage}&include_adult=false&query=${searchValue}`;
    const searchPeopleApi = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&page=${peopleCurrentPage}&include_adult=false&query=${searchValue}`;
    const searchTvShowApi = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=${tvShowsCurrentPage}&include_adult=false&query=${searchValue}`;

    //fetching movies data
    async function fetchMovieApi() {
        if(searchValue){
            const getMoviesData = await (await fetch(searchMovieApi)).json();
            setMoviesResult([...moviesResult,getMoviesData.results].flat());
            setMoviesTotalResult(getMoviesData.total_results);
            setMoviesTotalPage(getMoviesData.total_pages)

        }
    }

    //fetching tv data
    async function fetchTvShowsApi() {
        if(searchValue){
            const getTvShowsData = await (await fetch(searchTvShowApi)).json();
            setTvShowsResult([...tvShowsResult,getTvShowsData.results].flat());
            setTvShowsTotalResult(getTvShowsData.total_results);
            setTvShowsTotalPage(getTvShowsData.total_pages)

        }
    }

    //fetching People data
    async function fetchPeopleApi() {
        if(searchValue){
            const getPeopleData = await (await fetch(searchPeopleApi)).json();
            setPeopleResult([...peopleResult,getPeopleData.results].flat());
            setPeopleTotalResult(getPeopleData.total_results);
            setPeopleTotalPage(getPeopleData.total_pages)

        }
    }

    //fetching Collections data
    async function fetchCollectionsApi() {
        if(searchValue){
            const getCollectionsData = await (await fetch(searchCollectionsApi)).json();
            setCollectionsResult([...collectionsResult,getCollectionsData.results].flat());
            setCollectionsTotalResult(getCollectionsData.total_results);
            setCollectionsTotalPage(getCollectionsData.total_pages)

        }
    }
    
    //fetching Companies data
    async function fetchCompaniesApi() {
        if(searchValue){
            const getCompaniesData = await (await fetch(searchCompaniesApi)).json();
            setCompaniesResult([...companiesResult,getCompaniesData.results].flat());
            setCompaniesTotalResult(getCompaniesData.total_results);
            setCompaniesTotalPage(getCompaniesData.total_pages);
        }
    }

    //fetching Keywords data
    async function fetchKeywordsApi() {
        if(searchValue){
            const getKeywordsData = await (await fetch(searchKeywordsApi)).json();
            setKeywordsResult([...keywordsResult,getKeywordsData.results].flat( ));
            setKeywordsTotalResult(getKeywordsData.total_results);
            setKeywordsTotalPage(getKeywordsData.total_pages);
        }
    }


    useEffect(()=>{
        fetchMovieApi();
        fetchTvShowsApi();
        fetchPeopleApi();
        fetchCompaniesApi();
        fetchCollectionsApi();
        fetchKeywordsApi();
    },[moviesCurrentPage, tvShowsCurrentPage, peopleCurrentPage, companiesCurrentPage, collectionsCurrentPage, keywordsCurrentPage])

    
    const componentToShowFunc = (componentName) => {
        setComponentToShow(componentName);
      };
    
    return(
        <>
            <div className="searchedItemContainer">
                <div className="searchResult">
                    <div className="resultMainHeading"><span>Search Result</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("tv")}><span>TV Shows</span><span>{tvShowsTotalResult}</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("movie")}><span>Movies</span><span>{moviesTotalResult}</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("people")}><span>People</span><span>{peopleTotalResult}</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("companies")}><span>Companies</span><span>{companiesTotalResult}</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("collection")}><span>Collections</span><span>{collectionsTotalResult}</span></div>
                    <div className="resultKey" onClick={()=>componentToShowFunc("keyword")}><span>keywords</span><span>{keywordsTotalResult}</span></div>
                </div>
                <div className="renderItemContainer">
                    {componentToShow == "movie" &&  <Movies moviesResult={moviesResult} moviesTotalPage={moviesTotalPage} setMoviesCurrentPage={setMoviesCurrentPage} moviesCurrentPage={moviesCurrentPage}/>}
                    {componentToShow == "tv" && <Tv tvShowsResult={tvShowsResult} tvShowsTotalPage={tvShowsTotalPage} tvShowsCurrentPage={tvShowsCurrentPage} setTvShowsCurrentPage={setTvShowsCurrentPage}/>}
                    {componentToShow == "people" && <People peopleResult={peopleResult} peopleTotalPage={peopleTotalPage} peopleCurrentPage={peopleCurrentPage} setPeopleCurrentPage={setPeopleCurrentPage}/>}
                    {componentToShow == "companies" && <Companies companiesResult={companiesResult} companiesTotalPage={companiesTotalPage} companiesCurrentPage={companiesCurrentPage} setCompaniesCurrentPage={setCompaniesCurrentPage}/>}
                    {componentToShow == "collection" && <Collections collectionsResult={collectionsResult} collectionsTotalPage={collectionsTotalPage} collectionsCurrentPage={collectionsCurrentPage} setCollectionsCurrentPage={setCollectionsCurrentPage}/>}
                    {componentToShow == "keyword" && <KeywordSearch keywordsResult={keywordsResult} keywordsTotalPage={keywordsTotalPage} keywordsCurrentPage={keywordsCurrentPage} setKeywordsCurrentPage={setKeywordsCurrentPage}/>}
                    
                </div>
            </div>
        </>
    )
}

export default SearchedItem;