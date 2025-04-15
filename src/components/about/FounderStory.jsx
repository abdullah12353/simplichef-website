import React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import founderImg from '../../assets/images/founder.png'; // Import the image

const FounderStory = () => {
  return (
    <section className="section bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <AnimatedSection
          animation="slide-in-right"
          className="md:w-1/2 order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Founder's Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Hi, I'm Mohammed Abdullah — I created SimpliChef out of personal
              frustration seeing fellow students constantly relying on
              overpriced takeaways. Encouraging them to cook not only helped
              them eat better and save money, it gave them confidence and
              control over their lifestyle.
            </p>
            <p>
              I believe everybody should feel empowered to make food that's
              cheap, quick, and tasty. SimpliChef is here to help you start
              from zero and build real skills — one meal at a time.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-in"
          className="md:w-1/2 order-1 md:order-2"
        >
          <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img
              src={founderImg} // Use imported image
              alt="Founder Name"
              className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FounderStory;
