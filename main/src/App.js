import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/header'
import SummitApp from "summit/App"
import ProfileInformation from "profile/App"
import './App.css'

import ActivityFeed from './Components/activityFeed/activityFeed';

var activityArray = []
function App() {

  const [, setState] = useState();

  function recieveUploadedActivity(activityArrayReceived){
    activityArray = activityArrayReceived;
    setState({});
  }

  return (
      <div className='App'>
        <div>
          <Header recieveUploadedActivity={recieveUploadedActivity}></Header>
          <div className='d-flex justify-content-center Home'>
            <div><ProfileInformation/></div>
            <div><ActivityFeed activityArray={activityArray}/></div>
            <div>
            <SummitApp/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
