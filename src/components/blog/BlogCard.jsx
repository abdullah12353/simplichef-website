import React from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

const BlogCard = ({ post }) => {
  return (
    <Card className="h-full flex flex-col" hover={true}>
      {/* Link the image to the post page */}
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 mb-4 overflow-hidden rounded-t-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
            {post.category}
          </div>
        </div>
      </Link>
      <div className="flex-grow p-5 pt-0">
        <div className="text-gray-500 text-sm mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        {/* Link the title to the post page */}
        <h3 className="text-xl font-bold mb-2 transition-colors">
          <Link
            to={`/blog/${post.slug}`} // <-- Use the dynamic slug here
            className="hover:text-primary-500"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        {/* Link the "Read More" to the post page */}
        <Link
          to={`/blog/${post.slug}`} // <-- Use the dynamic slug here
          className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
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
