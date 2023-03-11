import './header.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import ishwarname from '../../assets/ishwar.png';
import xletter from '../../assets/x.png';
import strava from '../../assets/b&w.png';

function Header() {
  const [, setState] = useState();
  return (
    <div className='header_1'>
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
