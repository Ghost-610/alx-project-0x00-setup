// components/Button.tsx
import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  styles = "",
  size = "medium",
  shape = "rounded-md",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  // Size configurations using Tailwind CSS
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm font-medium min-h-[32px]",
    medium: "px-4 py-2 text-base font-medium min-h-[40px]",
    large: "px-6 py-3 text-lg font-semibold min-h-[48px]",
  };

  // Shape configurations using Tailwind CSS
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md", 
    "rounded-full": "rounded-full",
  };
  // Ensure 'styles' prop is handled as a string for custom Tailwind classes
  // Base Tailwind CSS classes
  const baseClasses = `
    inline-flex items-center justify-center
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    hover:shadow-md active:scale-95
    border font-medium
    select-none
  `;

  // Default styling if no custom styles provided
  const defaultStyles = `
    bg-blue-600 text-white border-blue-600
    hover:bg-blue-700 hover:border-blue-700
    focus:ring-blue-500
    active:bg-blue-800
  `;

  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${styles || defaultStyles}
    ${className}
  `.replace(/\s+/g, " ").trim();

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default Button;