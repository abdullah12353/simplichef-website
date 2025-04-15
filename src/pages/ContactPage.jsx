import React from "react";
import Container from "../components/layout/Container";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="pt-32 pb-16">
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
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
