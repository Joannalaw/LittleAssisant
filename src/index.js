import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './component/app'





const weatherUrl='https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=';
const cityBusUrl = 'https://rt.data.gov.hk//v1/transport/citybus-nwfb/eta/CTB/003504/608';

function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  console.log(typeof(xmlHttp))
  const msg = JSON.parse(xmlHttp.responseText);
  return msg;
}




const arrivalTime = httpGet(cityBusUrl).data[0].eta
const Ar = arrivalTime.substring(11,16)


function hd(){ 
  ReactDOM.render(
  <div>
    <App/>
    <p>{httpGet(weatherUrl+"tc").forecastDesc}</p>
    <p>{httpGet(weatherUrl+"en").forecastDesc}</p>
    <p>往{httpGet(cityBusUrl).data[0].dest_tc}：{Ar}</p>
</div>,
  document.getElementById('root')
)};


ReactDOM.render(
  <Button variant="warning">+Add Notes</Button>,
  document.getElementById('note')
)


setInterval(hd, 1000);