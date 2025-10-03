import React from "react";
import "./style.scss";

const Button = ({
  content = "Click",
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const getButtonClasses = () => {
    let classes = "btn-grad";

    // Size variants
    switch (size) {
      case "sm":
        classes += " btn-sm";
        break;
      case "lg":
        classes += " btn-lg";
        break;
      default:
        classes += " btn-md";
    }

    // Variant styles
    switch (variant) {
      case "secondary":
        classes += " btn-secondary";
        break;
      case "outline":
        classes += " btn-outline";
        break;
      default:
        classes += " btn-primary";
    }

    if (disabled) {
      classes += " btn-disabled";
    }

    return `${classes} ${className}`.trim();
  };

  return (
    <button
      type={type}
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
