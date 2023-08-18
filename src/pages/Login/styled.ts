import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-image: url("/src/assets/shai-background.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: 100vh;

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  background: ${(props) => props.theme["black-300"]};

  animation: ${leftToRight} 1s ease-in-out;
`;

export const LogoWrraper = styled.div`
  display: flex;
  position: absolute;
  gap: 1.54rem;
  top: 5rem;
  left: 7rem;

  img {
    width: 58px;
    height: 58px;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: bold;
  }
`;

export const DiscordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.31rem;

  max-width: 19.75rem;
  margin: 0 10.75rem 0 7rem;

  h2 {
    font-size: 2.25rem;
  }

  p {
    color: ${(props) => props.theme["gray-200"]};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.84rem;
    padding: 0.75rem 6.4375rem;

    border-radius: 6px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.blue};
  }
`;
