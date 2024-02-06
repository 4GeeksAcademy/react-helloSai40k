//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Contador from "./component/SecondCounter.js";

let d1=0;
let d2=0;
let d3=0;
let d4=0;
let d5=0;



setInterval(function()
{
    
    ReactDOM.render(<Contador d1={d1} d2={d2} d3={d3} d4={d4} d5={d5}/> , document.querySelector("#app"));
    d1++;

    if(d1==10){
        d1=0;
        d2++;
    }
    if(d2==10){
        d2=0;
        d3++;
    }
    if(d3==10){
        d3=0;
        d4++;
    }
    if(d4==10){
        d4=0;
        d5++;
    }
    

}, 1000);




