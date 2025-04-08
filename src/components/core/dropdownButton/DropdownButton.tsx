import { useState } from "react";
import { Button } from "..";
import "./styles.scss";

export interface Option {
  id: string;
  name: string;
}

interface DropdownButtonProps {
  label: string;
  options: Option[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

const DropdownButton = ({
  label,
  options,
  selectedOptions,
  onChange,
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionId: string) => {
    const newSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];

    onChange(newSelectedOptions);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "dropdown--open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <div className="dropdown__icon-container">
          <img
            src={"/icons/arrow-down.svg"}
            alt="arrow-down"
            width={24}
            height={24}
          />
        </div>
      </Button>

      {isOpen && (
        <>
          <div className="dropdown__gap-cover" />
          <div className="dropdown__content">
            {options.map((option) => (
              <div
                key={option.id}
                className={`dropdown__option ${
                  selectedOptions.includes(option.id)
                    ? "dropdown__option--selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownButton;
