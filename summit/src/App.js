import React from 'react';
import ReactDOM from 'react-dom';

import './App.css'

var summitHistory = [false,true,false,false,true,false,true,true,true,false,true,false,true,false,false,true,true,true,false,true,false,true,false,true,false,false,true,true,]

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);


function App() {

  
  return (
    <div className='SummitApp'>
      <div className='summit-header'>SUMMIT</div>
      <div>
        <select className='summit-select' name="summit-names" id="summit-names">
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
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistory[0] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[1] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[2] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[3] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[4] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[5] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[6] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistory[7] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[8] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[9] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[10] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[11] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[12] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[13] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistory[14] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[15] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[16] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[17] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[18] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[19] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[20] ? '' : '-invisible')}></div></td>
        </tr>
        <tr>
          <td className='summit-table-activity-label-start'><div className={'summit-activity-marker'+(summitHistory[21] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[22] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[23] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[24] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[25] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[26] ? '' : '-invisible')}></div></td>
          <td className='summit-table-activity-label'><div className={'summit-activity-marker'+(summitHistory[27] ? '' : '-invisible')}></div></td>
        </tr>
      </tbody>
    </table>
      </div>
      <div className='d-flex justify-content-around summit-count'>
        <div> <div className='summit-count-label'>Last 4 Weeks</div>
        <div className='summit-count-value'>{countOccurrences(summitHistory, true)}</div>
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
