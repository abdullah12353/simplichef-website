import React from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import AnimatedSection from "../ui/AnimatedSection";

const Mission = () => {
  const values = [
    {
      title: "Accessibility",
      description:
        "Making cooking skills accessible to everyone, regardless of background or experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Use accent color
          className="h-10 w-10 text-mint-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Empowerment",
      description:
        "Building confidence through practical skills that extend beyond the kitchen.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Use accent color
          className="h-10 w-10 text-deep-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
    {
      title: "Community",
      description:
        "Fostering a supportive environment where users can learn from and inspire each other.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Use accent color
          className="h-10 w-10 text-sunrise-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description:
        "Promoting cooking practices that are good for both personal finances and the planet.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Use accent color
          className="h-10 w-10 text-berry-purple" // Changed from green-500
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    // Use light-gray for this section
    <section className="section bg-light-gray">
      <Container>
        <div className="text-center mb-16">
          {/* Apply heading font, weight, and color */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-teal mb-4">Our Mission & Values</h2>
          {/* Apply body font and color */}
          <p className="font-body text-lg text-charcoal max-w-3xl mx-auto">
            At SimpliChef, we're on a mission to transform the way people
            approach cooking, making it accessible, enjoyable, and empowering
            for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              threshold={0.1}
              className="h-full"
            >
              <Card className="h-full p-6 flex items-start" hover={true}>
                <div className="mr-4 mt-1 flex-shrink-0">{value.icon}</div> {/* Added flex-shrink-0 */}
                <div>
                  {/* Apply heading font and color */}
                  <h3 className="text-xl font-heading font-semibold text-deep-teal mb-2">{value.title}</h3>
                  {/* Apply body font and color */}
                  <p className="font-body text-charcoal">{value.description}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mission;
