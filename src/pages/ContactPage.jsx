import React from "react";
import Container from "../components/layout/Container";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    // Use base-white for the main page container
    <div className="pt-32 pb-16 bg-base-white">
      {/* Use light-gray for the introductory section */}
      <section className="py-12 bg-light-gray">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            {/* Apply heading font and color */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-teal mb-4">Contact Us</h1>
            {/* Apply body font and color */}
            <p className="text-xl font-body text-charcoal">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
