import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import cn from "classnames";

//   const Layout: React.FC<Props> = ({ title, children }) => {

type Props<T extends ElementType> = {
  children: ReactNode;
  renderAs?: T;
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  type: "submit" | "button";
  className?: string;

  pill?: boolean;
  variant: "primary" | "secondary" | "danger";
  size: "small" | "normal" | "large";
} & ComponentPropsWithoutRef<T>;

const classes = {
  base: "focus:outline-none rounded-xl flex items-center justify-center rounded-lg transition ease-in-out duration-300",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2 text-normal",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button: React.FC = <T extends ElementType = "button">({
  children,
  renderAs,
  type = "button",
  className,
  variant = "primary",
  size = "normal",
  pill,
  disabled = false,
  ...props
}: Props<T>) => {
  return (
    <button
      as={renderAs}
      disabled={disabled}
      className={cn(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        pill && classes.pill,
        disabled && classes.disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
