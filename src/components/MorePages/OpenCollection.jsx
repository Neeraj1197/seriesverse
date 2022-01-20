import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./style/OpenCollection.css"

const OpenCollection = ({match}) =>{
    const [collectionDetail, setCollectionDetail] = useState([]);
    
    let collectionRating = 0;
    let count = 0;
    const collectionId = match.params.collectionId;

    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    const collectionApi = `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${apiKey}&language=en-US`;

    useEffect(()=>{
        async function fetchCollection() {
            if(collectionId){
                const collectionData = await (await fetch(collectionApi)).json();
                setCollectionDetail(collectionData)
            }
        }
        fetchCollection()
    },[])

        collectionDetail.parts && collectionDetail.parts.map((current)=>{
            if(current.vote_count != 0){
                collectionRating = collectionRating + current.vote_average
                count = count + 1;
            }
        })


    return(
        <>
            <div>
                {collectionDetail && 
                    <div className = "collectionUpperBox">
                        <div className = "collectionImageBox">
                            <img id = "collectionImage" src={`${baseImgUrl}${collectionDetail.poster_path}`} alt="" />
                        </div>
                        <div clasName="collectionSideContainer">
                            <h1>{collectionDetail.name}</h1>
                            <div>
                                <h3 style={{color:"black", margin:0}}>Overview</h3>
                                <p>{collectionDetail.overview}</p>
                            </div>
                            <div className="row2">
                            
                                {collectionDetail.parts &&<div className="ratingPercet" style={{background:`conic-gradient(from 0deg, green ${Math.round((collectionRating*10)/count)}%, white 20%)` }}>
                                        
                                    <div className="ratingNumber">
                                       <h4>{`${Math.round((collectionRating*10)/count)}%`}</h4>
                                    </div>
                                </div>}
                                <pre>User<br/>Score</pre>
                            </div>
                            {collectionDetail.parts &&  <div style={{display:"flex"}}><h4>No. of Movies: </h4><h4>{collectionDetail.parts && collectionDetail.parts.length}</h4></div>}
                        </div>
                    </div>   
                }
                <div className="collectionLower">
                { collectionDetail.parts && <h3 style={{color:"black"}}>{`${collectionDetail.parts.length} movies`}</h3>}
                { collectionDetail.parts &&  collectionDetail.parts.map((current)=>{
                        return(
                            <>
                                <div className="moviesTvContainer">
                                    <Link to={`/${current.original_title}/${current.id}`}>
                                        <div className="searchedMovieImg">
                                            <img src={`${baseImgUrl}${current.poster_path}`} alt="" />
                                        </div>
                                    </Link>
                                    <div className="MoviesTvInfo">
                                        <div><Link to={`/${current.original_title}/${current.id}`} style={{fontWeight:"bold"}}>{current.original_title}</Link></div>
                                        <div>{current.release_date}</div>
                                        <p>{current.overview}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
                </div>
            </div>
        </>
    )
}

export default OpenCollection;