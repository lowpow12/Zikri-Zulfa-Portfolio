import React from "react";

const AosWrapper = ({ children, delay = 0, type = "fade-up" }) => {
  return (
    <div data-aos={type} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AosWrapper;