import React, { useState } from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import AnimatedSection from "../ui/AnimatedSection";
import testimonial1 from '../../assets/images/testimonial-1.jpg'; // Import image 1
import testimonial2 from '../../assets/images/testimonial-2.jpg'; // Import image 2
import testimonial3 from '../../assets/images/testimonial-3.jpg'; // Import image 3

const testimonialsData = [
  {
    id: 1,
    name: "Sarah L.",
    title: "Busy Mom",
    quote:
      "SimpliChef has been a lifesaver! I used to stress about dinner every night, but now I can whip up healthy meals my family loves in under 30 minutes.",
    image: testimonial1, // Use imported image 1
  },
  {
    id: 2,
    name: "Michael C.",
    title: "College Student",
    quote:
      "I barely knew how to boil water before SimpliChef. Now I'm impressing my roommates with delicious, budget-friendly meals. It's surprisingly easy!",
    image: testimonial2, // Use imported image 2
  },
  {
    id: 3,
    name: "Jessica R.",
    title: "Young Professional",
    quote:
      "After long work days, the last thing I wanted was a complicated recipe. SimpliChef's simple instructions and quick meals are perfect for my lifestyle.",
    image: testimonial3, // Use imported image 3
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Hear from people who have transformed their relationship with
            cooking through SimpliChef.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <Card
              className="text-center px-6 py-10"
              shadow="lg"
              rounded="lg"
            >
              <div className="mb-6">
                <img
                  src={testimonialsData[activeTestimonial].image}
                  alt={testimonialsData[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "{testimonialsData[activeTestimonial].quote}"
              </blockquote>
              <div className="font-semibold text-lg">
                {testimonialsData[activeTestimonial].name}
              </div>
              <div className="text-gray-500">
                {testimonialsData[activeTestimonial].title}
              </div>
            </Card>
          </AnimatedSection>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index
                    ? "bg-primary-500"
                    : "bg-gray-300 hover:bg-gray-400"
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
