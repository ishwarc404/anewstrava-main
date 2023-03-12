import './activityFeed.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ishwarprofileimage from '../../assets/ishwarprofileimage.jpeg'

var tempActivityData = {
  "resource_state": 2,
  "athlete": {
      "id": 43290018,
      "resource_state": 1
  },
  "name": "Morning Run w Daniel 🤩",
  "distance": 10868.0,
  "moving_time": 5388,
  "elapsed_time": 5895,
  "total_elevation_gain": 329.1,
  "type": "Run",
  "sport_type": "Run",
  "workout_type": 0,
  "id": 7675643758,
  "start_date": "2022-08-21T12:03:39Z",
  "start_date_local": "2022-08-21T06:03:39Z",
  "timezone": "(GMT-07:00) America/Denver",
  "utc_offset": -21600.0,
  "location_city": null,
  "location_state": null,
  "location_country": null,
  "description": "Back from the bus stop",
  "achievement_count": 2,
  "kudos_count": 12,
  "comment_count": 0,
  "athlete_count": 2,
  "photo_count": 0,
  "map": {
      "id": "a7675643758",
      "summary_polyline": "{u~rFl|iaS^`@pBJ~IE`ADf@H`@Nn@\\`@b@T`@Lb@VvBDxGC~EDp@Nz@b@pA\\l@Z^d@^nAj@@PSrAGz@d@pC^~ADj@E\\{BbJ[|Ai@fBNn@lAhENr@\\bA\\zAB`BCNBpDBj@n@pCVlBHpAT|AL|BN|@FNA?HjBNN|@AVP~@CTD@DZzEHrBOnAWbBItBFtADPHH^|@Hv@DdBT|@AJRr@D\\HRFz@P`AFn@B@@FHBDLAJF`@AZDRTdANZd@h@Jr@Tj@Nl@x@`BTNVFZVAn@EVA`@B\\Xf@@DKTI\\@hAD\\@n@BLLDZd@Jt@z@f@Rd@J`@DZA`@Jp@?\\DTDTRZ?TVt@Fl@BlBSxBB`@h@z@Zt@F?Fn@Jd@Pj@Vl@Hx@HPFvA?ZDPBn@E\\ITEl@@h@BZDH@p@Mj@MLGdAAHLp@Ol@C\\Lj@e@?KF@PDJBj@ChAPrAN^BTCtBB|@MN][?GGK_@WO]C]w@_AMISi@Eu@[e@QsAa@SaAj@OCe@?gALiATQ?i@N_Df@SL_@?e@R_AAUEM@KJBDAMB~@AvAOfAk@n@y@ZiAQkA\\[Vi@FMIDOXu@PWd@}@L[@WKQUEeAIYIeA@k@|@WHgAr@_@Lo@f@Sf@?^Pr@An@KHK@eAUa@S_@o@WUu@cBq@s@oAcAg@m@uAqAUc@G]Zw@C]Aa@T}A@SC[Fo@GaCMiBl@aCDo@AST_BAoCD]^cBl@iBTgAN_@b@i@n@m@n@kBpAuAJ]NcAFsACa@s@aCa@iAIk@Do@\\uB?i@Ga@KS_@g@_A{@]k@_BoBYk@k@gC[g@YQyC?iBR_@GUY@m@Aq@GGoBM[OYe@Kg@YwEEWOk@mBqE[i@cAoC?YFa@XQDIAKSc@s@qAEk@l@oBBs@Gs@?i@RiAFgACaK@gCDsCEsKEg@B_ADc@Ng@A}AFuCC}B@eDImASy@Sg@CK@QjA{@LUF_@P[bBwAj@c@rAu@p@ON[?k@EkAESyAYi@SaCoAwA_ASYi@Wc@M]?e@IOOE[K{C[y@FI^YpE}D|@m@n@s@v@g@n@k@pCqCx@u@^Q~AsAd@o@^]Xa@FS",
      "resource_state": 2
  },
  "trainer": false,
  "commute": false,
  "manual": false,
  "private": false,
  "visibility": "everyone",
  "flagged": false,
  "gear_id": "g9352136",
  "start_latlng": [
      39.97550359927118,
      -105.24119038134813
  ],
  "end_latlng": [
      39.97533202171326,
      -105.24031564593315
  ],
  "average_speed": 2.017,
  "max_speed": 4.411,
  "average_cadence": 73.4,
  "has_heartrate": true,
  "average_heartrate": 155.8,
  "max_heartrate": 195.0,
  "heartrate_opt_out": false,
  "display_hide_heartrate_option": true,
  "elev_high": 1974.0,
  "elev_low": 1659.9,
  "upload_id": 8191467254,
  "upload_id_str": "8191467254",
  "external_id": "garmin_ping_235822386761",
  "from_accepted_tag": false,
  "pr_count": 0,
  "total_photo_count": 6,
  "has_kudoed": false,
  "suffer_score": 111.0
}

function ActivityFeed() {
  const [, setState] = useState();

  return (
    <div className='ActivityFeed'>
      <div className='Activity'>
        <div className='d-flex justify-content-start'>
          <div>
          <img className='activity-div-profile-athlete-image' src={ishwarprofileimage}></img>
          </div>
          <div className='activity-div-profile-info'>
            <div className='activity-div-profile-name'><b>Ishwar Choudhary</b></div>
            <div className='activity-div-profile-location'>Today at 9:01 AM · Boulder, Colorado</div>
            <div className='activity-div-activity-name'>{tempActivityData['name']}</div>
            <div className='activity-div-activity-decription'>{tempActivityData['description']}</div>
            <div className='d-flex justify-content-start'>
            <div className='activity-div-info-part-parent-distance'><div className='activity-div-info-part-distance'>Distance</div><div className='d-flex justify-content-center activity-info-part-number'>3.4kms</div></div>
            <div className='activity-div-info-part-divider'></div>
            <div className='activity-div-info-part-parent-elev'><div className='activity-div-info-part-elev'>Elev Gain</div><div className='d-flex justify-content-center activity-info-part-number'>213m</div></div>
            <div className='activity-div-info-part-divider'></div>
            <div className='activity-div-info-part-parent-time'><div className='activity-div-info-part-time'>Time</div><div className='d-flex justify-content-center activity-info-part-number'>34 mins</div></div>

          </div>
          </div>
        </div>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div>
      <div className='Activity'>
      </div> <div className='Activity'>
      </div>

    </div>

  );
}

export default ActivityFeed;
