import React, { useState } from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import AnimatedSection from "../ui/AnimatedSection";
import testimonial1 from '../../assets/images/testimonial-1.jpg';
import testimonial2 from '../../assets/images/testimonial-2.jpg';
import testimonial3 from '../../assets/images/testimonial-3.jpg';

const testimonialsData = [
  {
    id: 1,
    name: "Sarah L.",
    title: "Busy Mom",
    quote:
      "SimpliChef has been a lifesaver! I used to stress about dinner every night, but now I can whip up healthy meals my family loves in under 30 minutes.",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Michael C.",
    title: "College Student",
    quote:
      "I barely knew how to boil water before SimpliChef. Now I'm impressing my roommates with delicious, budget-friendly meals. It's surprisingly easy!",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Jessica R.",
    title: "Young Professional",
    quote:
      "After long work days, the last thing I wanted was a complicated recipe. SimpliChef's simple instructions and quick meals are perfect for my lifestyle.",
    image: testimonial3,
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section bg-base-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-teal mb-4">What Our Users Say</h2>
          <p className="font-body text-lg text-charcoal max-w-3xl mx-auto">
            Hear from people who have transformed their relationship with
            cooking through SimpliChef.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <Card
              className="text-center px-6 py-10"
              shadow="lg"
              rounded="xl"
            >
              <div className="mb-6">
                <img
                  src={testimonialsData[activeTestimonial].image}
                  alt={testimonialsData[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-mint-green"
                />
              </div>
              <blockquote className="text-xl italic font-body text-charcoal mb-6">
                "{testimonialsData[activeTestimonial].quote}"
              </blockquote>
              <div className="font-heading font-semibold text-deep-teal text-lg">
                {testimonialsData[activeTestimonial].name}
              </div>
              <div className="font-body text-fog-gray">
                {testimonialsData[activeTestimonial].title}
              </div>
            </Card>
          </AnimatedSection>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors font-heading ${
                  activeTestimonial === index
                    ? "bg-deep-teal"
                    : "bg-fog-gray hover:bg-charcoal"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
