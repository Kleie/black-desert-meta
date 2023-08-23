import styled from "styled-components";

export const ModalWrapper = styled.div``;

// diaria area
export const MetasContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const BaseAreas = styled.div`
  flex: 1 1 0%;
  overflow-wrap: break-word;
`;

export const DailyArea = styled(BaseAreas)``;

export const DailyTitle = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DiariaCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DailyCard = styled.li`
  display: flex;
  min-height: 9rem;

  h3 {
    font-size: 1.25rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    margin-top: 1rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme["base-paragraph"]};
  }
`;

// semanal area
export const WeeklyArea = styled(BaseAreas)``;

export const WeeklyTitle = styled.h2`
  padding: 1.5rem 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WeeklyCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const WeeklyCard = styled.li`
  display: flex;
  min-height: 9rem;

  h3 {
    font-size: 1.25rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    margin-top: 1rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme["base-paragraph"]};
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 0.25rem;
    min-height: 24px;
    min-width: 24px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;

// meta area
export const MetasArea = styled.div`
  background: ${(props) => props.theme.primary};
  text-transform: capitalize;
  padding: 1.25rem;
  flex: 1;
  border-radius: 8px;
  height: fit-content;
`;

export const MetaTitle = styled.h2`
  font-size: 1.5rem;
`;

export const MetaCardWrapper = styled.ul`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardMeta = styled.li`
  /* div do componente card */
  & > div {
    display: flex;
    align-items: center;
    row-gap: 1rem;
    gap: 0.625rem;
    padding: 0.5rem;
    background: ${(props) => props.theme.secondary};
  }

  /* div children */
  div > div {
  }

  h3 {
    color: ${(props) => props.theme["base-button"]};
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Loading = styled.span`
  content: "";
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props.theme["base-red"]};
  border-radius: 50%;
  width: 24px;
  height: 24px;
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
