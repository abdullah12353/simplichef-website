import React from "react";
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import SkillJourney from "../components/home/SkillJourney";
import Testimonials from "../components/home/Testimonials";
import WaitlistForm from "../components/home/WaitlistForm";

const HomePage = () => {
  return (
    <div className="pt-32 pb-16"> {/* Added wrapper and increased top padding */}
      <Hero />
      <Benefits />
      <SkillJourney />
      <Testimonials />
      <WaitlistForm />
    </div>
  );
};

export default HomePage;
