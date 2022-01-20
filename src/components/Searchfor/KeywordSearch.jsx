import React from "react";
import { Link } from "react-router-dom";

const KeywordSearch = ({keywordsResult, keywordsTotalPage, keywordsCurrentPage, setKeywordsCurrentPage})=>{
    return(
        <>
            {
                keywordsResult && keywordsResult.map((current)=>{
                    return(
                        <>
                            <div style={{paddingLeft: "10px", marginBottom: "15px"}}>
                                <Link>
                                    {current.name}
                                </Link>
                            </div>
                        </>
                    )
                })
            }
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {keywordsCurrentPage < keywordsTotalPage && <button className= "lodeMoreBtn" 
                        onClick={() => {
                            setKeywordsCurrentPage(keywordsCurrentPage + 1);
                        }}
                        >
                        Load More
                </button>}
            </div>
            
        </>
    )
}
export default KeywordSearch