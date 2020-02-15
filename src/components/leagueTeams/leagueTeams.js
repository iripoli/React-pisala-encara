import React, { useState } from 'react';
import './leagueTeams.css'

function LeagueTeams() {
  const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'

  const [teams, setTeams] = useState()
  
  fetch(url)
    .then(res => res.json())
    .then(data => setTeams(data.teams))

  return (
    <>
    <h3>You're watching teams from the English Premier League</h3>
    <h4>Pick one to see more details</h4>
    
    <div className="container">
    {teams && teams.map((team, index)=>(
    <div>
      <div key={index}>
        <img src={team.strTeamBadge} className="league-TeamBadge"></img>
        <h5>{team.strTeam}</h5>
    </div>
      </div>),
      
    

       
    )}</div>
  </>)
}

export default React.memo(LeagueTeams)

