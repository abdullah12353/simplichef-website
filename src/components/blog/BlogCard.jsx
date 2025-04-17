import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

const BlogCard = ({ post }) => {
  // Determine category tag style
  const categoryStyle = post.category === "Recipes" 
    ? "bg-deep-teal text-white" 
    : "bg-berry-purple text-white"; // Example: Use berry-purple for other categories

  return (
    <Card className="h-full flex flex-col" hover={true} rounded="xl">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 mb-4 overflow-hidden rounded-t-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Apply dynamic category tag style */}
          <div className={`absolute top-0 right-0 text-xs font-heading font-medium px-2 py-1 m-2 rounded ${categoryStyle}`}>
            {post.category}
          </div>
        </div>
      </Link>
      <div className="flex-grow p-5 pt-0">
        {/* Apply metadata font and color */}
        <div className="font-body text-fog-gray text-sm mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        {/* Apply heading font, color, and hover */}
        <h3 className="text-xl font-heading font-semibold mb-2 transition-colors">
          <Link
            to={`/blog/${post.slug}`}
            className="text-deep-teal hover:text-mint-green"
          >
            {post.title}
          </Link>
        </h3>
        {/* Apply body font and color */}
        <p className="font-body text-charcoal mb-4">{post.excerpt}</p>
        {/* Apply link font, color, and hover */}
        <Link
          to={`/blog/${post.slug}`}
          className="font-heading font-medium text-mint-green hover:text-deep-teal transition-colors inline-flex items-center"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
