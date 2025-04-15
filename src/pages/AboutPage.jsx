import React from "react";
import Container from "../components/layout/Container";
import FounderStory from "../components/about/FounderStory";
import Mission from "../components/about/Mission";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make cooking accessible, enjoyable, and
              empowering for everyone.
            </p>
          </div>
        </Container>
      </section>

      <FounderStory />
      <Mission />
    </div>
  );
};

export default AboutPage;
