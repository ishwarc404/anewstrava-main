import './activityFeed.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ishwarprofileimage from '../../assets/ishwarprofileimage.jpeg'
import premiumBadge from '../../assets/badges.svg';
import axios from "axios";


var polyline = require('@mapbox/polyline');
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
    "summary_polyline": "{u~rFl|iaS^`@pBJ~IE`ADf@H`@Nn@`@b@T`@Lb@VvBDxGC~EDp@Nz@b@pA\\l@Z^d@^nAj@@PSrAGz@d@pC^~ADj@E\\{BbJ[|Ai@fBNn@lAhENr@\\bA\\zAB`BCNBpDBj@n@pCVlBHpAT|AL|BN|@FNA?HjBNN|@AVP~@CTD@DZzEHrBOnAWbBItBFtADPHH^|@Hv@DdBT|@AJRr@D\\HRFz@P`AFn@B@@FHBDLAJF`@AZDRTdANZd@h@Jr@Tj@Nl@x@`BTNVFZVAn@EVA`@B\\Xf@@DKTI\\@hAD\\@n@BLLDZd@Jt@z@f@Rd@J`@DZA`@Jp@?\\DTDTRZ?TVt@Fl@BlBSxBB`@h@z@Zt@F?Fn@Jd@Pj@Vl@Hx@HPFvA?ZDPBn@E\\ITEl@@h@BZDH@p@Mj@MLGdAAHLp@Ol@C\\Lj@e@?KF@PDJBj@ChAPrAN^BTCtBB|@MN][?GGK_@WO]C]w@_AMISi@Eu@[e@QsAa@SaAj@OCe@?gALiATQ?i@N_Df@SL_@?e@R_AAUEM@KJBDAMB~@AvAOfAk@n@y@ZiAQkA\\[Vi@FMIDOXu@PWd@}@L[@WKQUEeAIYIeA@k@|@WHgAr@_@Lo@f@Sf@?^Pr@An@KHK@eAUa@S_@o@WUu@cBq@s@oAcAg@m@uAqAUc@G]Zw@C]Aa@T}A@SC[Fo@GaCMiBl@aCDo@AST_BAoCD]^cBl@iBTgAN_@b@i@n@m@n@kBpAuAJ]NcAFsACa@s@aCa@iAIk@Do@\\uB?i@Ga@KS_@g@_A{@]k@_BoBYk@k@gC[g@YQyC?iBR_@GUY@m@Aq@GGoBM[OYe@Kg@YwEEWOk@mBqE[i@cAoC?YFa@XQDIAKSc@s@qAEk@l@oBBs@Gs@?i@RiAFgACaK@gCDsCEsKEg@B_ADc@Ng@A}AFuCC}B@eDImASy@Sg@CK@QjA{@LUF_@P[bBwAj@c@rAu@p@ON[?k@EkAESyAYi@SaCoAwA_ASYi@Wc@M]?e@IOOE[K{C[y@FI^YpE}D|@m@n@s@v@g@n@k@pCqCx@u@^Q~AsAd@o@^]Xa@FS",
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

// https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/path-5+fc5200-1(%7Bu~rFl%7CiaS%5E%60%40pBJ~IE%60ADf%40H%60%40Nn%40%60%40b%40T%60%40Lb%40VvBDxGC~EDp%40Nz%40b%40pA%5C%5Cl%40Z%5Ed%40%5EnAj%40%40PSrAGz%40d%40pC%5E~ADj%40E%5C%5C%7BBbJ%5B%7CAi%40fBNn%40lAhENr%40%5C%5CbA%5C%5CzAB%60BCNBpDBj%40n%40pCVlBHpAT%7CAL%7CBN%7C%40FNA%3FHjBNN%7C%40AVP~%40CTD%40DZzEHrBOnAWbBItBFtADPHH%5E%7C%40Hv%40DdBT%7C%40AJRr%40D%5C%5CHRFz%40P%60AFn%40B%40%40FHBDLAJF%60%40AZDRTdANZd%40h%40Jr%40Tj%40Nl%40x%40%60BTNVFZVAn%40EVA%60%40B%5C%5CXf%40%40DKTI%5C%5C%40hAD%5C%5C%40n%40BLLDZd%40Jt%40z%40f%40Rd%40J%60%40DZA%60%40Jp%40%3F%5C%5CDTDTRZ%3FTVt%40Fl%40BlBSxBB%60%40h%40z%40Zt%40F%3FFn%40Jd%40Pj%40Vl%40Hx%40HPFvA%3FZDPBn%40E%5C%5CITEl%40%40h%40BZDH%40p%40Mj%40MLGdAAHLp%40Ol%40C%5C%5CLj%40e%40%3FKF%40PDJBj%40ChAPrAN%5EBTCtBB%7C%40MN%5D%5B%3FGGK_%40WO%5DC%5Dw%40_AMISi%40Eu%40%5Be%40QsAa%40SaAj%40OCe%40%3FgALiATQ%3Fi%40N_Df%40SL_%40%3Fe%40R_AAUEM%40KJBDAMB~%40AvAOfAk%40n%40y%40ZiAQkA%5C%5C%5BVi%40FMIDOXu%40PWd%40%7D%40L%5B%40WKQUEeAIYIeA%40k%40%7C%40WHgAr%40_%40Lo%40f%40Sf%40%3F%5EPr%40An%40KHK%40eAUa%40S_%40o%40WUu%40cBq%40s%40oAcAg%40m%40uAqAUc%40G%5DZw%40C%5DAa%40T%7DA%40SC%5BFo%40GaCMiBl%40aCDo%40AST_BAoCD%5D%5EcBl%40iBTgAN_%40b%40i%40n%40m%40n%40kBpAuAJ%5DNcAFsACa%40s%40aCa%40iAIk%40Do%40%5C%5CuB%3Fi%40Ga%40KS_%40g%40_A%7B%40%5Dk%40_BoBYk%40k%40gC%5Bg%40YQyC%3FiBR_%40GUY%40m%40Aq%40GGoBM%5BOYe%40Kg%40YwEEWOk%40mBqE%5Bi%40cAoC%3FYFa%40XQDIAKSc%40s%40qAEk%40l%40oBBs%40Gs%40%3Fi%40RiAFgACaK%40gCDsCEsKEg%40B_ADc%40Ng%40A%7DAFuCC%7DB%40eDImASy%40Sg%40CK%40QjA%7B%40LUF_%40P%5BbBwAj%40c%40rAu%40p%40ON%5B%3Fk%40EkAESyAYi%40SaCoAwA_ASYi%40Wc%40M%5D%3Fe%40IOOE%5BK%7BC%5By%40FI%5EYpE%7DD%7C%40m%40n%40s%40v%40g%40n%40k%40pCqCx%40u%40%5EQ~AsAd%40o%40%5E%5DXa%40FS)/auto/500x300?access_token=pk.eyJ1IjoiaXNod2FyYzQwNCIsImEiOiJjbGY0czRwdTEwMDk2M3BqeGhxcmgxem55In0.es5t51shhzQiZqn7ldY9yw

//https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/path-1+fc5200-1+ffffff-0.45(%7Bu~rFl%7CiaS%5E%60%40pBJ~IE%60ADf%40H%60%40Nn%40%5C%5C%60%40b%40T%60%40Lb%40VvBDxGC~EDp%40Nz%40b%40pA%5C%5Cl%40Z%5Ed%40%5EnAj%40%40PSrAGz%40d%40pC%5E~ADj%40E%5C%5C%7BBbJ%5B%7CAi%40fBNn%40lAhENr%40%5C%5CbA%5C%5CzAB%60BCNBpDBj%40n%40pCVlBHpAT%7CAL%7CBN%7C%40FNA%3FHjBNN%7C%40AVP~%40CTD%40DZzEHrBOnAWbBItBFtADPHH%5E%7C%40Hv%40DdBT%7C%40AJRr%40D%5C%5CHRFz%40P%60AFn%40B%40%40FHBDLAJF%60%40AZDRTdANZd%40h%40Jr%40Tj%40Nl%40x%40%60BTNVFZVAn%40EVA%60%40B%5C%5CXf%40%40DKTI%5C%5C%40hAD%5C%5C%40n%40BLLDZd%40Jt%40z%40f%40Rd%40J%60%40DZA%60%40Jp%40%3F%5C%5CDTDTRZ%3FTVt%40Fl%40BlBSxBB%60%40h%40z%40Zt%40F%3FFn%40Jd%40Pj%40Vl%40Hx%40HPFvA%3FZDPBn%40E%5C%5CITEl%40%40h%40BZDH%40p%40Mj%40MLGdAAHLp%40Ol%40C%5C%5CLj%40e%40%3FKF%40PDJBj%40ChAPrAN%5EBTCtBB%7C%40MN%5D%5B%3FGGK_%40WO%5DC%5Dw%40_AMISi%40Eu%40%5Be%40QsAa%40SaAj%40OCe%40%3FgALiATQ%3Fi%40N_Df%40SL_%40%3Fe%40R_AAUEM%40KJBDAMB~%40AvAOfAk%40n%40y%40ZiAQkA%5C%5C%5BVi%40FMIDOXu%40PWd%40%7D%40L%5B%40WKQUEeAIYIeA%40k%40%7C%40WHgAr%40_%40Lo%40f%40Sf%40%3F%5EPr%40An%40KHK%40eAUa%40S_%40o%40WUu%40cBq%40s%40oAcAg%40m%40uAqAUc%40G%5DZw%40C%5DAa%40T%7DA%40SC%5BFo%40GaCMiBl%40aCDo%40AST_BAoCD%5D%5EcBl%40iBTgAN_%40b%40i%40n%40m%40n%40kBpAuAJ%5DNcAFsACa%40s%40aCa%40iAIk%40Do%40%5C%5CuB%3Fi%40Ga%40KS_%40g%40_A%7B%40%5Dk%40_BoBYk%40k%40gC%5Bg%40YQyC%3FiBR_%40GUY%40m%40Aq%40GGoBM%5BOYe%40Kg%40YwEEWOk%40mBqE%5Bi%40cAoC%3FYFa%40XQDIAKSc%40s%40qAEk%40l%40oBBs%40Gs%40%3Fi%40RiAFgACaK%40gCDsCEsKEg%40B_ADc%40Ng%40A%7DAFuCC%7DB%40eDImASy%40Sg%40CK%40QjA%7B%40LUF_%40P%5BbBwAj%40c%40rAu%40p%40ON%5B%3Fk%40EkAESyAYi%40SaCoAwA_ASYi%40Wc%40M%5D%3Fe%40IOOE%5BK%7BC%5By%40FI%5EYpE%7DD%7C%40m%40n%40s%40v%40g%40n%40k%40pCqCx%40u%40%5EQ~AsAd%40o%40%5E%5DXa%40FS)/-105.2458,39.9586,11,0/300x200?access_token=pk.eyJ1IjoiaXNod2FyYzQwNCIsImEiOiJjbGY0czRwdTEwMDk2M3BqeGhxcmgxem55In0.es5t51shhzQiZqn7ldY9yw


// https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(-105.241190,39.975503),pin-s-b+000(-105.240315,39.975332),path-5+fc5200-1(}kh~Ez{}sO|HUuHmj@uhHbOyAla@kisAdelC|aMf~w@egO|uaAahfBr{|@w_@sAozkCcwFsp@v]__w@`hjFjf@bdCkaJhmzAiyXtzb@fJ|{@{p[|~yErtBdacE{x^vkvHrZfuKo[tpBfxSrcuBocGpi_AqhCvjb@wgAvfsDhyc@fkrD~mD~bkDayD~ywCsui@vjmEoyBpk|AiOhHrvEdueApda@huoA|v[zuhFsySvwaAvbD`wqHxXpwDYj@riJULheEfXh^tdAj~I`^gI`hAkEY~@kHseBlGyC^kA)
// /auto/500x300?access_token=pk.eyJ1IjoiaXNod2FyYzQwNCIsImEiOiJjbGY0czRwdTEwMDk2M3BqeGhxcmgxem55In0.es5t51shhzQiZqn7ldY9yw
// https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(-87.321536,36.584454),pin-s-b+000(-104.793676,38.749513),path-5+f44-0.5(}kh~Ez{}sO|HUuHmj@uhHbOyAla@kisAdelC|aMf~w@egO|uaAahfBr{|@w_@sAozkCcwFsp@v]__w@`hjFjf@bdCkaJhmzAiyXtzb@fJ|{@{p[|~yErtBdacE{x^vkvHrZfuKo[tpBfxSrcuBocGpi_AqhCvjb@wgAvfsDhyc@fkrD~mD~bkDayD~ywCsui@vjmEoyBpk|AiOhHrvEdueApda@huoA|v[zuhFsySvwaAvbD`wqHxXpwDYj@riJULheEfXh^tdAj~I`^gI`hAkEY~@kHseBlGyC^kA)/auto/500x300?access_token=TOKEN
var pointsArray = []
var finalimageURL;
var activityFeedActivities = []


function convertSeconds(value) {

  if (!value) {
    return "";
  }
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

  if (hours == 0) { hours = ""; } else { hours = hours + "hrs "; }
  if (minutes == 0) { minutes = ""; } else { minutes = minutes + " mins "; }
  if (seconds == 0) { seconds = ""; } else { seconds = seconds + " secs"; }

  return hours + minutes + seconds; // Return is HH : MM : SS
}

var currentSportType = 'All';
var currentAthleteId = 43290018;
var currentActivityType = 'following';  //All, my, following, followers


function ActivityFeed() {


  const [, setState] = useState();

  function changeSportType(value){
    currentSportType = value;
    setState({});
  }

  function changeActivityType(value){
    currentActivityType = value;
    setState({});
  }



  useEffect(() => {


    axios.get('http://127.0.0.1:5000/getAllActivities', {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      params: { currentSportType: currentSportType,
      currentAthleteId: currentAthleteId,
      currentActivityType: currentActivityType}
    }).then((response) => {
      var lengthOfData = response.data.length;
      activityFeedActivities = []
      for (var i = 0; i < lengthOfData; i++) {
        tempActivityData = response.data[i];
        var activityURL = `https://strava.com/activities/${tempActivityData['id']}`
        var polyline_encode = encodeURIComponent(tempActivityData['map']);
        if (polyline_encode != '') {
          finalimageURL = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/path-3+fc5200-1(${polyline_encode})/auto/550x400?access_token=pk.eyJ1IjoiaXNod2FyYzQwNCIsImEiOiJjbGY0czRwdTEwMDk2M3BqeGhxcmgxem55In0.es5t51shhzQiZqn7ldY9yw`
        }
        else {
          finalimageURL = false;
        }

        
        activityFeedActivities.push(

          <div className='Activity'>
            <div className='d-flex justify-content-start'>
              <div>
                <img className='activity-div-profile-athlete-image' src={tempActivityData['image']}></img>
                {/* <img className='activity-div-athlete-badge' src={premiumBadge}></img> */}
              </div>
              <div className='activity-div-profile-info'>
                <div className='activity-div-profile-name'><b>{tempActivityData['athleteName']}</b></div>
                <div className='activity-div-profile-location'>{tempActivityData['start_date_local']} · Boulder, Colorado</div>
                <div className='activity-div-activity-name'>
                  <a className='activity-div-activity-url' href={activityURL} target="_blank">{tempActivityData['name']}</a></div>
                <div className='activity-div-activity-decription'>{tempActivityData['description']}</div>
                <div className='d-flex justify-content-start'>
                  <div className='activity-div-info-part-parent-distance'><div className='activity-div-info-part-distance'>Distance</div><div className='d-flex justify-content-center activity-info-part-number'>{parseFloat(tempActivityData['distance'] / 1000).toFixed(1) + ' km'}</div></div>
                  <div className='activity-div-info-part-divider'></div>
                  <div className='activity-div-info-part-parent-elev'><div className='activity-div-info-part-elev'>Elev Gain</div><div className='d-flex justify-content-center activity-info-part-number'>{parseFloat(tempActivityData['total_elevation_gain']).toFixed(1) + ' m'}</div></div>
                  <div className='activity-div-info-part-divider'></div>
                  <div className='activity-div-info-part-parent-time'><div className='activity-div-info-part-time'>Time</div><div className='d-flex justify-content-center activity-info-part-number'>{convertSeconds(tempActivityData['moving_time'])}</div></div>
                </div>
              </div>
            </div>
            <div className='activity-map d-flex justify-content-center'>
              <img src={finalimageURL} />
            </div>
          </div>
        )
      }
      setState({});
    });
  }, [currentSportType,currentActivityType])

  return (
    <div className='ActivityFeed'>
      <div className='d-flex justify-content-start filters-div'>
        <div>
          <select className='activity-select' name="activity-names" id="activity-names"
            onChange={(event) => changeSportType(event.target.value)}
            value={currentSportType}
            >
            <option value="All">All Sports  &nbsp;</option>
            <option value="Run">Run</option>
            <option value="Ride">Bike</option>
            <option value="Swim">Swim</option>
            <option value="Workout">Workout</option>
          </select>
        </div>
        <div>
          <select className='activity-select' name="activity-names" id="activity-names"
            onChange={(event) => changeActivityType(event.target.value)}
            value={currentActivityType}>
            {/* <option value="all">All Activities</option> */}
            <option value="following">Following</option>
            <option value="my">My Activities</option>
            {/* <option value="following">Following</option> */}
            <option value="followers">Followers</option>
          </select>
        </div>
        {/* <div>
          <select className='activity-select' name="activity-names" id="activity-names">
            <option value="alltypes">All Types</option>
            <option value="workouts">Workouts</option>
            <option value="races">Races</option>
            <option value="commutes">Commutes</option>
          </select>
        </div> */}
        {/* <div><button className='search-button'>SEARCH</button></div> */}
      </div>
      <div className='activity-feed-items'>
      {activityFeedActivities.map((value, index) => {
        return <div key={index}>{value}</div>
      })}
      </div>
      {/* <div className='Activity'>
        <div className='d-flex justify-content-start'>
          <div>
            <img className='activity-div-profile-athlete-image' src={ishwarprofileimage}></img>
            <img className='activity-div-athlete-badge' src={premiumBadge}></img>
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
        <div className='activity-map d-flex justify-content-center'>
          <img src={finalimageURL} />
        </div>
      </div> */}
    </div>

  );
}

export default ActivityFeed;
