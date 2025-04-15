import React from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
            Cook Smarter, <br />
            <span className="text-primary-500">Eat Better</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            SimpliChef helps you build cooking skills, save money, and gain
            confidence in the kitchen—one meal at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#waitlist" size="lg">
              Join the Waitlist
            </Button>
            <Button href="#benefits" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/assets/images/hero-bg.jpg"
              alt="SimpliChef App"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-100 rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-100 rounded-full -z-10"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
