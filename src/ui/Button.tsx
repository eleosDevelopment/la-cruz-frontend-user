import React, { type ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  $variation?: "submit" | "icons" | "socialButton";
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  ${({ $variation }) => {
    switch ($variation) {
      case "submit":
        return css`
          background-color: var(--color-sky-blue);
          border: 2px solid var(--color-sky-blue);
          border-radius: 25px;
        `;
      case "icons":
        return css`
          margin: 0px 15px;
          padding: 0px;
          border: none;
          background-color: transparent;

          & svg {
            color: var(--color-vanilla);
            width: 25px;
            height: 25px;
          }
        `
      case "socialButton":
        return css`
          margin: 10px auto;
          padding: 8px 15px;
          color: var(--color-prussian-blue);
          font-size: 1rem;
          font-weight: 500;

          background-color: var(--color-white-smoke);
          border: 2px solid var(--color-white-smoke);
          border-radius: 5px;

          display: flex;
          align-items: center;

          & svg {
            margin-right: 10px;
            height: 20px;
            width: 20px;
          }
        `;
    }
  }}
`;
export default Button;
