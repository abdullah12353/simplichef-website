import React from "react";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";
import heroBg from '../../assets/images/hero-bg.png'; // Import the image
import background from '../../assets/images/background.png'; // Import the image

const Hero = () => {
  return (
    <AnimatedSection animationType="fade-in-up">
      <div className="relative bg-gradient-to-r from-primary-50 via-white to-secondary-50 pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <img
          src={background} // Use imported image
          //alt="Background kitchen scene"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center">
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
                src={heroBg} // Use imported image
                alt="SimpliChef App"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
