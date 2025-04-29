import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#1D6D67"};
  color: ${(p) => (p.color ? "#F6EFE7" : "#F6EFE7")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #1D6D67;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
  max-width: 250px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #333333;
    background-color: #333333;
  }
`;
