import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Cardinfo.css"
import TopBilledCast from "./TopBilledCast";
import VideoModal from "./VideoModal";
import Recomandation from "./Recomandation";
import Keywords from "./Keywords";
import MediaNavbar from "./Media/MediaNavbar";
import CollectionContainer from "./CollectionContainer";



const CardInfo = ({match}) =>{
    const [infoData, setInfoData] = useState([]);
    const [moreInfo, setMoreInfo] = useState([]);
    const [mediaType, setMediaType] = useState("");
    const [openVideoModal, setOpenVideoModal] = useState(false);
    const [creditDetail, setCreditDetail] = useState();
    const [collectionId, setCollectionId]= useState(0);
 
    

    const id = match.params.cardId;
    const name = match.params.cardName;
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";

    const searchApi = `https://api.themoviedb.org/3/search/multi?api_key=d8c71a493b8a032424dd28f4f5c013ef&query=${name}&language=en-US&page=1&include_adult=false`;
    const infoApi = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=d8c71a493b8a032424dd28f4f5c013ef&language=en-US`
    const creditApi = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`

    useEffect(async () => {
        const searchApiData = await (await fetch(searchApi)).json()
        setInfoData(searchApiData.results[0])
        setMediaType(searchApiData.results[0].media_type)
    },[match.params.cardId]);

    useEffect( () => {
        async function fetchMoreInfo() {
            if(mediaType){
                const infoApiData = await (await fetch(infoApi)).json();
                if(mediaType === "movie"){
                    infoApiData && infoApiData.belongs_to_collection!=null && setCollectionId(infoApiData.belongs_to_collection.id)
                }
                setMoreInfo(infoApiData)
            } 
        }
        fetchMoreInfo();
    }, [mediaType, id])
       
    useEffect(()=>{
        async function fetchCredit(){
            if(id){
                const getCredit = await (await fetch(creditApi)).json()
                setCreditDetail(getCredit.crew)
            }
            
        }
        fetchCredit();
    },[id])

   const imgBaseURL = "https://image.tmdb.org/t/p/w500";
    
    return(
        <div className="cardMainContainer">
           <div className="infoContainer" >
               <div className="infoImageBox">

                   <img className="infoImg" src={imgBaseURL + infoData.poster_path} alt={infoData.original_title || infoData.name} />
               </div>
                <div >
                    

                    <div className="row1" >
                        <div className="name"><h3 style={{margin:0}}>{`${infoData.original_title || infoData.name} (${infoData.release_date && infoData.release_date.slice(0,4)})`}</h3></div>
                        <span className="censor">UA</span>
                        <span>{infoData.release_date || infoData.air_date}</span>
                        <span>
                            {
                                moreInfo.genres && moreInfo.genres.map((currGenres)=>{
                                    return(
                                        <>
                                            <Link to = {`/genre/${currGenres.id}/${currGenres.name}/${mediaType}`}>{currGenres.name}</Link>
                                        </>
                                    )
                                })
                            }
                        </span>
                        <span>{moreInfo.runtime || moreInfo.episode_run_time > 60? `${Math.trunc(moreInfo.runtime/60) || moreInfo.episode_run_time}h ${moreInfo.runtime%60 || moreInfo.episode_run_time}m` : `${moreInfo.runtime || moreInfo.episode_run_time}m`}</span>
                    </div>

                    <div className="row2">
                        
                            <div className="ratingPercet" style={{background:`conic-gradient(from 0deg, green ${infoData.vote_average *10}%, white 20%)` }}>
                                    
                                <div className="ratingNumber">
                                    <h4>{infoData.vote_average*10}%</h4>
                                </div>
                            </div>
                            <pre>User<br/>Score</pre>
                        
                   

                        <button onClick={()=> setOpenVideoModal(true)}><i class="fas fa-play mr-1"></i>Watch Trailer</button>
                    </div>
                    
                    <div className="row3">
                        
                        {moreInfo.tagline &&<p>{moreInfo.tagline}</p>}
                    </div>

                    <div className="row3">
                        <h2>Overview</h2>
                        <p>{infoData.overview}</p>
                    </div>

                    <div className="row4">
                        

                        {
                            infoData && mediaType == "tv"? 
                            <>
                                {
                                   moreInfo.created_by && moreInfo.created_by.map((creator)=>{
                                        return(
                                            <>
                                                <div className="people">
                                                <Link to={`/person/${creator.id}/${creator.original_name}`}>{creator.name}</Link>
                                                    <p>Creator</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </> : <>
                                        {
                                             creditDetail && creditDetail.map((currentCrew)=>{
                                                if(currentCrew.job == "Director"){
                                                    return(
                                                        <>
                                                            <div className="people">
                                                               <Link to={`/person/${currentCrew.id}/${currentCrew.original_name}`}>{currentCrew.name}</Link> 
                                                                <p>{currentCrew.job}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                         {
                                             creditDetail && creditDetail.map((currentCrew)=>{
                                                if(currentCrew.job == "Screenplay"){
                                                    return(
                                                        <>
                                                            <div className="people">
                                                            <Link to={`/person/${currentCrew.id}/${currentCrew.original_name}`}>{currentCrew.name}</Link>
                                                                <p>{currentCrew.job}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                         {
                                             creditDetail && creditDetail.map((currentCrew)=>{
                                                if(currentCrew.job == "Writer"){
                                                    return(
                                                        <>
                                                            <div className="people">
                                                            <Link to={`/person/${currentCrew.id}/${currentCrew.original_name}`}>{currentCrew.name}</Link>
                                                                <p>{currentCrew.job}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                         {
                                             creditDetail && creditDetail.map((currentCrew)=>{
                                                if(currentCrew.job == "Story"){
                                                    return(
                                                        <>
                                                            <div className="people">
                                                            <Link to={`/person/${currentCrew.id}/${currentCrew.original_name}`}>{currentCrew.name}</Link>
                                                                <p>{currentCrew.job}</p>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                  </>
                               
                         
                        }

                               
                    </div>
                </div>
                
           </div>
           
           <div className="mainBarSideBar">
                <div className="mainBar">
                    {mediaType && <TopBilledCast mediaType = {mediaType} movieId={id} name={name}/>}
                    <div>
                       {mediaType && <MediaNavbar id={id} mediaType={mediaType}/>}
                    </div>
                   {moreInfo.belongs_to_collection && <CollectionContainer collectionId={collectionId}/>}

                <div className="Recommendation">
                    <h3 style={{margin:0, color:"black"}}>Recommendations</h3>
                     {mediaType && <Recomandation id={id} mediaType = {mediaType} />}
                </div>
                    
                    
                </div>
                
               {moreInfo && <div className="sideBar">
                    <div className="social">
                        <a href="#" target="_blank"><i class="fab fa-facebook-square ml-5 social"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-twitter social" ></i></a>
                        <a href="#" target="_blank"><i class="fab fa-instagram social"></i></a>
                    </div>
                    
                    {
                        mediaType == "tv"? 
                        <>
                            <div className="sideItem">
                                <h4>Original Name</h4>
                                <p>{moreInfo.original_name}</p>
                            </div>

                            <div className="sideItem">
                                <h4>Status</h4>
                                <p>{moreInfo.status}</p>
                            </div>

                            <div className="sideItem">
                                <h4>Network</h4>
                                {moreInfo.networks && <img src={`${imgBaseURL}/${moreInfo.networks[0].logo_path}`} alt={moreInfo.networks[0].name} style={{height: "30px", width: "112px"}}/>}
                            </div>

                            <div className="sideItem">
                                <h4>Type</h4>
                                <p>{moreInfo.type}</p>
                            </div>

                            <div className="sideItem">
                                <h4>Original Language</h4>
                                {moreInfo.spoken_languages && <p>{moreInfo.spoken_languages[0].english_name}</p>}
                            </div>

                            
                        </> : 
                        <>
                            <div className="sideItem">
                                <h4>Status</h4>
                                <p>{moreInfo.status}</p>
                            </div>
                            
                            <div className="sideItem">
                                <h4>Original Language</h4>
                                {moreInfo.spoken_languages && <p>{moreInfo.spoken_languages[0].english_name}</p>}
                            </div>

                            <div className="sideItem">
                                <h4>Budget</h4>
                                <p>{`$${moreInfo.budget}`}</p>
                            </div>

                            <div className="sideItem">
                                <h4>Revenue</h4>
                                <p>{`$${moreInfo.revenue}`}</p>
                            </div>

                        </>
                    }
                   

                    
                    <div className="keywords">
                        <h4>Keywords</h4>
                       {id && mediaType && <Keywords id={id} mediaType = {mediaType}/>}
                    </div>
                    
                </div>}
            </div>
    
           {openVideoModal && <VideoModal closeVideoModal = {setOpenVideoModal} mediaType={mediaType} id={id}/>}
        </div>
    )
}

export default CardInfo;


