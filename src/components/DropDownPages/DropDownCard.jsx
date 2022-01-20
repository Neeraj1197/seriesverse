import React from "react";
import { Link } from "react-router-dom";
import "./Style/Card.css"

const DropDownCard = ({posterPath, rating, Name, releaseDate, id }) =>{
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    return(
        <>
            <Link to= {`/${Name}/${id}`} className="links">
                <div className ="dropDwonPcontainer">

                    <div id="dropDwonimgBox">
                        <img src={ baseImgUrl + posterPath } alt={Name} />

                    </div>

                    <div id="dropDwonrating" ><p>{rating}</p></div>

                    <div id="dropDownsmallBox">
                        <h4>{Name}</h4>
                        <p>{releaseDate}</p>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default DropDownCard;