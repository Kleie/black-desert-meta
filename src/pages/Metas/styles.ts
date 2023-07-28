import styled from "styled-components";

export const ModalButtonContainer = styled.div`
  & > button {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme["brown-200"]};
    color: ${(props) => props.theme.white};
<<<<<<< HEAD
=======
  }

  > input {
    flex:1 1 0%;
>>>>>>> d219c923550ea69d1b322465c0af5c6f72944e81
    border: 0;
    cursor: pointer;
  }
`;

export const MetasContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const BaseAreas = styled.div`
<<<<<<< HEAD
  flex: 1 1 0%;
  overflow-wrap: break-word;
=======
  /* max-width: 19.7rem; */
  flex:1 1 0%;
  overflow-wrap: break-word;

  > h2 {
    padding: 1.5rem 0;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > h2 > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap:anywhere;
  }
>>>>>>> d219c923550ea69d1b322465c0af5c6f72944e81
`;

export const DiariasArea = styled(BaseAreas)``;

<<<<<<< HEAD
export const TitleDiariasArea = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
=======
export const SemanaisArea = styled(BaseAreas)``;

export const MetasArea = styled.div`
  background: black;
  flex:1 1 0%;
>>>>>>> d219c923550ea69d1b322465c0af5c6f72944e81
`;

export const TimeInTitleDiariasArea = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme["gray-100"]};
`;

export const CardContainerDiariasArea = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SemanaisArea = styled(BaseAreas)``;

export const TitleSemanaisArea = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeInTitleSemanaisArea = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme["gray-100"]};
`;

export const CardContainerSemanaisArea = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardWrapperDiariasAndSemanais = styled.li`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    h3 {
      display: flex;
      justify-content: space-between;
    }

    h3 > span {
      border: 1px solid red;
      opacity: 50%;
      cursor: pointer;
      transition: 2s;

      &:hover {
        opacity: 100%;
      }
    }

    p {
      overflow-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 0.25rem;
    min-height: 24px;
    min-width: 24px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["black-300"]};
    }
  }
`;

export const MetasArea = styled.div`
  background: ${(props) => props.theme["black-500"]};
  text-transform: capitalize;
  padding: 1.25rem;
  flex: 1;
  border-radius: 8px;
`;

export const TitleMetaArea = styled.h2`
  font-size: 1.25rem;
`;

export const CardContainerMetaArea = styled.ul`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardWrapperMetaArea = styled.li`
  /* div do componente card */
  & > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.5rem;
    background: ${(props) => props.theme["black-300"]};
  }

  /* div children */
  div > div {
  }

  h3 {
    color: ${(props) => props.theme["brown-500"]};
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
