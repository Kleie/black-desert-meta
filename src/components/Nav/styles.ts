import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.2rem 0;
  gap: 2rem;

  .active {
    color: ${(props) => props.theme.white};
  }

  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${(props) => props.theme.gray};
    padding: 1.25rem 2rem;

    display: flex;
    gap: 1rem;

    transition: all 0.4s ease;

    &:hover {
      color: ${(props) => props.theme.white};
      background: rgba(255, 255, 255, 0.1);
    }
  }

  a > .icon {
    color: inherit;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  color: #fff;
  background: ${(props) => props.theme["black-300"]};
  border-radius: 6px;
  padding: 1rem;
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4046;
  }
`;
