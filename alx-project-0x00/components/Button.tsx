import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const classes =
        size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-md"
      : size === "large"
      ? "px-5 py-3 text-lg"
        : "px-4 py-2 text-md"; // default to medium if size is not provided
  return (
    <div>
      <button
        className={`${classes} ${shape} ${styles} bg-blue-500 text-white hover:bg-blue-700`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;