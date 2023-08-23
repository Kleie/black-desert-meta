import { keyframes, styled } from "styled-components";

const upDownInfinite = keyframes`
  0% {
    transform: translateY(0%)
  }
  50% {
    transform: translateY(50%)
  }
  100% {
    transform: translateY(0%)
  }
`;

const slide = keyframes`
    0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  animation: ${upDownInfinite} 5s infinite ease-in-out;
`;

////////////////////////////////////

export const HomeSkeletonContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1.75rem;
`;

export const LeftConent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.025), transparent);
    animation: ${slide} 3s infinite linear;
  }
`;

export const MetaBox = styled.div`
  flex: 0.6;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.025), transparent);
    animation: ${slide} 3s infinite linear;
  }
`;

export const GrindBox = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.025), transparent);
    animation: ${slide} 3s infinite linear;
  }
`;

export const RightContent = styled.div`
  flex: 0.5;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.025), transparent);
    animation: ${slide} 3s infinite linear;
  }
`;
