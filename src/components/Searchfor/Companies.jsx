import React from "react";
import { Link } from "react-router-dom";


const Companies =({companiesResult, companiesTotalPage, companiesCurrentPage, setCompaniesCurrentPage }) =>{

    const imgBaseURL = "https://image.tmdb.org/t/p/w200"
    return(
        <>
            {
                companiesResult && companiesResult.map((current)=>{
                    return(
                        <>
                            <div style={{boxShadow: "0.5px 1.5px 5px -3px rgba(0,0,0,0.6)", paddingLeft: "30px 3px", display:"flex", alignItems: "center", marginBottom: "18px"}}>
                                <Link to="#">
                                    <img style={{height: "40px"}}src={`${imgBaseURL}${current.logo_path}`} alt={current.name} />
                                    <span style={{padding:"2px", border: "0.5px solid rgb(204,204,204)", marginLeft: "2px", borderRadius: "4px", backgroundColor: "rgb(204,204,204)", color: "white"}}>{current.origin_country}</span>
                                </Link>
                            </div>
                        </>
                    )
                })
            }
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {companiesCurrentPage < companiesTotalPage && <button className= "lodeMoreBtn" 
                        onClick={() => {
                            setCompaniesCurrentPage(companiesCurrentPage + 1);
                        }}
                        >
                        Load More
                </button>}
            </div>
            
        </>
    )
}

export default Companies;