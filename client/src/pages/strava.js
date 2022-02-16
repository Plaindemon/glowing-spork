import React, { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import axios from "axios";
// import './app.css';
import "../utils/strava";
// import polyline from '@mapbox/polyline'

function StravaActivities() {
  // const navigate = useNavigate();
  const client_id = "77814";
  const params = useParams();
  console.log(window.location.search);
  const client_secret = "ba4cf64706994d406df016b09df6d62ee55edaef";
  const url = new URLSearchParams(window.location.search);
  console.log(url);

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var code = getParameterByName("code");
  console.log(code);

  function handleClick() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/profile&response_type=code&scope=activity:read_all
        `;
  }
  const authLink = "https://www.strava.com/oauth/token?";

  function getAccessToken(data) {
    fetch(authLink, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: "77814",
        client_secret: client_secret,
        code: "code",
        grant_type: "authorization_code",
      }),
    }).then((res) => console.log(res.json()));
  }
  console.log("hello there");
  console.log(getAccessToken);
  getAccessToken(); // WHAT AM i PASSING IN HERE

  function getActivities(res) {
    const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;

    fetch(activitiesLink)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        document.getElementById("activity-name").textContent =
          "Activity Name: " + data[0].name;

        document.getElementById("activity-distance").innerHTML =
          "Distance: " + data[0].distance;

        document.getElementById("averageSpeed").innerHTML =
          "Average Speed: " + data[0].average_speed;

        document.getElementById("totalTime").innerHTML =
          "Total Time: " + data[0].elapsed_time;

        document.getElementById("elevationGain").innerHTML =
          "Total Elevation Gain: " + data[0].total_elevation_gain;
      });
  }

  function reAuthorize() {
    fetch(authLink, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: "77814",
        client_secret: "ba4cf64706994d406df016b09df6d62ee55edaef",
        refresh_token: "e3c3bce7513bb09b9c19bfd2450855830fb0d313",
        grant_type: "refresh_token",
      }),
    })
      .then((res) => res.json())
      .then((res) => getActivities(res));
  }

  reAuthorize();

  return (
    <div className="app-activities">
      <h1>Strava Activities</h1>
      <button onClick={handleClick}>Strava Login</button>
      <div className="activity" id="activity"></div>
      <div className="activity" id="activity-name"></div>
      <div id="activity-distance"></div>
      <div id="averageSpeed"></div>
      <div id="totalTime"></div>
      <div id="elevationGain"></div>

      <div id="activity-map"></div>
    </div>
  );
}

export default StravaActivities;
