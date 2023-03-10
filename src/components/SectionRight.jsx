import React from "react";

function SectionRight({ sectag, background, title, paragraph, image }) {
  return (
    <div className="sectionbody">
      <div
        className="section__right"
        style={{ backgroundColor: `${background}` }}
      >
        <img src={image} alt="" />
        <div className="section__right-body">
          <div className="section__right-tag">
            <h6>{sectag}</h6>
          </div>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionRight;
