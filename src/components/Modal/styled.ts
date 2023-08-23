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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalBackGround = styled.div`
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 1s ease;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  /* padding: 2.5rem; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.primary};
  z-index: 99999;
  border-radius: 6px;

  animation: ${topToCenter} 0.7s ease;
`;

export const MetaWrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;

  max-width: 26rem;
`;

export const TitleModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.75rem;
    border: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme["base-white"]};
    border-bottom: 1px solid transparent;
    transition: all 0.1s ease;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    }
  }
`;

export const DescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    padding: 0.75rem;
    border: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme["base-white"]};
    border-bottom: 1px solid transparent;
    transition: all 0.1s ease;
    min-height: 6.5rem;
    resize: none;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme["base-button"]};
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
    border: 2px solid ${(props) => props.theme.secondary};

    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const FooterModal = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 1.125rem;
  padding: 2rem 0 0 10rem;

  button + button {
    background: transparent;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme["base-white"]};
    z-index: 1;

    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-white"]};
  cursor: pointer;
  z-index: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
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
      border: 2px solid ${(props) => props.theme.secondary};
      border-radius: 6px;
      animation: ${seeImg} 600ms ease;
    }

    input {
      width: 100%;
      margin-left: auto;
      padding: 0.75rem;
      border: none;
      border-bottom: 1px solid transparent;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      background-color: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme["base-white"]};

      transition: width 400ms ease, border-color 200ms ease;

      &:focus {
        width: 80%;
        border-bottom: 1px solid ${(props) => props.theme["base-button"]};
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

  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 4px;
  background: ${(props) => (props.selected ? props.theme["base-button"] : "none")};
  color: ${(props) => props.theme["base-white"]};
  cursor: pointer;
`;

// grind tracker
export const Border = styled.div`
  margin: 1.375rem 0;
`;

export const GrindWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const GrindSelected = styled.div``;

export const GrindTitle = styled.div`
  img {
    width: 5.25rem;
  }
`;

export const GrindInfo = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const GrindDrops = styled.div`
  img {
    margin-bottom: 1.375rem;
  }

  & > ul {
    background-color: red;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    max-height: 13rem;
  }
  & > ul > li {
    display: flex;
    gap: 0.5rem;
  }
  & > ul > li > input {
    max-width: 1.75rem;
  }
`;

export const InputStyled = styled.input`
  position: relative;

  width: 100%;
  margin-left: auto;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme["base-white"]};
`;

export const ULStyled = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 2;

  background: ${(props) => props.theme.secondary};

  color: ${(props) => props.theme["base-red"]};

  & > li {
    cursor: pointer;
  }
`;

export const BackgroundToCloseGrindLIst = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
