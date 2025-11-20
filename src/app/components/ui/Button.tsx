"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading = false,
  className,
  ...props
}) => {
  const baseStyles =
    "w-full px-4 py-3 rounded-lg font-semibold text-sm leading-5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#800020] text-white hover:bg-[#800020]/90",
    secondary:
      "bg-white text-[#374151] font-semibold text-sm leading-5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-[#D1D5DB] hover:bg-[#D1D5DB]/5",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
