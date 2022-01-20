import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PupularContainer from './components/PopularContainer';
import Trending from './components/Trending';
import SearchedItem from './components/SearchedItem';
import Marvel from './components/Marvel';
import CardInfo from "./components/CardInfo";
import PopularMovies from "./components/DropDownPages/forMovies/PopularMovies";
import NowPlayingMovies from "./components/DropDownPages/forMovies/NowPlayingMovies";
import UpcommingMovies from "./components/DropDownPages/forMovies/UpcommingMovies";
import TopRatedMovies from "./components/DropDownPages/forMovies/TopRatedMovies";
import Footer from './components/Footer';
import peopleInfo from './components/People Info/PeopleInfo';
import FullCastNCrew from './components/MorePages/FullCastNCrew';
import OpenGernre from "./components/MorePages/OpenGenre"
import OpenKeyword from './components/MorePages/OpenKeyword';
import OpenCollection from "./components/MorePages/OpenCollection"
import AiringToday from './components/DropDownPages/forTvs/AiringTodayTv';
import PopularTv from './components/DropDownPages/forTvs/PopularTv';
import OnTvToday from './components/DropDownPages/forTvs/OnTv';
import TopRatedTv from './components/DropDownPages/forTvs/TopRatedTv';
import PeopleDropDownPage from './components/DropDownPages/PeopleDropDownPage';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SearchBar />
          <PupularContainer />
          <Marvel />
          <Trending />
          
        </Route>
        <Route exact path="/movies/popular" component={PopularMovies} />

        <Route exact path = "/movies/nowplaying" component={NowPlayingMovies} />

        <Route exact path = "/movies/toprated" component={TopRatedMovies} />

        <Route exact path = "/movies/upcomming" component = {UpcommingMovies} /> 

        <Route exact path = "/tv/airing_today" component = {AiringToday} />
        <Route exact path = "/tv/popular" component={PopularTv}/>
        <Route exact path = "/tv/on_tv" component={OnTvToday}/>
        <Route exact path = "/tv/top_rated" component={TopRatedTv} />

        <Route exact path = "/person/popular" component={PeopleDropDownPage} />
       
        <Route exact path="/:cardName/:cardId" component={CardInfo} /> 
        
        <Route exact path="/:searchVal" component={SearchedItem} /> 

        <Route exact path = "/person/:peopleId/:peopleName" component={peopleInfo} />

        <Route exact path = "/keyword/:KeywordId/:keywordName/:mediaType" component={OpenKeyword} />

        <Route exact path="/:mediaType/:name/:id/cast" component={FullCastNCrew}/>

        <Route exact path = "/genre/:genreId/:genreName/:mediaType" component={OpenGernre} />

        <Route exact path = "/collection/:collectionId/:collectionName" component = {OpenCollection} />
      </Switch>
      <Footer />
      
    </>
  );
}

export default App;
