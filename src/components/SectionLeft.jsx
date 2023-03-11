import React from "react";

function SectionLeft({ sectag, background, title, paragraph, image, sectagcolor }) {
  return (
    <div className="sectionbody">
      <div
        className="section__left"
        style={{ backgroundColor: `${background}` }}
      >
        <div className="section__left-body">
          <div className="section__left-tag" style={{ backgroundColor: `${sectagcolor}`}}>
            <h6>{sectag}</h6>
          </div>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SectionLeft;
