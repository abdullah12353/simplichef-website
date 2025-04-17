import React, { useState } from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    console.log("Submitted:", formData);
    setSubmitted(true);
    setError("");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="section bg-base-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-teal mb-4">Get in Touch</h2>
            <p className="font-body text-lg text-charcoal max-w-3xl mx-auto">
              Have questions or feedback about SimpliChef? We'd love to hear
              from you. Fill out the form below and we'll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <AnimatedSection
              animation="slide-in-right"
              className="md:w-1/3"
            >
              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-deep-teal mb-4">Contact Information</h3>
                <div className="space-y-4 font-body">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-mint-green mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium text-charcoal">Email</div>
                      <a
                        href="mailto:hello@simplichef.com"
                        className="font-heading font-medium text-mint-green hover:text-deep-teal underline"
                      >
                        hello@simplichef.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-mint-green mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium text-charcoal">Location</div>
                      <div className="text-charcoal">
                        Coventry, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-deep-teal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                      href="https://www.linkedin.com/company/simplichef/" // <-- Correct LinkedIn URL
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="SimpliChef LinkedIn Profile" // Accessibility: Add aria-label
                      className="text-fog-gray hover:text-mint-green transition-colors duration-200" // Use brand colors (matching footer style)
                  >
                      {/* LinkedIn SVG Icon */}
                      <svg
                          className="h-20 w-20" // Adjust size if needed (increased from h-6 w-6)
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                      >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" className="md:w-2/3">
              <Card shadow="lg">
                {submitted ? (
                  <div className="text-center py-12 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-success-green mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-heading font-bold text-deep-teal mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-body text-charcoal mb-6">
                      Thank you for reaching out. We'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6">
                    {error && (
                      <div className="mb-4 p-3 bg-alert-red/10 text-alert-red rounded-md font-body">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Input
                        label="Your Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <Input
                      label="Subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-heading font-semibold text-charcoal mb-1"
                      >
                        Message<span className="text-alert-red ml-1">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        className="w-full px-4 py-2 border rounded-lg font-body 
                                   bg-base-white text-charcoal placeholder-fog-gray 
                                   focus:border-mint-green focus:ring-1 focus:ring-mint-green 
                                   border-fog-gray"
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <Button type="submit" className="w-full" size="lg" variant="primary">
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
