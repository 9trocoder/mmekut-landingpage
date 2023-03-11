import React, { useEffect, useState } from "react";
import arrowup from "../assets/svg/testarrowup.svg";
import arrowdowncolorless from "../assets/svg/testarrowdown.svg";
import arrowdowncolor from "../assets/svg/testarrowdowncolored.svg";
import arrowupcolorless from "../assets/svg/testarrowupnot.svg";

function Testimonies() {
  let [incre, setIcre] = useState(1);
  let [dcre, setDcre] = useState(0);
  const [shownext, setshownext] = useState(true);
  const [showprev, setshowprev] = useState(false);

  const testimonylist = [
    {
      id: 1,
      words:
        "On Windows talking painted pasture yet its express parties use. Sure last upon the same as knew next. Of believed or diverted no.",
      name: "Mike taylor",
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      words:
        "it was great using this app and trust me it is as simple as it looks.",
      name: "John mkappe",
      location: "Ghana",
    },
    {
      id: 3,
      words: "My team use this app and it is really great",
      name: "Adeyemi Emmanuel",
      location: "Turkey",
    },
  ];

  useEffect(() => {
    if (incre === testimonylist.length) {
      setshownext(false);
    } else if (incre > testimonylist.length) {
      setshownext(false);
    }

    if (incre === 1) {
      setshowprev(false);
    }
  }, [incre, testimonylist.length]);

  const handleNext = () => {
    if (incre === testimonylist.length) {
      setshownext(false);
      setIcre(incre--);
    } else if (testimonylist.length > 1) {
      if (testimonylist.length > 1) {
        setshowprev(true);
      } else {
        setshowprev(false);
      }
    } else {
      setshownext(true);
    }

    setIcre((incre = incre + 1));
    setDcre((dcre = dcre + 1));
  };

  const handlePrevious = () => {
    setIcre((incre = incre - 1));
    setDcre((dcre = dcre - 1));
    setshownext(true);
  };

  return (
    <div className="tstcnt">
      <div className="testimonybody">
        <div className="testimonyright">
          <div className="tstrright">
            <div className="tsttag">
              <h6>Testimonial</h6>
            </div>
            <h2>What people say about us.</h2>
          </div>
          <div className="tstrleft">
            <div className="tstrleftleft">
              {shownext && (
                <div className="nexticon" onClick={() => handleNext()}>
                  <img className="cursor-pointer" src={arrowup} alt="" />
                </div>
              )}
              {!shownext && (
                <div className="nexticon">
                  <img
                    className="cursor-pointer"
                    src={arrowupcolorless}
                    alt=""
                  />
                </div>
              )}
              {showprev && (
                <div className="previousicon" onClick={() => handlePrevious()}>
                  <img src={arrowdowncolor} alt="" />
                </div>
              )}
              {!showprev && (
                <div className="previousicon">
                  <img src={arrowdowncolorless} alt="" />
                </div>
              )}
            </div>
            {testimonylist.slice(dcre, incre).map((testimonies, key) => (
              <div key={key}>
                <p>"{testimonies.words}"</p>
                <h6>{testimonies.name}</h6>
                <p>{testimonies.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
