import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../styles/Leagues.css';
 import PaginatedItems from './components/Pagination';

function Leagues() {
// const [state, setState] = useState('11');
// const [competitions, setCompetitions] = useState('');
// const [nameCompetitions, setNameCompetitions] = useState('');
const [countCompetitions, setCountCompetitions] = useState('');
const [leagues, setLeagues] = useState();
let leaguesArrea = [];

useEffect(() =>{ 
  const getLeagues = async () => {
    await axios.get('http://api.football-data.org/v2/competitions/',
          {headers: {'X-Auth-Token': 'a128c99eaed3421bab2dcf433c860b91'}}).then(res => {
      console.log('res', res);
      let a = res.data.count;
      setCountCompetitions(a);
    
      for (let key in res.data.competitions) {
        let objLeague = {
          id: key,
          nameLeague: res.data.competitions[key].name,
          country: res.data.competitions[key].area.name
        };
        leaguesArrea.push(objLeague);
      }
      setLeagues(leaguesArrea)
      console.log('leagues', leaguesArrea);
    }).catch(err => console.error(err));
  }
  getLeagues();
}, []);




  return (
    <div className="App">
      <div>
        <div className='league-block'>
          {leagues?.map((league, index) =>
            <div className="league-wrap" key={`league-${index}`}>
                <a href={'league?id=' + league.id}>
                  <div className='league-name'>{league.nameLeague}</div>
                  <div className='league-country'>{league.country}</div>
                </a>
            </div>
          )}
        </div>
      </div>
    <PaginatedItems itemsPerPage={9} count={countCompetitions} leagues={leagues}/> 
    </div>
  );
}

export default Leagues;
