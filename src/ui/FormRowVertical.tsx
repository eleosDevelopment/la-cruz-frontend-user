import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: React.ReactElement<{ id?: string }>;
}

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  gap: 0.5rem;
  padding: 5px 10px;
`;

const Label = styled.label<{ htmlFor?: string }>`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--color-grey-300);
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--color-red);
`;

function FormRowVertical({ label, error, children }: FormRowVerticalProps) {
  const getChildId = (child: ReactNode): string | undefined => {
    if (
      React.isValidElement(child) &&
      typeof child.props === "object" &&
      child.props !== null &&
      "id" in child.props &&
      typeof child.props.id === "string"
    ) {
      return child.props.id;
    }
    return undefined;
  };

  const childId = getChildId(children);

  return (
    <StyledFormRow>
      {label && <Label htmlFor={childId}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
