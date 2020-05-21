import React from "react";
import styled, { css } from "styled-components";

const BaseButton = styled.button`
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px 20px;

  ${({ variant }) => getVariant(variant)}
`;

const getVariant = (variant) => {
  switch (variant) {
    case "danger":
      return danger;
    case "success":
      return success;
    default:
      return neutral;
  }
};

const danger = css`
  background-color: red;
`;

const success = css`
  background-color: green;
`;

const neutral = css`
  background-color: lightgray;
`;

const Button = ({ variant, children, onClick }) => {
  return (
    <BaseButton variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;
