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
      // Handle post not found (optional: redirect to a 404 page)
      console.error("Post not found for slug:", slug);
      // Optionally navigate to a 404 page or back to the blog index
      // navigate('/404'); or navigate('/blog');
    }
    setLoading(false);
  }, [slug, navigate]); // Rerun effect if slug changes

  if (loading) {
    return (
      <div className="pt-32 pb-16 text-center">
        <Container>Loading post...</Container>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <Container>
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">
            Sorry, we couldn't find the post you were looking for.
          </p>
          <Link
            to="/blog"
            className="text-primary-500 hover:text-primary-600 font-medium"
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
    <div className="pt-32 pb-16">
      <Container className="max-w-4xl mx-auto">
        <article>
          {/* Post Header */}
          <header className="mb-8 border-b pb-6">
            <div className="mb-4">
              <Link
                to="/blog"
                className="text-sm text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="text-gray-500 text-sm">
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

          {/* Post Content - Rendered using ReactMarkdown */}
          {/* Add the 'prose' classes for Tailwind Typography styling */}
          <div className="prose prose-lg max-w-none prose-indigo prose-a:text-primary-500 hover:prose-a:text-primary-600">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default BlogPostPage;
