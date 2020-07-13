import React, { useEffect } from "react";
import CommonData from "./CommonData";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Showcase from "./Showcase";
import Common from "./Common";
import Footers from "./Footers";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Showcase />
      <div className="container">
        {CommonData.map((data) => {
          return (
            <Common
              imgsrc={data.imgsrc}
              heading={data.heading}
              para={data.para}
            />
          );
        })}
      </div>
      <Footers />
    </>
  );
};

export default App;
