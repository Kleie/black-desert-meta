import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  gap: 1rem;

  > button {
    border: 0;
    border-radius: 5px;
    padding: 0.75rem 2rem;
    background: ${(props) => props.theme["black-500"]};
    color: ${(props) => props.theme.white};
  }

  > input {
    flex: 1;
    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-300"]};
    padding: 1rem 1.5rem;
  }

  > input::placeholder {
    color: ${(props) => props.theme.gray};
  }
`;

export const MetasContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const BaseAreas = styled.div`
  /* max-width: 19.7rem; */
  flex: 1 1 0%;
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
`;

export const DiariasArea = styled(BaseAreas)``;

export const SemanaisArea = styled(BaseAreas)``;

export const MetasArea = styled.div`
  background: black;
  flex: 1;
`;

export const CardWrapper = styled.li`
  div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`;
