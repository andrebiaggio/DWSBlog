import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "outline";
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  color?: "primary" | "secondary" | "accent";
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  width = "auto",
  height = "auto",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button button--${variant} button--${size} button--color--${color} ${className}`}
      style={{ width, height }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
