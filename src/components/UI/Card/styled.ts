import styled from "styled-components";

interface CardWrapperProps {
  padding?: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  background: ${(props) => props.theme.primary};
  padding: ${(props) => `${props.padding}rem` || "0px"};
  border-radius: 8px;
  font-weight: 600;
  flex: 1;
`;
