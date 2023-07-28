import styled from "styled-components";

interface CardWrapperProps {
  padding?: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  background: ${(props) => props.theme["black-500"]};
  padding: ${(props) => `${props.padding}rem` || "0px"};
  border-radius: 8px;
`;
