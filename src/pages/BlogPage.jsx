import React from "react";
import Container from "../components/layout/Container";
import BlogGrid from "../components/blog/BlogGrid";
import blogPosts from "../data/blogPosts";

const BlogPage = () => {
  return (
    <div className="pt-32 pb-16">
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cooking for Confidence
            </h1>
            <p className="text-xl text-gray-600">
              Tips, tricks, and inspiration to help you build cooking skills and
              confidence in the kitchen.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
