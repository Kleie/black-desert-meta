import styled from "styled-components";

export const ButtonWrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  gap: 1.75rem;
`;

export const GrindTrackerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0.75rem;
  flex: 1;

  background: ${(props) => props.theme["black-500"]};
  border-radius: 6px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  background: ${(props) => props.theme["black-300"]};
  border-radius: 6px;

  span:nth-child(6) {
    margin-left: auto;
    margin-right: 0.75rem;
  }
`;

export const CardDropsWrapper = styled.ul`
  display: flex;
  gap: 0.625rem;
  padding: 0.375rem;

  background: ${(props) => props.theme["black-500"]};
  border-radius: 4px;
`;

export const ToolsGrindContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const BestSpotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;

  background: ${(props) => props.theme["black-500"]};
  border-radius: 6px;

  h3 {
    font-size: 0.875rem;
  }
`;

export const BestSpot = styled.div`
  padding: 0.375rem 0.5rem;

  background: url("/src/assets/background-gyfin.png");
  border-radius: 4px;
`;

export const BestSpotTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BestSpotInfo = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const infoBase = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 39px;
  min-width: 99.33px;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme["brown-500"]};
  border-radius: 2px;
  font-size: 0.875rem;

  span + span {
    font-size: 0.625rem;
  }
`;

export const InfoTotalSilver = styled(infoBase)``;

export const InfoHours = styled(infoBase)``;

export const InfoSilverHour = styled(infoBase)``;
