import React from "react";
import cardImg from "../assets/img/cardImg.png"
import "../assets/styles/styles.css"

function Testimonials() {

    return (
        <div className="tstscnt">
            <div className="con1"></div>
            <div className="testimonsybody">
                <div className="tstbodycnt">
                    <div className="tnttopcnt">
                        <h1> Here’s how Mmekut is helping Organizations and individuals scale across the globe</h1>
                    </div>
                    <div className="tntbuttomcnt">
                        <div className="testimonialCard">
                            <div className="card">
                                <div className="cardtop">
                                    <div className="cardlogoCnt">
                                        <img src={cardImg} alt="card" />
                                    </div>
                                    <div>
                                        <p className="cardLogotxt">"My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience"</p>
                                    </div>
                                </div>
                                <div className="cardbuttom">
                                    <p className="cardbuttomP1">Samata kate</p>
                                    <p className="cardbuttomP2">Ceo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Testimonials;