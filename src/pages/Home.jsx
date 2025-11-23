import React from "react";
import Slider from "../components/Slider";
import Popular from "../components/Popular";
import MeetOurVets from "../components/MeetOurVets";
import WinterCareTips from "../components/WinterCareTips";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider />
      <Popular />
      <MeetOurVets />
      <WinterCareTips />
    </div>
  );
};

export default Home;
