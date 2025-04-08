import { InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className = "", ...props }: InputProps) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input__label">{label}</label>}
      <input className={`input ${error ? "input--error" : ""}`} {...props} />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
