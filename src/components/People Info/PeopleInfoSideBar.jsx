import React, {useState, useEffect} from "react";
import "./styleFor/PeopleInfoSideBar.css";

const PeopleInfoSideBar = ({peopleId, setBiography, totalCredit})=>{
    const [peopleDetail, setPeopleDetail] = useState([]);
    const [knownAs, setknownas] = useState([])
    const apiKey = "d8c71a493b8a032424dd28f4f5c013ef";
    const imgBaseUrl = "https://image.tmdb.org/t/p/w200";
    const peopleDetailApi = `https://api.themoviedb.org/3/person/${peopleId}?api_key=${apiKey}&language=en-US`;

    useEffect(()=>{
        async function fetchPeopleDetailApi() {
            try{
                if(peopleId){
                    const peopleDetailData = await (await fetch(peopleDetailApi)).json();
                    setPeopleDetail(peopleDetailData);
                    peopleDetailData && setknownas(peopleDetailData.also_known_as)
                }
            }
            catch(err){
                console.log(err)
            }
        } 
        fetchPeopleDetailApi() 
    },[])
    
    setBiography(peopleDetail.biography)
    return(
        <>
            <div className="peopleSidebar">
                <div className="sideBarImgBox">
                    <img src={`${imgBaseUrl}${peopleDetail.profile_path}`} alt={peopleDetail.name} />
                </div>
                <div className="personalInfo">
                    <h2>Personal Info</h2>
                    <div>
                        <h4>Known for</h4>
                        <p>{peopleDetail.known_for_department}</p>
                    </div>

                    <div>
                        <h4>Known Credit</h4>
                       {totalCredit &&  <p>{totalCredit}</p>}
                    </div>

                    <div>
                        <h4>Gender</h4>
                        <p>{peopleDetail.gender=2 ? "Male" : "Female"}</p>
                    </div>

                    <div>
                        <h4>Birthdate</h4>
                        <p>{peopleDetail.birthday}</p>
                    </div>

                    <div>
                        <h4>Place of Birth</h4>
                        <p>{peopleDetail.place_of_birth}</p>
                    </div>

                    <div className="knownas" >
                        {knownAs == ""? null : <h4>Also known as</h4>}
                    
                        {
                           peopleId && knownAs && knownAs.map((current)=>{
                                return(
                                    <>
                                        <p>{current}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    

                    
                    
                </div>
            </div>
        </>
    )
}

export default PeopleInfoSideBar;