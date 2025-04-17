import React from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";

const tallyWaitlistUrl = "https://tally.so/r/wdRVgo?tally-source=hero"; // Source specific to hero

const Hero = () => {
  return (
    <section className="relative bg-base-white pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      {/* Brand color gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-green/10 via-base-white to-deep-teal/10"></div>

      <Container className="relative z-10 text-center">
        <AnimatedSection animationType="fadeUp" duration={600} delay={100}>
          {/* Apply heading font and color */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-deep-teal leading-tight">
            Cook Smarter, <br />
            {/* Use mint-green accent */}
            <span className="text-mint-green">Eat Better</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" duration={600} delay={300}>
          {/* Apply body font and color */}
          <p className="text-xl font-body text-charcoal mb-8 max-w-lg mx-auto">
            SimpliChef helps you build cooking skills, save money, and gain
            confidence in the kitchen—one meal at a time.
          </p>
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" duration={600} delay={500}>
          <div className="mt-8 flex justify-center">
            <Button
              href={tallyWaitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent" // Use Sunrise Orange for emphasis
              size="lg"
            >
              Join the Waitlist
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Hero;
