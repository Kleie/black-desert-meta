import styled, { css } from "styled-components";

// container geral
export const HomeContainer = styled.div`
  display: flex;
  gap: 1.75rem;
`;

export const MetaAndTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const MetaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
`;

export const MetaAtualContainer = styled.div`
  flex: 1;
`;

export const ProgressBar = styled.div`
  flex: 1;
  padding: 0.25rem;
  margin: 1.25rem 0;
  background: ${(props) => props.theme["black-500"]};
  border-radius: 99px;
`;

export const CardWrapperMetaAtual = styled.div`
  /* div do componente card */
  & > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme["brown-500"]};
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

export const TitleMetaAtual = styled.h2`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 15.18rem;
`;

export const ProximaMetaContainer = styled.div``;

export const TitleProximaMeta = styled.h2`
  font-size: 1rem;
  padding: 0.125rem 8.06rem 1.56rem 0;
`;

export const ProximaMetaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardWrapper = styled.li`
  /* div do componente card */
  & > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme["brown-500"]};
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

// grind tracker
export const GrindTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
`;

export const TitleGrindTracker = styled.h2``;

export const CardGrindTrackerContainer = styled.div`
  background: ${(props) => props.theme["black-500"]};
  border-radius: 6px;
`;

export const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.52rem;
`;

export const CardWrapperGrindTracker = styled.li`
  & > div {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 0.25rem;
    background: ${(props) => props.theme["black-300"]};
  }

  img {
    margin-left: 1rem;
  }

  h3 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.875rem;
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :nth-child(4) {
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-100"]};
  }
  :nth-child(5) {
    font-size: 0.875rem;
    color: ${(props) => props.theme.green};
  }
`;

// diarias e semanais
export const DiariasSemanaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 0.5;
`;

// diarias

export const DiariasContainer = styled.div`
  padding: 0 1.5rem;
`;

export const TitleDiarias = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.75rem 0 1.5rem 0;

  & > h2 {
    font-size: 1.25rem;
  }

  & > div {
    display: flex;
    gap: 7.56rem;
    flex: 1;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const Diarias = styled.div``;

export const DiariasList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-height: 21.125rem;
  overflow: auto;
  overflow-x: hidden;
`;

export const CardDiariasWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  /* div do componente card */
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  h3 {
    font-size: 0.875rem;
  }

  p {
    color: ${(props) => props.theme["brown-300"]};
    font-size: 0.875rem;
  }

  h3,
  p {
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// semanais

export const SemanaisSemanaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SemanaisContainer = styled.div`
  padding: 0 1.5rem;
`;

export const TitleSemanais = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.75rem 0 1.5rem 0;

  & > h2 {
    font-size: 1.25rem;
  }

  & > div {
    display: flex;
    gap: 7.56rem;
    flex: 1;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  & > :nth-child(2) {
    cursor: pointer;
  }
`;

export const Semanais = styled.div``;

export const SemanaisList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-height: 21.125rem;
  overflow: auto;
  overflow-x: hidden;
`;

export const CardSemanaisWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* cursor: pointer; */

  /* div do componente card */
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  h3 {
    font-size: 0.875rem;
  }

  p {
    color: ${(props) => props.theme["brown-300"]};
    font-size: 0.875rem;
  }

  h3,
  p {
    overflow-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
