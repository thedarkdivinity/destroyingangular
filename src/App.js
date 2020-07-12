import React from 'react';


import CommonData from "./CommonData";

import './App.css';
import Showcase from "./Showcase";
import Common from "./Common";
import Footers from "./Footers";


function App() {
 
  
  return (
    <>
    <Showcase/>
    <div className="container">
    {CommonData.map((data)=>{
      return(
        <Common imgsrc={data.imgsrc} heading={data.heading} para={data.para}/>
      )
    })}
   
    </div>
    <Footers/>

    </>
  );
}

export default App;
