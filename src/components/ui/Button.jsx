import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary", // Default to primary
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-heading font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"; // Added font-heading

  // Updated variants based on Brand Guidelines
  const variantClasses = {
    primary:
      "bg-mint-green text-white font-semibold hover:bg-[#2BC4A2] focus:ring-mint-green", // Removed font-heading (now in base)
    secondary: // Outline
      "border border-deep-teal text-deep-teal font-semibold hover:bg-deep-teal/10 focus:ring-deep-teal", // Removed font-heading (now in base)
    accent:
      "bg-sunrise-orange text-white font-semibold hover:opacity-90 focus:ring-sunrise-orange", // Removed font-heading (now in base)
    tertiary: // Text/Ghost
      "text-deep-teal font-medium hover:text-mint-green focus:ring-mint-green", // Removed font-heading (now in base)
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  // Updated disabled state
  const disabledClasses = disabled
    ? "bg-fog-gray text-white opacity-70 cursor-not-allowed"
    : ""; // Removed cursor-pointer, handled by non-disabled state

  // Combine classes, ensuring disabled overrides variant styles if needed
  const classes = `${baseClasses} ${!disabled ? variantClasses[variant] : ''} ${sizeClasses[size]} ${disabled ? disabledClasses : 'cursor-pointer'} ${className}`;

  if (href) {
    // If href starts with http or https, use a regular anchor tag
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    
    // If href starts with #, use a regular anchor tag for in-page navigation
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }
    
    // Otherwise use Link for internal navigation
    return (
      <Link to={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
