import React from "react";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import SectionLeft from "../components/SectionLeft";
import SectionOne from "../components/SectionOne";
import SectionRight from "../components/SectionRight";
import calendarpng from "../assets/img/calendarimg.png";
import reminderpng from "../assets/img/reminderimg.png";
import communicationpng from "../assets/img/communication.png";
import trackpng from "../assets/img/track.png";
import SectionSyn from "../components/SectionSyn";

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
        sectagcolor="#0184fb"
      />
      <SectionRight
        sectag="Calendar"
        image={calendarpng}
        title="Flexible Calendar views"
        paragraph="With Calendar views, you can check and handle your schedules in a more convenient way."
        background="rgba(255, 68, 255, 0.05)"
        sectagcolor="#ef01f5"
      />

      <SectionLeft
        sectag="Communication"
        image={communicationpng}
        title="Bring everyone together"
        paragraph="Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for actions items, share screens and link tasks to get more work done together. Our video and audio call features for team communication aids productivity. Stay productive together!"
        background="rgba(78, 73, 223, 0.05)"
        sectagcolor="#4E49DF"
      />

      <SectionRight
        sectag="Track"
        image={trackpng}
        title="Follow up on your productivity"
        paragraph="You can follow up your productivity, and project planning easier while saving time on the unnecessary recreation of tasks."
        background="rgba(39, 174, 96, 0.05)"
        sectagcolor="#27AE60"
      />

      <SectionSyn />
    </>
  );
}

export default Homepage;
