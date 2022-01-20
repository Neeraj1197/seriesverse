import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/SearchBar.css";

const SearchBar = () =>{
    const [searchKey, setSearchKey] = useState("")
    
    return(
        <>
            <div className="container">
                <h1>Welcome.</h1>
                <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
                <div id="search">

                    <input value ={searchKey} 
                    type="text" name="" id="" 
                    placeholder="Search for a movie, tv show, person......"
                    onChange={(e)=>setSearchKey(e.target.value)}/> 
                    <Link to = {`/${searchKey}`} >Search</Link>
                </div>
            </div>
        </>
        
    )
}

export  default SearchBar;