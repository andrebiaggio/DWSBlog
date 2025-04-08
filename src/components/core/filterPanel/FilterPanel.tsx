import "./styles.scss";
import { Option } from "../dropdownButton/DropdownButton";

interface FilterPanelProps {
  title: string;
  options: Option[];
  selectedIds: string[];
  onChange: (selectedIds: string[]) => void;
}

const FilterPanel = ({
  title,
  options,
  selectedIds,
  onChange,
}: FilterPanelProps) => {
  const handleOptionClick = (optionId: string) => {
    const newSelectedIds = selectedIds.includes(optionId)
      ? selectedIds.filter((id) => id !== optionId)
      : [...selectedIds, optionId];

    onChange(newSelectedIds);
  };

  return (
    <div className="filter-panel">
      <div className="filter-panel__title">{title}</div>
      <div className="filter-panel__options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`filter-panel__option ${
              selectedIds.includes(option.id)
                ? "filter-panel__option--selected"
                : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
