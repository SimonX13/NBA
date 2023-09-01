
import React, { useEffect, useState } from 'react';
import './App.css';
import Player from './Player';
import Home from './Home';
import Explore from './Explore';
import X from'./X';
//import Notification from './Notification';

import { Leftpane } from './components';
import {BrowserRouter as Router,
  Routes,
  Route} from  'react-router-dom'



import { useTheme, useThemeUpdate} from "./ThemeContext";

function App() {
  
  const apiKey = 'a4b6ea87b5mshcfbe2e37e8adfc5p175b81jsnf4a8637b1360';
  console.log(apiKey)

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./script.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // const [teams, setTeams] = useState([]);
  const [teamWest, setTeamWest] = useState([]);
  const [teamEast, setTeamEast] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('2021');

  

  // useEffect(()=>{
  //   getNBA();
  // },[query]);

  const getNBA = async()=>{
    
    const api = await fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    });
    const data = await api.json();
    console.log(data.response);

    const sorted = data.response.sort((a, b) => a.conference.rank - b.conference.rank); //sorted is an array 
    const westTeamArray = []; // array for stroing west conference 
    const eastTeamArray = []; // array for storing east conference

    // iterate through the all the object in the response 
    for(var i=0; i< sorted.length; i++){
      // add to westTeam array if it belongs to west
      if(sorted[i].conference.name === "west"){
        westTeamArray.push(sorted[i]); 
      }
      else{
        eastTeamArray.push(sorted[i]);
      }
    }

    setTeamWest(westTeamArray);
    setTeamEast(eastTeamArray);
    //setTeams(sorted);
   
  }
  
  const updateSearch=e=>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
  }

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const backgroundImageOne = 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)';
  //background: rgb(2,0,36);
  const backgroundImageTwo = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
 
  const themeStyle = {
    backgroundImage: darkTheme ?  backgroundImageTwo :backgroundImageOne
  }
  
  // the left pane will also be visible but depends on the postfix it might route to different files

  return (
    <Router>
      <div className="app" >
        <Leftpane />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/notifications" element = {<Notification/>} />
          <Route path="/messages"element = {<X/>}/> 
          <Route path="/bookmarks" > </Route>
          <Route path="/lists" > </Route>
          <Route path="/profiles" > </Route>
        </Routes>
        <div className='right-pane'>Right Plane</div>
      </div>
    </Router>
     
    //  <button className='modeButton' onClick={toggleTheme}>Switch Theme</button>   
    //  <div>
    //    <h1>Search a year</h1>
    //    <form className = "search-form" onSubmit = {getSearch} >
    //              <input className = "search-bar" type="text" value = {search} onChange ={updateSearch}/> 
    //              <button  className='search-button' variant="success" type='submit'>
    //                  Search
    //              </button>
    //    </form>
    //    <h1>
    //      NBA conference teams with ranking in {query}
    //    </h1>

 
       
    //    <div className='ConferenceRanking'>
    //      <div className='ConferenceRankingChild West'>
    //        <h2>West conference</h2>
    //        {
    //        teamWest.map(player => (
    //          <Player 
    //            key={player.team.id}
    //            name ={ player.team.name}
    //            rank ={player.conference.rank} 
    //            logo = {player.team.logo}
    //          />
             
    //          ))
    //        }
    //      </div>
    //      <div className='ConferenceRankingChild East'>
    //        <h2>East conference</h2>
    //        {
    //          teamEast.map(player => (
    //            <Player 
    //              key={player.team.id}
    //              name ={ player.team.name}
    //              rank ={player.conference.rank} 
    //              logo = {player.team.logo}
    //            />
               
    //            ))
    //        }
    //      </div>
    //    </div>
    //  </div>
  );
}

export default App;




function Notification (){
  return (
    <div>Notifications here</div>
  )
}