
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
// import { FaCodeBranch, FaCodepen } from 'react-icons/fa';
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { index } from '../../../../server/models/Reaction';
import MapBox from './map';
// import '../../../src/App.css';
import './strava.css';
import { Card } from 'react-bootstrap';



function StravaActivities() {

    // const navigate = useNavigate();
    const client_id = process.env.REACT_APP_STRAVA_CLIENT_ID;
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [activityData, setActivityData] = useState([]);
    console.log(window.location.search)
    const client_secret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
    const url = new URLSearchParams(window.location.search)
    // const term = url.get('term')


    var code = getParameterByName('code');
    console.log(code)
    // console.log(term)
    //loading
    useEffect(() => {
        console.log(typeof url);
        if (code) {
            //loading variable with spinner loading is true 
            getAccessToken(code).then(setLoading(false));
        } else {
            console.log('hi');
        }
    }, [code])



    //use effect with dependency on data state on changing data then set loading to false and it will trigger 

    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function handleClick() {
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=/strava&response_type=code&scope=activity:read_all`
    }
    const authLink = "https://www.strava.com/oauth/token?";

    // if (code) {
    function getAccessToken(code) {

        return fetch(authLink, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                client_id: client_id,
                client_secret: client_secret,
                code: code,
                grant_type: 'authorization_code'
            })


            //get response json it and pass it to activities
        })
            .then((res) => res.json())
            .then(res => getActivities(res));

        // add other function call to get user id
        function getActivities(res) {

            console.log(res);
            //   // commented out path to get user profile info from an array
            //   // https://www.strava.com/api/v3/athlete?access_token=7bc114015e81808697585c211d65f269c319a3cc
            const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

            fetch(activitiesLink)
                // .then((res) => console.log(res.json()))
                .then((res) => {
                    return res.json();
                })
                .then(data => {
                    setActivityData(data);
                    console.log(data);
                })

        }
    }

    return (
      <div className="app-activities">
        <div className="app-activities">
          <div className="activity-box">
          <h1 className="activity-title">Your Strava Stats</h1>
          {activityData.map((data, index) => {
                return (
                    <>
                    <Card>  
                    <div className="flex-container">
                    <Card.Body>
                    <div className='strava-activities'>
                    <li className="activity-name" id="activity-name">{data.name}</li>
                    <li className="activity-distance" id="activity-distance">Distance: {Math.round(data.distance * .00062137)} miles </li>
                    <li className="averageSpeed" id="averageSpeed">Average Speed: {Math.round(data.average_speed * 2.2369)} mph</li>
                    <li className="totalTime" id="totalTime">Elapsed time: {Math.round(data.elapsed_time / 60)} minutes</li>
                    <li className="elevationGain" id="elevationGain">Elevation gain: {data.total_elevation_gain} feet</li>
                    <li className="activity-map" id="activity-map"></li>
                    </div>
                    </Card.Body>
                    <div className="map-div">
                    <MapBox polyline={data.map.summary_polyline}/>
                    </div>
                    </div>
                    </Card>
                    </>
                )
          })}
        <button class="button-stravaLogin" onClick={handleClick}>Strava Login</button>
        </div>
        </div>
      </div>
    );
}

export default StravaActivities;



