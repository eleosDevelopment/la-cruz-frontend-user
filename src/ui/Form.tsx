import React from "react";
import styled, { css } from "styled-components";

interface FormProps {
  $type?: "regular" | "modal";
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Form = styled.form<FormProps>`
  overflow: hidden;
  font-size: 1.1rem;

  ${({ $type }) => {
    switch ($type) {
      case "regular":
        return css`
          padding: 2.4rem 4rem;
        `;
      case "modal":
        return css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 90%;
          margin: 25px auto;
          border-radius: 15px;
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          background-color: var(--color-grey-700);
          box-shadow: var(--shadow-md);
          padding: 10px 5px;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        `;
    }
  }}
`;

export default Form;
