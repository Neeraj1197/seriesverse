import React from "react";
import "./style/OpenGenre.css";
import { Link } from "react-router-dom";

const MorePageCard = ({title, id, overview, poster_path, release_date}) =>{
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";
    return(
        <>
            <div className="openCard">
                <Link to={`/${title}/${id}`}>
                    <div className="openCardImg">
                        <img src={`${imgBaseUrl}${poster_path}`} />
                    </div>
                </Link>
                <div className="openCardInfo">
                    <div><Link to={`/${title}/${id}`} style={{fontWeight:"bold"}}>{title}</Link></div>
                    <div>{release_date}</div>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    )
}

export default MorePageCard;