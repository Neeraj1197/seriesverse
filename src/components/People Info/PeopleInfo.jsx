import React, { useState, useEffect } from "react";
import "./styleFor/PeopleInfo.css"
import PeopleInfoSideBar from "./PeopleInfoSideBar";
import PeopleInfoRightBar from "./PeopleInfoRightBar";


const PeopleInfo =  ({match}) =>{
   
    const [biography, setBiography] = useState("")
    const [totalCredit,setTotalCredit] = useState()
    const peopleId = match.params.peopleId;
    const peopleName = match.params.peopleName;
    
    
    return(
        <>
            <div className = "peopleInfoContainer">
                {<PeopleInfoSideBar peopleId = {peopleId} setBiography={setBiography} totalCredit={totalCredit}/>}
                <PeopleInfoRightBar biography = {biography} peopleId = {peopleId} peopleName={peopleName} setTotalCredit={setTotalCredit}/>
            </div>
        </>
    )
}

export default PeopleInfo;