import ReactDOM from 'react-dom';
import axios from "axios";
import './App.css'

import React, { useState, useEffect } from 'react';
import ishwarprofileimage from './assets/ishwarprofileimage.jpeg'
import premiumBadge from './assets/badges.svg';


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
            <img className='athlete-badge' src={premiumBadge}></img>
          </div>
          <div className='d-flex justify-content-center info-part-parent'>
            <div className='info-part'><div className='info-part-name'>Following</div><div className='d-flex justify-content-center info-part-number'>296</div></div>
            <div className='info-part-divider'></div>
            <div className='info-part'><div className='info-part-name'>Followers</div><div className='d-flex justify-content-center info-part-number'>116</div></div>
            <div className='info-part-divider'></div>
            <div className='info-part'><div className='info-part-name'>Activities</div><div className='d-flex justify-content-center info-part-number'>950</div></div>

          </div>
          <div className='info-latest-activity'>
            <div className='info-latest-activity-header'>Latest Activity</div>
            <div className='d-flex justify-content-start'>
              <div className='info-latest-activity-acitivity-name'>Afternoon Run</div>
              <div className='info-latest-activity-acitivity-dot'>&#8729;</div>
              <div className='info-latest-activity-acitivity-date'>Today</div>
            </div>
          </div>
          <div className='info-training-log'>
              <div className='info-training-log-name'>Your Training Log</div>
          </div>
        </div>
        <img className='information-div-profile-athlete-image' src={ishwarprofileimage}></img>

    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
