import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "rgb(255, 255, 255)"};
  color: ${(p) => (p.color ? "#490A3F" : "#490A3F")};
  font-size: 1rem;
  width: 100%;
  height: fit-content;
  border: 1px solid #1d6d67;
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
