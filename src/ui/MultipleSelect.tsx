import { type ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string | undefined;
  onChange: (selectedValues: string[]) => void;
  id: string;
}

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1.2rem;

  font-size: 1rem;
  border: 1px solid var(--color-alternative);
  border-radius: 25px;
  box-shadow: var(--shadow-md);
  background-color: var(--color-background);
  font-weight: 500;
  color: var(--color-blue);
`;

function MultiSelect({ options, onChange }: MultiSelectProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedValues(selectedOptions);
    if (onChange) {
      onChange(selectedOptions);
    }
  };
  return (
    <StyledSelect multiple value={selectedValues} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default MultiSelect;
