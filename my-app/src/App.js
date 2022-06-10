
import React, { useEffect, useState } from 'react'
import './App.css';
import Player from './Player';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function App() {

  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('2021');

  let ll =[];

  useEffect(()=>{
    getNBA();
  },[query]);

  const getNBA = async()=>{
    
    const api = await fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "4cae9286a5mshc189c1969949d04p12c9e1jsna634b1b543eb"
      }
    });
    const data = await api.json();
    console.log(data.response);
    setTeams(data.response);
    ll = sortFunction(data.response);
  }
  
  const updateSearch=e=>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
  }

  // const sortFunction = async (teamss) =>{
  //   const xx = await teamss.sort((a,b)=>(a.conference.rank, b.conference.rank)?1:-1);
  //   console.log(xx);
  // }

  function sortFunction(teamss){
    return teamss.sort((a,b)=>(a.conference.rank, b.conference.rank)?1:-1);
  }

  return (

    
    <div className="App">
      {/* <Button color="success" className="font-weight-bold">Lorem Ipsum</Button> */}
      <form className = "search-form" onSubmit = {getSearch} >
                <input className = "search-bar" type="text" value = {search} onChange ={updateSearch}/> 
                <button  className='search-button' variant="success" type='submit'>
                    Search
                </button>
      </form>
      <h1>
        NBA conference teams with ranking in {query}
      </h1>

      {
        ll.map(player => (
          <Player 
            key={player.team.id}
            name ={ player.team.name}
            rank ={player.conference.rank} 
            logo = {player.team.logo}
          />
          
          ))
      }
      
    </div>
  );
}

export default App;
