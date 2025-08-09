import React, { type ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  $variation?: "submit" | "options" | "addColor" | "deleteObject";
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  ${({ $variation }) => {
    switch ($variation) {
      case "submit":
        return css`
          background-color: var(--color-button);
          border: 2px solid var(--color-button);
          border-radius: 25px;
        `;
      case "options":
        return css`
          background-color: var(--color-alternative);
          border: 2px solid var(--color-alternative);
          border-radius: 25px;
          color: var(--color-main-font);

          padding: 7px 10px;
          margin: 10px 5px;
          font-size: 1rem;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;

          &:hover {
            border: 2px solid var(--color-main-font);
            box-shadow: 0px 0px 5px var(--color-main-font);
          }
          & svg {
            width: 20px;
            height: 20px;
            margin: 0px;
          }
        `;
      case "addColor":
        return css`
          padding: 5px;

          background-color: var(--color-button);
          border: 2px solid var(--color-button);
          border-radius: 50px;

          display: flex;
          cursor: pointer;
          & svg {
            width: 20px;
            height: 20px;
          }
        `;
      case "deleteObject":
        return css`
          border: none;
          background-color: transparent;
          color: var(--color-white);
          width: 10%;

          & svg{
            color: red;
            height: 20px;
            width: 20px;
          }
        `;
    }
  }}
`;
export default Button;
