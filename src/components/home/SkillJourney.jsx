import React from "react";
import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";

const SkillJourney = () => {
  const steps = [
    {
      number: "01",
      title: "Learn the Basics",
      description:
        "Master fundamental techniques like chopping, sautéing, and measuring with interactive tutorials.",
      // Use brand colors
      color: "bg-mint-green",
    },
    {
      number: "02",
      title: "Follow Simple Recipes",
      description:
        "Start with quick, easy recipes designed for beginners with step-by-step guidance.",
      // Use brand colors
      color: "bg-deep-teal",
    },
    {
      number: "03",
      title: "Build Your Skills",
      description:
        "Progress to more complex techniques and recipes as you gain confidence and experience.",
      // Use brand colors
      color: "bg-sunrise-orange",
    },
    {
      number: "04",
      title: "Create Your Own",
      description:
        "Learn to improvise and create your own recipes based on what you've learned.",
      // Use brand colors
      color: "bg-berry-purple",
    },
  ];

  return (
    // Use light-gray for this section
    <section className="section bg-light-gray">
      <Container>
        <div className="text-center mb-16">
          {/* Apply heading font and color */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-teal mb-4">Your Cooking Journey</h2>
          {/* Apply body font and color */}
          <p className="font-body text-lg text-charcoal max-w-3xl mx-auto">
            SimpliChef guides you through a structured learning path that builds
            skills progressively, making cooking approachable and enjoyable.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Use light-gray */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-light-gray -translate-x-1/2 z-0"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "slide-in-right" : "slide-up"}
                threshold={0.2}
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse text-right md:text-left" // Ensure text aligns left on reverse rows for consistency
                  } items-center`}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center text-xl font-heading font-bold mb-4 md:mb-0`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`md:w-5/12 ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    {/* Apply heading font and color */}
                    <h3 className="text-xl font-heading font-semibold text-deep-teal mb-2">{step.title}</h3>
                    {/* Apply body font and color */}
                    <p className="font-body text-charcoal">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillJourney;
