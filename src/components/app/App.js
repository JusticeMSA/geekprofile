import {useState} from 'react'
import SearchScreen from '../searchScreen/SearchScreen'
import ResultsScreen from '../resultsScreen/ResultsScreen'
import {fetchUserData} from '../../helperFunctions/fetchUserData'
// import {getUserStatistics} from '../../helperFunctions/getUserStatistics'
import GhPolyglot from 'gh-polyglot'
import {extractUserInformation} from '../../helperFunctions/extractUserInformation'

function App() {

  const [isIndex, setIsIndex] = useState(true);
  const [userInfo, setUserInfo] = useState({})
  const [profile, setProfile] = useState({});

  async function processSearch(username){

    const response = await fetchUserData(username)
    const userProfile = await extractUserInformation(response)
    setProfile(userProfile)
    setUserInfo(prev =>({...prev, profileInfo : userProfile}))
    getRepos(username)
    getUserStatistics(username)

  }

  const getUserStatistics = async (username) => {

    const me = new GhPolyglot(`${username}`) //Used to get user statistics
    me.userStats( function (err, stats) { Statscallback(stats) });
    
}
const getRepos = async (username) =>{
  const on = new GhPolyglot(`${username}`) //Used to get user statistics
  on.getAllRepos(function (err, stats) {Repocallback(stats)});
}

function Repocallback (stats){
  setUserInfo(prev =>({...prev, repos : stats}))
}

function Statscallback (stats){
  setUserInfo(prev =>({...prev, languages : stats}))


  setIsIndex(false)
}

  
  return(
    <>
      
     { isIndex? <SearchScreen processSearch={processSearch}/> : <ResultsScreen profile={profile} userInfo={userInfo} />}
       
    </>      
    
  )

  
}

export default App;
