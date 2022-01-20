import React, {useState, useEffect} from "react";
import AllPeopleCredits from "./AllPeopleCredits";
import KnownFor from "./KnownFor";
import "./styleFor/PeopleInfoRightBar.css"

const PeopleInfoRightBar = ({biography, peopleId, peopleName, setTotalCredit}) =>{
    const [peopleCredits, setPeopleCredits] = useState([])
    const knownForData = peopleCredits;
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";  
    const peopleCreditApi = `https://api.themoviedb.org/3/person/${peopleId}/combined_credits?api_key=${apiKey}&language=en-US`;

   
   peopleCredits && setTotalCredit(peopleCredits.length)


    useEffect(()=>{
        async function fetchPeopleCreditApi() {
            if(peopleId){
                const peopleCreditData = await (await fetch(peopleCreditApi)).json();
            setPeopleCredits(peopleCreditData.cast)
            }
        }
        fetchPeopleCreditApi();
    },[])

   
   peopleCredits && knownForData.sort(function(a, b){
            return b.vote_count - a.vote_count;
    });

 return(
     <>
        <div className="peopleRightBar">
            {peopleName && <h1>{peopleName}</h1>}
            <div className="biography">
                <h3 style={{color:"black"}}>Biography</h3>
                {biography && <p>{biography}</p>}
            </div>

            <div className="knownfor">
                <h3 style={{color:"black"}}>Known For</h3>
                {knownForData && <KnownFor knownForData={knownForData} />}
            </div>

            <div>
                <AllPeopleCredits className="random" peopleId={peopleId}/>
            </div>
            

        </div>
     </>
 )
}

export default PeopleInfoRightBar;