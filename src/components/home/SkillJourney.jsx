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
      color: "bg-primary-500",
    },
    {
      number: "02",
      title: "Follow Simple Recipes",
      description:
        "Start with quick, easy recipes designed for beginners with step-by-step guidance.",
      color: "bg-secondary-500",
    },
    {
      number: "03",
      title: "Build Your Skills",
      description:
        "Progress to more complex techniques and recipes as you gain confidence and experience.",
      color: "bg-accent-500",
    },
    {
      number: "04",
      title: "Create Your Own",
      description:
        "Learn to improvise and create your own recipes based on what you've learned.",
      color: "bg-primary-600",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">Your Cooking Journey</h2>
          <p className="section-subtitle">
            SimpliChef guides you through a structured learning path that builds
            skills progressively, making cooking approachable and enjoyable.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>

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
                      : "md:flex-row-reverse text-right"
                  } items-center`}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center text-xl font-bold mb-4 md:mb-0`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`md:w-5/12 ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
