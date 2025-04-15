import React from "react";
import BlogCard from "./BlogCard";
import AnimatedSection from "../ui/AnimatedSection";

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <AnimatedSection
          key={post.id}
          animation="slide-up"
          threshold={0.1}
          className="h-full"
        >
          <BlogCard post={post} />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default BlogGrid;
