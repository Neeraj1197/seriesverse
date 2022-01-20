import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css"
const Navbar = () =>{
    const[openDropDwon, setOpenDropDown] = useState(false)
    const[openTvDropDwon, setOpenTvDropDown] = useState(false)
    const[openPeopleDropDwon, setOpenPeopleDropDown] = useState(false)
    const[openMoreDropDwon, setOpenMoreDropDown] = useState(false)
    const moviesDropDwon = [["Popular", "Now Playing", "Upcomming", "Top Rated"],
                            ["Popular", "Airing Today", "On TV", "Top Rated"],
                            ["Popular People"],
                            ["Discussion", "Leaderboard", "Support", "API"]]
    return(
        <>
            <div className="navbar">
               
                    <div className="navItems"><Link to="/"><div id="webName"><div><h1>TMDB</h1></div> <div id="logo"></div> </div></Link></div>
                    <div className="navItems"><span className="DropDown" onMouseEnter={()=>setOpenDropDown(true)} onMouseLeave={()=>setOpenDropDown(false)}>Movies</span></div>
                    <div className="navItems"><span className="DropDown" onMouseEnter={()=>setOpenTvDropDown(true)} onMouseLeave={()=>setOpenTvDropDown(false)}>TV Shows</span></div>
                    <div className="navItems"><span className="DropDown" onMouseEnter={()=>setOpenPeopleDropDown(true)} onMouseLeave={()=>setOpenPeopleDropDown(false)}>People</span></div>
                    <div className="navItems"><span className="DropDown" onMouseEnter={()=>setOpenMoreDropDown(true)} onMouseLeave={()=>setOpenMoreDropDown(false)}>More</span></div>
                
            </div>
           {openDropDwon && <div className="moviesDropDwonEle" onMouseEnter={()=>setOpenDropDown(true)} onMouseLeave={()=>setOpenDropDown(false)}>
                <ul>
                    <li className= "navBarListItem"><Link to="/movies/popular">Popular</Link></li>
                    <li className= "navBarListItem"><Link to="/movies/Nowplaying">Now Playing</Link></li>
                    <li className= "navBarListItem"><Link to="/movies/upcomming">Upcomming</Link></li>
                    <li className= "navBarListItem"><Link to="/movies/toprated">Top Rated</Link></li>
                </ul>
            </div>}

            {openTvDropDwon && <div className="tvDropDown" onMouseEnter={()=>setOpenTvDropDown(true)} onMouseLeave={()=>setOpenTvDropDown(false)}>
                <ul>
                <li className= "navBarListItem"><Link to="/tv/popular">Popular</Link></li>
                    <li className= "navBarListItem"><Link to="/tv/airing_today">Airing Today</Link></li>
                    <li className= "navBarListItem"><Link to="/tv/on_tv">On Tv</Link></li>
                    <li className= "navBarListItem"><Link to="/tv/top_rated">Top Rated</Link></li>
                </ul>
            </div>}

            {openPeopleDropDwon && <div className="peopleDropDown" onMouseEnter={()=>setOpenPeopleDropDown(true)} onMouseLeave={()=>setOpenPeopleDropDown(false)}>
                <ul>
                    <Link to="/person/popular"><li className= "navBarListItem">Popular People</li></Link>
                               
                </ul>
            </div>}

            {openMoreDropDwon && <div className="moreDropDown" onMouseEnter={()=>setOpenMoreDropDown(true)} onMouseLeave={()=>setOpenMoreDropDown(false)}>
                <ul>
                    { moviesDropDwon[3].map((ele)=>{
                            return(
                                <>
                                    <Link><li className= "navBarListItem">{ele}</li></Link>
                                </>
                            )
                        })
                    }
                </ul>
            </div>}
        </>
    )
}

export default Navbar;