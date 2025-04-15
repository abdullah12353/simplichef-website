import React from "react";

const Card = ({
  children,
  className = "",
  hover = false,
  shadow = "md",
  padding = "md",
  rounded = "md",
}) => {
  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-7",
    xl: "p-9",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const hoverClasses = hover
    ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={`bg-white ${shadowClasses[shadow]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
