import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";



const Keywords = ({ id, mediaType }) =>{
    const [keywordName, setKeywordName] = useState()
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const KeywordAPI  = `https://api.themoviedb.org/3/${mediaType}/${id}/keywords?api_key=${apiKey}`;

    useEffect(()=>{
        async function fetchKeyword() {
            if(mediaType && id){
                const getKeyword =  await (await fetch(KeywordAPI)).json()
                setKeywordName(getKeyword.keywords || getKeyword.results)
            }
            
        }
        fetchKeyword();
    },[id])
    
    return(
        <>
             <div className="keywordContainer">
                    {keywordName && id &&
                        keywordName.map((current)=>{
                            return(
                                <>
                                    <Link to={`/keyword/${current.id}/${current.name}/${mediaType}`}>{current.name}</Link>
                                </>
                            ) 
                        })
                    }
            </div>
        </>
    )
}

export default Keywords;