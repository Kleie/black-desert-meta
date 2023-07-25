import styled from "styled-components";

interface CardWrapperProps {
  padding?: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  background: ${(props) => props.theme["black-500"]};
  padding: ${(props) => `${props.padding}rem` || "0px"};
  border-radius: 8px;

  p {
    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; */
  }
`;
