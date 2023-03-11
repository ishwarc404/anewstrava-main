import ReactDOM from 'react-dom';
import axios from "axios";
import './App.css'

import React, { useState, useEffect } from 'react';
import ishwarprofileimage from './assets/ishwarprofileimage.jpeg'
// import premiumBadge from './assets/badges.svg';


var athleteProfileData = {
  lastname: 'Choudhary',
  firstname: 'Ishwar',
  city: 'Boulder',
  state: 'CO',
  bio: 'rookie'
}

const maxActivityPages = 5; //change this to 3 or 0
const baseURL = "https://www.strava.com/api/v3/athletes/43290018/stats";
const athleteDataURL = "https://www.strava.com/api/v3/athlete";
const singleActivityURL = "https://www.strava.com/api/v3/activities/"
var apiErrorOccured = false;
const refreshURL = 'https://www.strava.com/oauth/token?client_id=89361&client_secret=4a5ec7c37ec0e2381f2bb695d931242cff11edbb&refresh_token=c5246811c4f2f0c60ff41831355892a639a6b4c0&grant_type=refresh_token'
var accessToken = null;

function App() {

  const [, setState] = useState();

  // useEffect(() => {

  //   axios.post(refreshURL, {
  //   }).then((response) => {
  //     accessToken = response.data['access_token'];
  //     //GETTING ATHLETE PROFILE DATA
  //     axios.get(athleteDataURL, {
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //       }
  //     }).then((response) => {
  //       athleteProfileData = response.data;
  //       apiErrorOccured = false;
  //       console.log(athleteProfileData);
  //       setState({});
  //     })
  //       .catch(function (error) {
  //         console.log("API ERROR OCCURED, PLEASE TRY AFTER SOME TIME")
  //         apiErrorOccured = true;
  //         setState({});
  //       });;

  //     var currentEpoch = new Date().getTime();

  //   });
  // },[]);


  return (
    <div className='ProfileApp'>
        <div className='information-div-profile '>
          <div className='d-flex justify-content-center information-div-profile-text-container'>
            <div className='athlete-name'><b>{athleteProfileData['firstname'] + ' ' + athleteProfileData['lastname']}</b></div>
          </div>
        </div>
        <img className='information-div-profile-athlete-image' src={ishwarprofileimage}></img>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
