import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 0%;
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;

  padding: 3rem 2rem;

  border-top-left-radius: 32px;
  background: ${(props) => props.theme["black-300"]};

  header {
    margin-bottom: 1.68rem;
    padding: 0.68rem 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      text-transform: capitalize;
      font-size: 2rem;
    }
  }

  main {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    gap: 1.68rem;
    padding: 1rem 1.5rem;
  }
`;

export const AvatarWrapper = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 999px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: 2px solid ${(props) => props.theme["gray"]};
  border: 4px solid transparent;

  & > img {
    width: 100%;
  }
`;
