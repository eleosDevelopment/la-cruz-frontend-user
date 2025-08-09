import styled from "styled-components";

interface Option {
  _id?: string;
  value?: string;
  label?: string;
}

interface SelectProps {
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  defaultValue: string | undefined;
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

function Select({ options, defaultValue, onChange, ...props }: SelectProps) {
  return (
    <StyledSelect defaultValue={defaultValue} onChange={onChange} {...props}>
      {(options ?? []).map((option: Option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
