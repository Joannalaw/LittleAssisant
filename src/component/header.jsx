import React from 'react';

import '../index.css';


const dateNow = new Date()
const  hourNow = twoDigit(dateNow.getHours())
// const minuteNow = twoDigit(dateNow.getMinutes())
// const secNow = twoDigit(dateNow.getSeconds())



function getGreetingsWord (t) {
    if (t >11 && t<18) {return "Good Afternoon!"}
    if (t>5 &&  t<12) {return "Good Morning!"}
    return "Good Evening!";
  }

function twoDigit(number){
    if (number <10){return "0"+number}
    return number;
}

// function currentTime() {
//     var date = new Date(); /* creating object of Date class */
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     hour = twoDigit(hour);
//     min = twoDigit(min);
//     sec = twoDigit(sec);
//     console.log(sec);
//     setTimeout(function(){ currentTime() }, 1000); /* setting timer */
//     return(
//         <header>
//             <h2>hour</h2>
//             <h2>min</h2>
//             <h2>sec</h2>
//         </header>
//     )
//   }


function header(){
    return(
        <header>
            <h1>{dateNow.getFullYear()}.{dateNow.getMonth()+1}.{dateNow.getDate()}</h1>
            <h1>{getGreetingsWord(hourNow)}</h1>
            <Clock date={new Date()} />
        </header>
    )
}

function Clock(props) {
    return (
      <div>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  


  export default header;