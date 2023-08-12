import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;

  padding: 3rem 4.71rem;
  border-radius: 16px;

  background: ${(props) => props.theme["black-300"]};

  h1 {
    font-weight: bold;
    font-size: 3.25rem;
    padding-top: 1.375rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    margin-top: 4.93rem;

    padding: 0.75rem 5.625rem;
    border-radius: 6px;
    border: none;

    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    cursor: pointer;

    font-weight: bold;
    letter-spacing: 1px;

    transition: 1s;
    &:hover {
      background: #2e3eef;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["black-500"]};
  padding: 2.08rem;
  border-radius: 999px;
  width: 7rem;
  height: 7rem;

  img {
    width: 44.24px;
    height: 45.8px;
  }
`;
