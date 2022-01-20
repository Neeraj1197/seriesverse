import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css"

const Footer = () =>{
    return(
        <>
            <div className="footerContainer">
                <div className="footerLogo footerLinks">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie DB logo" />
                </div>
                <div className="footerLinks">
                    <h2>THE BASICS</h2>
                    <Link>ABOUT TMDB</Link>
                    <Link>CONTACT US</Link>
                    <Link>SUPPORT FORUMS</Link>
                    <Link>API</Link>
                    <Link>SYSTEM STATUS</Link>
                </div>
                <div className="footerLinks">
                    <h2>GET INVOLVED</h2>
                    <Link>Contribution Bible</Link>
                    <Link>3rd Party Applictions</Link>
                    <Link>Add New Movie</Link>
                    <Link>Add New Tv Show</Link>
                </div>
                <div className="footerLinks">
                    <h2>COMMUNITY</h2>
                    <Link>Guidlines</Link>
                    <Link>Discussion</Link>
                    <Link>Leaderboard</Link>
                    <Link>Twitter</Link>
                </div>
                <div className="footerLinks">
                    <h2>Legal</h2>
                    <Link>Terms of Use</Link>
                    <Link>API Terms of Use</Link>
                    <Link>Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;