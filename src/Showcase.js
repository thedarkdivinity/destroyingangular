import React from 'react';
import logo from "./logo.svg";



const Showcase = () => {
    return (
        <section className="showcaseSection">
        <div className="container">
       
        <div className="showcaseContent">
        
        <img src={logo} alt="Angular"/>
      
        <div>
        <h4 className="showcaseHeading">One framework.
        Mobile & desktop.</h4>
        <a href="https://www.angular.io" className="btn btn-dark">Get Started</a>
        </div>
        </div>
        </div>
            
        </section>
    )
}

export default Showcase;
