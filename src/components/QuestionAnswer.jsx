import React from "react";
import Accordion from "./Accordian";
import "../assets/styles/styles.css"


function Testimonials() {
    const accordionData = [
        {
            title: 'How long does it take to resolve an issue?',
            content: `It takes our customer support team, Three (3) working days to resolve any transaction issue. If the issue is not a serious one, resolving it can be done within a few hours after submission. If it takes more than Three (3) working days and your issue is yet to be resolved, please do well to`
        },
        {
            title: 'What makes this product stand out?',
            content: ``
        },
        {
            title: 'What makes this product stand out?',
            content: ``
        },
        {
            title: 'What makes this product stand out?',
            content: ``
        },
        {
            title: 'What makes this product stand out?',
            content: ``
        },
    ];
    return (
        <div className="qandanswerCnt">
            <div className="qandanswerbody">
                <div className="qandanswerbodycnt">

                    <div>
                        {/* Top */}
                        <h1>List of some questions & answers about us</h1>
                    </div>

                    <div>
                        {/* Accordian*/}
                        <div className="accordion">
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Get Started */}

                <div className="nnn">
                    <div className="getStartcnt">
                        <div className="getcntTop">
                            <h1>Get started today </h1>
                            <p>Join thousands of people to get started today to solve all your tasks management problem with Mmekut</p>
                        </div>

                        <div className="getcntBottom">
                            <button>Get Started</button>
                        </div>

                    </div>
                </div>
            </div>
            <hr className="linerule" />
        </div>
        
    );

}


export default Testimonials;