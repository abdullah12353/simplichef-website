// src/pages/BlogPostPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import blogPosts from "../data/blogPosts"; // Import your blog data
import ReactMarkdown from "react-markdown"; // Import markdown renderer

// Optional: Add Tailwind Typography for nice Markdown styling
// Install: npm install -D @tailwindcss/typography
// Add to tailwind.config.js plugins: [require('@tailwindcss/typography')]

const BlogPostPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post that matches the slug
    const foundPost = blogPosts.find((p) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      console.error("Post not found for slug:", slug);
    }
    setLoading(false);
  }, [slug, navigate]); // Rerun effect if slug changes

  if (loading) {
    return (
      // Apply page background
      <div className="pt-32 pb-16 text-center bg-base-white font-body"> {/* Added font-body */}
        <Container>Loading post...</Container>
      </div>
    );
  }

  if (!post) {
    return (
      // Apply page background
      <div className="pt-32 pb-16 text-center bg-base-white">
        <Container>
          {/* Apply heading font and color */}
          <h1 className="text-3xl font-heading font-bold text-deep-teal mb-4">Post Not Found</h1>
          {/* Apply body font and color */}
          <p className="font-body text-charcoal mb-6"> {/* Added font-body */}
            Sorry, we couldn't find the post you were looking for.
          </p>
          {/* Apply link font and color */}
          <Link
            to="/blog"
            className="font-heading font-medium text-mint-green hover:text-deep-teal" /* Changed to font-heading font-medium */
          >
            &larr; Back to Blog
          </Link>
        </Container>
      </div>
    );
  }

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    // Apply page background
    <div className="pt-32 pb-16 bg-base-white">
      <Container className="max-w-4xl mx-auto">
        <article>
          {/* Post Header */}
          <header className="mb-8 border-b border-light-gray pb-6"> {/* Use light-gray for border */}
            <div className="mb-4">
              {/* Apply link font and color */}
              <Link
                to="/blog"
                className="text-sm font-heading font-medium text-mint-green hover:text-deep-teal inline-flex items-center" /* Changed to font-heading font-medium */
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>
            </div>
            {/* Apply heading font and color */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-teal mb-3 leading-tight">
              {post.title}
            </h1>
            {/* Apply metadata font and color */}
            <div className="font-body text-fog-gray text-sm">
              <span>Published on {formattedDate}</span>
              <span className="mx-2">&bull;</span>
              <span>Category: {post.category}</span>
            </div>
          </header>

          {/* Optional: Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          )}

          {/* Post Content - Apply prose styles via tailwind.config.js */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default BlogPostPage;
