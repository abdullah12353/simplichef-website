import React from "react";
import Container from "../components/layout/Container";
import BlogGrid from "../components/blog/BlogGrid";
import blogPosts from "../data/blogPosts";

const BlogPage = () => {
  return (
    // Use base-white for the main page container
    <div className="pt-32 pb-16 bg-base-white">
      {/* Use light-gray for the introductory section */}
      <section className="py-12 bg-light-gray">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            {/* Apply heading font and color */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-teal mb-4">
              Cooking for Confidence
            </h1>
            {/* Apply body font and color */}
            <p className="text-xl font-body text-charcoal">
              Tips, tricks, and inspiration to help you build cooking skills and
              confidence in the kitchen.
            </p>
          </div>
        </Container>
      </section>

      {/* Main blog grid section */}
      <section className="py-16">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
