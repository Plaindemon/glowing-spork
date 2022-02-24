
import React, { useState, useEffect } from 'react';

// var to connect to input in search 
import Body from './Body'
import "./parks.css"


function NationalParks(props) {

    const [inputSearchName, setInputSearchName] = useState("");
    // var inputSearchName = document.querySelector("#input-state");
    console.log(inputSearchName)
    // code using nps.gov API - use to get info from about places near the location desired 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const apiKeyNps = process.env.REACT_APP_NATIONAL_PARKS_KEY;
    var [parksResults, setParks] = useState([]);
    // var [weatherInfo, setWeatherInfo] = useState([]);
    // var [directionsInfo, setDirectionsInfo] = useState([]);
    // var [directionsUrl, setDirectionsUrl] = useState([]);


    // fetch a response from nps 
    let queryURL = fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
    // console.log(queryURL)

    var activitySearchBtn = document.querySelector("#activities-btn");
    // function handleClick(activitySearchBtn) {

    function getOptionsInfo(res) {
        queryURL
            .then((res) => {
                return res.json();
            })
            .then(result => {
                console.log(result);

                setParks(result.data)
                // console.log(setParks)
            })
        // .catch(error => console.log('error', error));

    }


    function handleClick(e) {
        e.preventDefault();
        // parksResults = result.data;
        console.log('The link was clicked.');
        getOptionsInfo(parksResults)
        console.log(parksResults)
    }

    // function ListActivity(props) {
    //     const parks = props.parks;
    //     const parkList = <div id="input-container" className="panel-block">

    //     </div>
    // }



    return (
        <div>
            <form className="control ">
                <input
                    id="input-state"
                    value={inputSearchName}
                    className="input panel-block"
                    type="text"
                    placeholder="Search using state acronym"
                    onChange={(e) => setInputSearchName(e.target.value)}></input>
                <button id="search-city-btn" className="button" onClick={handleClick}>Search</button>

            </form>
            <div className="app-activities">
                <div className="app-activitiesInner">
                    <div className="panel-block">


                    </div>
                    <Body />

                    <div id="input-container" className="panel-block">
                        Nearby Parks:
                        <p className="btn panel-block">Click links added to each result for more info from the National Parks Website</p>
                        <div>
                            <div className="parksResults-OuterBox">
                                <ul className="parksResults-ul">
                                    {parksResults.map((parks) => {
                                        return (
                                            <>
                                                {/* <div className="input-divOuter"> */}
                                                <div className="input-divOuter">
                                                    <div className="input-divInner">
                                                        <li className="parksResults-innerLi" key={parks.id}
                                                        >{parks.fullName}</li>
                                                        <li className="parksResults-innerLi" key={parks.directionInfo}
                                                        > 🗺️Directions🗺️:{parks.directionsInfo}</li>


                                                        <li className="parksResults-innerLi" key={parks.description}>🪐Description: {parks.description}</li>

                                                        <li className="parksResults-innerLi" key={parks.weatherInfo}>☀️Weather☀️{parks.weatherInfo}</li>
                                                    </div>
                                                </div>




                                            </>)
                                    })}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div>







                    </div>


                </div>
            </div>

            {/* 
        <button onClick={() => setParks()}>Search</button> */}

        </div >
    )
}

export default NationalParks;