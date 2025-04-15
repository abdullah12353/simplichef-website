import React, { useState } from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import AnimatedSection from "../ui/AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "College Student",
      image: "/assets/images/testimonial-1.jpg",
      quote:
        "SimpliChef helped me stop wasting money on takeout. I've saved over $200 a month and actually enjoy cooking now!",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Young Professional",
      image: "/assets/images/testimonial-2.jpg",
      quote:
        "I went from burning pasta to confidently hosting dinner parties. The step-by-step approach made all the difference.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Graduate Student",
      image: "/assets/images/testimonial-3.jpg",
      quote:
        "The app's structured learning path is perfect. I'm eating healthier, spending less, and actually having fun in the kitchen.",
    },
  ];

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
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="font-semibold text-lg">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-500">
                {testimonials[activeTestimonial].role}
              </div>
            </Card>
          </AnimatedSection>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
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
