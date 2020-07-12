import React from "react";
import styled, { css } from "styled-components";

const BaseButton = styled.button`
  border: 1px solid rgb(118, 118, 118);

  padding: 10px 20px;

  ${({ variant }) => getVariant(variant)}

  ${({ size }) => getSize(size)}
`;

const getSize = size => {
  switch (size) {
    case "large":
      return css`
        padding: 10px 20px;
        border-radius: 6px;
      `;
    default:
      return css`
        padding: 2px 10px;
        border-radius: 3px;
      `;
  }
};

const getVariant = variant => {
  switch (variant) {
    case "danger":
      return danger;
    case "success":
      return success;
    case "transparent":
      return transparent;
    default:
      return neutral;
  }
};

const danger = css`
  background-color: #ff6961;
`;

const success = css`
  background-color: green;
`;

const transparent = css`
  background-color: transparent;
`;

const neutral = css`
  background-color: rgb(239, 239, 239);
`;

const Button = ({ variant, size, children, onClick }) => {
  return (
    <BaseButton variant={variant} onClick={onClick} size={size}>
      {children}
    </BaseButton>
  );
};

export default Button;
