import { styled, keyframes } from "styled-components";

const seeImg = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const topToCenter = keyframes`
from {
  transform: translate(-50%, -300%);
  opacity: 0;
}

to {
  transform: translate(-50%, -50%);

  opacity: 1;
}
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  animation: ${fadeIn} 1s ease;
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
  border-radius: 6px;

  animation: ${topToCenter} 1s ease-in-out;
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

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background: ${(props) => props.theme["brown-500"]};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Loading = styled.button`
  content: "";
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  background: none;
  width: 30px;
  height: 30px;
  margin: 2px 31px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// meta

export const MetaModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 19.5rem;
`;

export const ItemModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  div {
    display: flex;
    align-items: center;

    span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 49px;
      height: 49px;
      border: 2px solid ${(props) => props.theme["black-300"]};
      border-radius: 6px;
      animation: ${seeImg} 600ms ease;
    }

    input {
      width: 100%;
      margin-left: auto;
      padding: 0.75rem;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme["brown-500"]};
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      background-color: ${(props) => props.theme["black-300"]};
      color: ${(props) => props.theme.white};

      transition: 400ms ease;
      &:focus {
        width: 80%;
      }
    }
  }
`;

export const LevelModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  & > ul > li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }
`;

interface ButtonProps {
  selected?: boolean;
}

export const ButtonModal = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  max-width: 32px;
  max-height: 32px;

  border: 2px solid ${(props) => props.theme["black-300"]};
  border-radius: 4px;
  background: ${(props) => (props.selected ? "#AD864A" : "none")};
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;
