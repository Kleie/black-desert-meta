import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;

  padding: 3rem 2rem;

  border-top-left-radius: 32px;
  background: ${(props) => props.theme["black-300"]};

  header {
    margin-bottom: 1.68rem;
    padding: 0.68rem 1.5rem;

    > h1 {
      text-transform: capitalize;
      font-size: 2rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.68rem;
    padding: 1rem 1.5rem;
  }
`;
