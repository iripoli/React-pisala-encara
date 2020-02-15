import React, { Component, useState, useCallback } from 'react';
import './App.css';
import LeagueTeams from './components/leagueTeams/leagueTeams'
import { getTeams } from './services/api.';

function App() {

  
return(
  <>
  <h1 className="title">Premier League Teams!</h1>
  
  <LeagueTeams />
  </>
)
  }

  
export default App;
