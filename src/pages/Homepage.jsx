import React from "react";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import SectionLeft from "../components/SectionLeft";
import SectionOne from "../components/SectionOne";
import SectionRight from "../components/SectionRight";
import calendarpng from "../assets/img/calendarimg.png";
import reminderpng from "../assets/img/reminderimg.png";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Join />
      <SectionOne />
      <SectionLeft
        sectag="Reminder"
        title="Get reminded anytime, any where"
        image={reminderpng}
        paragraph="With mmekut notification, you can get reminders, communications and other timely information anytime, and anywhere."
        background="rgba(1, 132, 251, 0.05)"

      />
      <SectionRight
        sectag="Calendar"
        image={calendarpng}
        title="Flexible Calendar views"
        paragraph="With Calendar views, you can check and handle your schedules in a more convenient way."
        background="rgba(255, 68, 255, 0.05)"
      />
    </>
  );
}

export default Homepage;
