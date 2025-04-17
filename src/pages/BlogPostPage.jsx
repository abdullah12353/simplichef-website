// src/pages/BlogPostPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'; // Import Helmet
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
      // Optionally navigate to a 404 page or back to the blog
      // navigate('/404'); or navigate('/blog');
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
    // ... (Post not found JSX - consider adding Helmet here too for 404)
    return (
      <div className="pt-32 pb-16 text-center bg-base-white">
        <Helmet>
           <title>Post Not Found | SimpliChef Blog</title>
           <meta name="description" content="Sorry, the blog post you were looking for could not be found." />
        </Helmet>
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

  const pageUrl = `https://www.simplichef.com/blog/${post.slug}`; // Replace with actual domain
  const pageTitle = `${post.title} | SimpliChef Blog`;
  // Use excerpt for description, ensure it's under 160 chars or truncate
  const pageDescription = post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + '...' : post.excerpt;
  // Construct absolute image URL if post.image is relative
  const imageUrl = post.image.startsWith('http') ? post.image : `https://www.simplichef.com${post.image}`; // Adjust base URL as needed

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        {/* Add author tag if available: <meta property="article:author" content="Author Name" /> */}
        {/* Add tags if available: post.tags.map(tag => <meta property="article:tag" content={tag} key={tag} />) */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        {/* Add Twitter site/creator if available: <meta name="twitter:site" content="@SimpliChefApp" /> */}
      </Helmet>
      {/* Apply page background */}
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
                  alt={post.imageAlt || post.title} // Use specific alt text, fallback to title
                  className="w-full h-auto max-h-96 object-cover"
                  loading="lazy" // Add lazy loading
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
    </>
  );
};

export default BlogPostPage;
