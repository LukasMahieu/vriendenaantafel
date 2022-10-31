import React from 'react';

const sizes = {
  default: `py-3 px-12`,
  lg: `py-4 px-14`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-vat-button
        hover:bg-vat-button_hover
        rounded-xl
        text-vat-button_text
        font-bold
        border-1
    `}
    >
      {children}
    </button>
  );
};

export default Button;
