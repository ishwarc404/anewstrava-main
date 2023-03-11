import './header.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';
import uparrow from '../../assets/up_arrow.png';
import mediumlogo from '../../assets/1200px-Medium_logo_Wordmark_Black.png';
import stravalogo from '../../assets/1280px-Strava_Logo.svg.png';
import githublogo from '../../assets/GitHub-Logo.png';
import linkedinlogo from '../../assets/LinkedIn_Logo.svg.png';
import instagramlogo from '../../assets/Instagram_logo.svg.png';

var menuIsOpen = false;
var moreIsOpen = false;

function Header() {
  const [, setState] = useState();
  // let navigate = useNavigate();

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;
    //right
    if (e.keyCode == '27') {
      moreIsOpen = false;
      setState({});
    }
  }

  return (
    <div className={'header_1' + (moreIsOpen ? ' expand_full_screen' : '')}>
      <div className="d-flex justify-content-between">
        <div className="header_content_1">
          <img className="ishwar_image" src={ishwarname} />
          <img className="x_image" src={xletter} />
          <img className="strava_image" src={strava} />
        </div>
        <div>
        </div>
      </div>
    </div>

  );
}

export default Header;
