// Button.js

import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <a
      href="#"
      className={`group relative inline-flex  px-7 py-3.5 text-black font-roboto bg-teal-500 uppercase rounded-3xl overflow-hidden transition-colors duration-300 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gray-400 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
    </a>
  );
};

export default Button;