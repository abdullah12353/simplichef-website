import React from "react";
import { Helmet } from 'react-helmet-async';
import Container from "../components/layout/Container";
import FounderStory from "../components/about/FounderStory";
import Mission from "../components/about/Mission";

const AboutPage = () => {
  const pageUrl = "https://www.simplichef.com/about"; // Replace with actual domain later
  const pageTitle = "About SimpliChef | Our Mission & Story";
  const pageDescription = "Learn about SimpliChef's mission to make cooking accessible, enjoyable, and empowering for everyone, especially young adults.";
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
      {/* Use base-white for the main page container */}
      <div className="pt-32 pb-16 bg-base-white">
        {/* Use light-gray for the introductory section */}
        <section className="py-12 bg-light-gray">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              {/* Apply heading font and color */}
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-teal mb-4">About Us</h1>
              {/* Apply body font and color */}
              <p className="text-xl font-body text-charcoal">
                We're on a mission to make cooking accessible, enjoyable, and
                empowering for everyone.
              </p>
            </div>
          </Container>
        </section>

        <FounderStory />
        <Mission />
      </div>
    </>
  );
};

export default AboutPage;
