import styled, { css } from "styled-components";

interface InputProps {
  $layout?: "formType";
}

const Input = styled.input<InputProps>`
  ${({ $layout }) => {
    switch ($layout) {
      case "formType":
        return css`
          color: var(--color-white-smoke);
          border: 2px solid var(--color-vanilla);
          background-color: var(--color-prussian-blue);
          border-radius: 25px;

          padding: 10px 15px;
          font-size: 1rem;

          &:focus {
            border: 2px solid var(--color-orange);
          }
        `;
    }
  }}
  font-family: inherit;
`;

export default Input;
