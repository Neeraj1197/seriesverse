import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./style/CollectionContainer.css"


const CollectionContainer = ({collectionId}) =>{
    const [getCollection, setGetCollection] = useState([])

    let collectionRating = 0;
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    const collectionApi = `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${apiKey}&language=en-US`;
    
    
    useEffect(()=>{
        async function fetchCollectionDetail() {
            if(collectionId){
                const collectionApiResponse = await (await fetch(collectionApi)).json();
                setGetCollection(collectionApiResponse)
            }
        }
        fetchCollectionDetail()
        
    },[collectionId])
    
    return(
        <>
            {
                getCollection &&
                
                    <div className="outer" style={{backgroundImage: `url(${baseImgUrl}${getCollection.backdrop_path})`}}>
                        <div className="collectionContainerBox" >
                            <h1 >Part of the {getCollection.name}</h1>
                            <div style={{display: "flex"}}>
                               {
                                    getCollection.parts && getCollection.parts.map((current,index)=>{
                                        if(index <3){

                                            return(
                                                <>
                                                    <h3>{current.title},</h3>
                                                </>
                                            )
                                        }
                                    })
                                }
                                
                            </div>
                            
                            <Link to={`/collection/${getCollection.id}/${getCollection.name}`} onClick={()=>window.scrollTo({top:"0", behaviour:"smooth"})}>VIEW THE COLLECTION</Link>
                        </div>
                    </div>
      
            
            }
        </>
    )
}

export default CollectionContainer;