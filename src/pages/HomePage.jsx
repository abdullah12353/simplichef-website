import React from "react";
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import SkillJourney from "../components/home/SkillJourney";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <SkillJourney />
      <Testimonials />
    </div>
  );
};

export default HomePage;
