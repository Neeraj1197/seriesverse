import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styleFor/AllPeopleCredits.css"

const AllPeopleCredits = ({peopleId}) =>{
    const [allCredits, setAllCredits] = useState([]);
    const [cast, setCast] = useState()


    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";  
    const peopleCreditApi = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?api_key=${apiKey}&language=en-US`;

    useEffect(()=>{
        async function fetchAllCredits() {
            if(peopleId){
                const fetchAllCreditData = await (await fetch(peopleCreditApi)).json();
                setAllCredits(fetchAllCreditData); 
                setCast(fetchAllCreditData.cast)

            }
        }
        fetchAllCredits()
    },[])

    allCredits.cast && allCredits.cast.sort(function (a, b) {
        return (
          new Date(b.first_air_date || b.release_date) -
          new Date(a.first_air_date || a.release_date)
        );
    });

    allCredits.crew && allCredits.crew.sort(function (a, b) {
        return (
          new Date(b.first_air_date || b.release_date) -
          new Date(a.first_air_date || a.release_date)
        );
    });

   
   
    
    return(
        <>
            <div id = "actingCredits">
                <h2 style={{color:"black", margin: "10px 0 10px 0"}}>Acting</h2>
                <div className="innerActingCredits">
                    {
                        allCredits.cast && allCredits.cast.map((current,index)=>{
                           return(
                               <>
                                    <div className="creditsList">
                                    
                                       {current.release_date === "" || current.first_air_date === ""?
                                            <>
                                                <h4>-</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`as ${current.character}`}</h4>

                                            </> :
                                            <>
                                                <h4>{current.first_air_date || current.release_date}</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`as ${current.character}`}</h4>

                                            </>
                                        }
                                    </div>
                               </>
                            )
                        })
                    }
                </div>
                
            </div>
            
            
            <div id = "productionCredits">
            <h2 style={{color:"black", margin: "10px 0 10px 0"}}>Production</h2>
                <div id="innerProductionCredits">
                {
                        allCredits.crew && allCredits.crew.map((current,index)=>{
                            if(current.department === "Production"){
                           return(
                               <>
                                    <div className="creditsList">
                                    
                                       {current.release_date === "" || current.first_air_date === ""?
                                            <>
                                                <h4>-</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </> :
                                            <>
                                                <h4>{current.first_air_date || current.release_date}</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </>
                                        }
                                    </div>
                               </>
                            )}
                        })
                    }
                </div>
            </div>

            <div id = "crewCredits">
                <h2 style={{color:"black", margin: "10px 0 10px 0"}}>Crew</h2>
                <div id="innerCrewCredits">
                {
                        allCredits.crew && allCredits.crew.map((current,index)=>{
                            if(current.department === "Crew"){
                           return(
                               <>
                                    <div className="creditsList">
                                    
                                       {current.release_date === "" || current.first_air_date === ""?
                                            <>
                                                <h4>-</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </> :
                                            <>
                                                <h4>{current.first_air_date || current.release_date}</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </>
                                        }
                                    </div>
                               </>
                            )}
                        })
                    }
                </div>
            </div>

            {<div id = "directingCredits">
                <h2 style={{color:"black", margin: "10px 0 10px 0"}}>Directing</h2>
                <div id="innerDirectingCredits">
                    {
                        allCredits.crew && allCredits.crew.map((current,index)=>{
                            if(current.department === "Directing"){
                           return(
                               <>
                                    <div className="creditsList">
                                    
                                       {current.release_date === "" || current.first_air_date === ""?
                                            <>
                                                <h4>-</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </> :
                                            <>
                                                <h4>{current.first_air_date || current.release_date}</h4>
                                                <div className="outerDot"><div className="innerDot"></div></div>
                                                <Link className="peopleCreditLinkToCardInfo" to = {`/${current.name || current.original_title}/${current.id}`}>{current.name || current.title}</Link>
                                                <h4>{`... ${current.job}`}</h4>

                                            </>
                                        }
                                    </div>
                               </>
                            )}else{
                                document.getElementById("directingCredits").style.display = "none";
                                console.log("data not available")
                            }
                        })
                    }
                </div>
            </div>}
        </>
    )
}

export default AllPeopleCredits;