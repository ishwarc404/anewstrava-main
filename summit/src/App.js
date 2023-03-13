import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


import './App.css'

var summitHistory = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var summitHistoryValues = {
  'green':summitHistory,
  'sobo': summitHistory,
  'bear': summitHistory
}
var currentSummit = 'green'
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);


function App() {
  const [, setState] = useState();


  function changeSummit(value){
    console.log(value);
    currentSummit = value;
    setState({});
  }

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/getSummitCounts', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((response) => {
      summitHistoryValues = response.data
      setState({});
    });
  })
  
  return (
    <div className='SummitApp'>
      <div className='summit-header'>SUMMIT</div>
      <div>
        <select className='summit-select' name="summit-names" id="summit-names"
                onChange={(event) => changeSummit(event.target.value)}
                value={currentSummit}
            >
          <option value="green">Green Mountain</option>
          <option value="sobo">South Boulder Peak</option>
          <option value="bear">Bear Peak</option>
        </select>
      </div>
      <div className='summit-table'>
      <table>
      <thead>
        <tr>
          <th className='summit-table-heading-label-m'>M</th>
          <th className='summit-table-heading-label'>T</th>
          <th className='summit-table-heading-label'>W</th>
          <th className='summit-table-heading-label'>T</th>
          <th className='summit-table-heading-label'>F</th>
          <th className='summit-table-heading-label'>S</th>
          <th className='summit-table-heading-label'>S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][0] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][1] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][2] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][3] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][4] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][5] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][6] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][7] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][8] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][9] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][10] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][11] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][12] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][13] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][14] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][15] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][16] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][17] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][18] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][19] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][20] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][21] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][22] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][23] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][24] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][25] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][26] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistoryValues[currentSummit][27] ? '' : '-invisible')}></div></td>
        </tr>
      </tbody>
    </table>
      </div>
      <div className='d-flex justify-content-around summit-count'>
        <div> <div className='summit-count-label'>Last 4 Weeks</div>
        <div className='summit-count-value'>{countOccurrences(summitHistory, false)}</div>
        <div className='summit-count-label-2'>Total Activities</div></div>
       
       <div className='summit-buttons'>
        <div><button className='compare-button'>Compare</button></div>
        <div><button className='new-button'>Add a new summit</button></div>
       </div>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
