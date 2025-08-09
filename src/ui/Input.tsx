import styled, { css } from "styled-components";

interface InputProps {
  $layout?: "formType";
}

const Input = styled.input<InputProps>`
  ${({ $layout }) => {
    switch ($layout) {
      case "formType":
        return css`
          color: var(--color-main-font);
          border: 2px solid var(--color-alternative);
          background-color: var(--color-background);
          border-radius: 25px;

          padding: 10px 15px;
          font-size: 1rem;

          &:focus {
            border: 2px solid var(--color-button);
          }
        `;
    }
  }}
`;

export default Input;
