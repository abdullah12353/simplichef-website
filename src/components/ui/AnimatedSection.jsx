import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
  children,
  animation = "fade-in",
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity duration-700",
    "slide-up": "opacity-0 translate-y-10 transition-all duration-700",
    "slide-in-right": "opacity-0 translate-x-10 transition-all duration-700",
  };

  return (
    <div
      ref={sectionRef}
      className={`${animationClasses[animation]} ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
