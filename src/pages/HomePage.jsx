import React from "react";
import { Helmet } from 'react-helmet-async';
import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import SkillJourney from "../components/home/SkillJourney";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  const pageUrl = "https://www.simplichef.com"; // Replace with actual domain later
  const pageTitle = "SimpliChef | Cook Smarter, Eat Better, Build Confidence";
  const pageDescription = "Learn to cook smarter with SimpliChef! Our app helps young adults save money, eat healthier, and gain kitchen confidence through interactive lessons. Join the waitlist!";
  const imageUrl = `${pageUrl}/logo512.png`; // Use a suitable image URL

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div>
        <Hero />
        <Benefits />
        <SkillJourney />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
