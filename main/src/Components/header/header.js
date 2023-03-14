import './header.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';
import searchicon from '../../assets/searchicon.png'
import uploadicon from '../../assets/uploadicon.png'

function Header(props) {

  function upload() {
    document.getElementById("selectFile").click()
  }

  function fileSelectHandler(event){
    console.log(event.target.files[0])
    var activityName = prompt("Enter Activity Name")
    const formData = new FormData()
    formData.append("gpxfile", event.target.files[0]);
    axios.post('http://127.0.0.1:5000/uploadActivityFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*"
        },
        params: {
          activityName: activityName,
        }
    }).then((response) => {
      props.recieveUploadedActivity(response.data);
    })
  }


  const [, setState] = useState();
  return (
    <div className='header_1'>
      <div className="d-flex justify-content-start">
        <div className="header_content_1">
          <img className="ishwar_image" src={ishwarname} />
          <img className="x_image" src={xletter} />
          <img className="strava_image" src={strava} />
        </div>
        <div></div>
        <div style={{ display: 'grid' }}>
          <img className="upload_icon" src={uploadicon} id='plus' onClick={upload} />
          <input id='selectFile' hidden type="file" onChange={fileSelectHandler} />
        </div>

        {/* <div>
          <img className="search_icon" src={searchicon} />
        </div> */}
      </div>
    </div>

  );
}

export default Header;
