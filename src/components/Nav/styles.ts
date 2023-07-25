import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .active {
    color: ${(props) => props.theme.white};
  }
  .disable {
  }

  img {
    margin-top: 3.1rem;
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
