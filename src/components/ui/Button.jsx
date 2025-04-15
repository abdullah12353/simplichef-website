import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
    secondary:
      "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500",
    accent:
      "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
    outline:
      "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500",
    ghost:
      "bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

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
