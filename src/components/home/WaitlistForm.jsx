import React, { useState } from "react";
import Container from "../layout/Container";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !name.trim()) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    console.log("Submitted:", { name, email });
    setSubmitted(true);
    setError("");
    setName("");
    setEmail("");
  };

  return (
    <section id="waitlist" className="section bg-light-gray">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-teal mb-4">Join Our Waitlist</h2>
            <p className="font-body text-lg text-charcoal max-w-2xl mx-auto">
              Be among the first to experience SimpliChef when we launch. We'll
              notify you as soon as the app is available.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto" shadow="lg">
            {submitted ? (
              <div className="text-center py-8 px-6">
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
                  You're on the list!
                </h3>
                <p className="font-body text-charcoal mb-6">
                  Thanks for joining our waitlist. We'll notify you when
                  SimpliChef is ready to launch.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="secondary"
                >
                  Sign up another email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6">
                {error && (
                  <div className="mb-4 p-3 bg-alert-red/10 text-alert-red rounded-md font-body">
                    {error}
                  </div>
                )}
                <Input
                  label="Your Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
                <div className="mt-6">
                  <Button type="submit" className="w-full" size="lg" variant="primary">
                    Join Waitlist
                  </Button>
                </div>
                <p className="font-body text-xs text-fog-gray mt-4 text-center">
                  By signing up, you agree to our{" "}
                  <button type="button" className="font-heading font-medium text-mint-green hover:text-deep-teal underline">
                    Privacy Policy
                  </button>{" "}
                  and{" "}
                  <button type="button" className="font-heading font-medium text-mint-green hover:text-deep-teal underline">
                    Terms of Service
                  </button>
                  .
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default WaitlistForm;
