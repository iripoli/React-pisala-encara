const baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'

export async function getTeams(successCb, errorCb = ()=>{}){
  try{
    const url = baseUrl;
    const res = await fetch(url);
    const data = await res.json().teams.teams;


    const newTeam = {
      id: data.idTeam,
      name: data.strTeam,
      league: data.strLeague,
      badge: data.strTeamBadge
    };
    successCb(newTeam)
  }catch (e){
    errorCb(e.message);
  }
}