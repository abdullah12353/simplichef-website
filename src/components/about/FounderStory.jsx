import React from "react";
import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";

const FounderStory = () => {
  return (
    <section className="section bg-white">
      <Container>
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
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/images/founder.png"
                  alt="Mohammed Abdullah, Founder of SimpliChef"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-100 rounded-full -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default FounderStory;
