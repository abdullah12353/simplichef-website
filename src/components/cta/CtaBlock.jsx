import React from "react";
import Button from "../ui/Button"; // Adjust path if needed

const CtaBlock = () => {
  const tallyFormUrl = "https://tally.so/r/wdRVgo"; // Correct Tally form link

  return (
    // Outer section wrapper - Use Light Gray for contrast if page bg is Base White
    <section className="py-16 md:py-20 bg-light-gray"> {/* Use brand color */}
      {/* Container respecting site padding */}
      <div className="container-custom">
        {/* Inner content block - Use Base White background */}
        <div className="bg-base-white max-w-2xl mx-auto px-8 py-10 md:px-10 md:py-12 rounded-xl shadow-md text-center"> {/* Increased padding */}

          {/* Headline - Use Montserrat (font-heading) and Deep Teal */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-deep-teal"> {/* Increased size & brand color */}
            🧑‍🍳 Be Among the First 100 Testers
          </h2>

          {/* Subtext - Use Nunito (font-body) and Charcoal */}
          <p className="font-body text-lg text-charcoal mb-8"> {/* Brand colors */}
            Join the SimpliChef beta and help shape the future of AI cooking.
            <br className="hidden sm:block" />
            Get early access, share feedback, and unlock exclusive perks.
          </p>

          {/* Button - Use Sunrise Orange for emphasis */}
          <Button
            href={tallyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent" // Use the accent variant
            size="lg"
            // Removed direct className styling for background, hover, font, padding, radius
          >
            🔥 Join the Beta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
