import { styled } from "styled-components";

export const DefaultButton = styled.button`
  font-family: "Inter", sans-serif;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-white"]};
  font-weight: 500;
  border: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["base-button-hover"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
