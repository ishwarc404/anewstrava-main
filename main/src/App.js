import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/header'
import SummitApp from "summit/App"
import ProfileInformation from "profile/App"
import './App.css'

function App() {

  return (
      <div>
        <div>
          <Header></Header>
          <div className='d-flex justify-content-center Home'>
            <div><ProfileInformation/></div>
            <div>yo</div>
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
