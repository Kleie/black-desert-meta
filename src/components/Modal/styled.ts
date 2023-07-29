import { styled } from "styled-components";

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme["black-500"]};
  z-index: 99999;
`;

export const TitleModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    background-color: ${(props) => props.theme["black-300"]};
    border: 0;
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme["gray-100"]};

    transition: 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme["brown-500"]};
    }
  }
`;

export const DescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    background-color: ${(props) => props.theme["black-300"]};
    border-radius: 4px;
    border: 0;
    padding: 0.75rem;
    min-height: 6.5rem;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme["gray-100"]};
    resize: none;

    transition: 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme["brown-500"]};
    }
  }
`;

export const SelectMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    display: flex;
    gap: 1rem;
  }
  & > div > div {
    display: flex;
    gap: 1rem;
  }

  input {
    display: none;
  }

  input + label {
    padding: 0.5rem;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme["black-300"]};

    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.theme["black-300"]};
  }
`;

export const FooterModal = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 1.125rem;
  padding: 32px 0px 0 163px;

  button + button {
    background: transparent;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.white};

    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme["black-300"]};
    }
  }
`;

export const ButtonWithContent = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background: ${(props) => props.theme["brown-500"]};
  color: white;
  cursor: pointer;
`;

export const ButtonWhitoutContent = styled.button`
  cursor: not-allowed;
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background: ${(props) => props.theme["brown-500"]};
`;
