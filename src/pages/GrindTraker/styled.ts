import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 1.5rem 0;

  button {
    padding: 0.5rem 0.75rem;

    border: none;
    border-radius: 4px;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-white"]};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1.75rem;
`;

export const GrindTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0.75rem;
  flex: 1;

  background: ${(props) => props.theme.primary};
  border-radius: 6px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem;

  background: ${(props) => props.theme.secondary};
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

  background: ${(props) => props.theme.primary};
  border-radius: 4px;
`;

export const GrindToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  max-width: 24rem;
`;

export const BestSpotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;

  background: ${(props) => props.theme.primary};
  border-radius: 6px;
`;

export const BestSpot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.375rem 0.5rem;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/src/assets/background-gyfin.webp") no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

export const BestSpotTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
  }
`;

export const BestSpotInfoWrapper = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const infoBase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 2px;
  font-weight: bold;

  span + span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const TotalSilverInfo = styled(infoBase)``;

export const HourlyInfo = styled(infoBase)``;

export const HourlySilverInfo = styled(infoBase)`
  background-color: ${(props) => props.theme["base-white"]};
  color: ${(props) => props.theme["base-button"]};
`;

export const PriceCheckContainer = styled.div`
  padding: 1.25rem;

  background: ${(props) => props.theme.primary};
  border-radius: 6px;
`;

export const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin: 4.625rem 1.25rem;
  text-align: center;

  font-size: 0.875rem;
  opacity: 0.2;
`;
