import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/header'
import SummitApp from "summit/App"

import './App.css'
function App() {

  return (
      <div>
        <div>
          <Header></Header>
          <div className='d-flex justify-content-center Home'>
            <div>Profile infomation</div>
            <div>Activities</div>
            <di>
            <SummitApp/>
            </di>
          </div>
        </div>
      </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
