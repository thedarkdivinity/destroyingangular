import React from "react";

const Common = ({ imgsrc, para, heading }) => {
  return (
    <section className="common">
      <div className="commonContainer">
        <img src={imgsrc} alt="ima" data-aos="fade-right" />
        <div data-aos="fade-up">
          <h4>{heading}</h4>
          <p>{para}</p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Common;
