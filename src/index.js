import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function getGreetingsWord (t) {
  if (t >11 && t<18) {return "Good Afternoon!"}
  if (t>5 &&  t<12) {return "Good Morning!"}
  return "Good Evening!";
}


const  hourNow = new Date().getHours()
const minuteNow = new Date().getMinutes()
const dateNow = new Date()
const weatherUrl='https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=';


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(typeof(xmlHttp))
    const msg = JSON.parse(xmlHttp.responseText);
    return msg;
}







ReactDOM.render(

  <div className="jum">
    <h1>{dateNow.getFullYear()}.{dateNow.getMonth()+1}.{dateNow.getDate()}</h1>
    <h1>{getGreetingsWord(hourNow)}</h1>
    <h1>{hourNow}:{minuteNow}</h1>
    <p>{httpGet(weatherUrl+"tc").forecastDesc}</p>
    <p>{httpGet(weatherUrl+"en").forecastDesc}</p>

</div>,
  document.getElementById('root')
);