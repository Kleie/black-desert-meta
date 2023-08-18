import {
  BestSpot,
  BestSpotInfo,
  BestSpotTitle,
  BestSpotWrapper,
  ButtonWrapper,
  CardDropsWrapper,
  CardWrapper,
  Container,
  GrindTrackerWrapper,
  InfoHours,
  InfoSilverHour,
  InfoTotalSilver,
  ToolsGrindContainer,
} from "./styled";
import gyfin from "../../assets/gyfin.svg";

export function GrindTraker() {
  return (
    <div>
      <ButtonWrapper>
        <button>Adicionar um novo grind</button>
      </ButtonWrapper>

      <Container>
        <GrindTrackerWrapper>
          <CardWrapper>
            <img src={gyfin} alt="" />
            <span>Gyfin Rhasia Temple</span>
            <span>750kk</span>
            <CardDropsWrapper>
              <li>drop 1</li>
              <li>drop 2</li>
            </CardDropsWrapper>
            <span>^10%</span>
            <span>ha uma hora</span>
          </CardWrapper>
          <CardWrapper>
            <img src={gyfin} alt="" />
            <span>Gyfin underground</span>
            <span>750kk</span>
            <CardDropsWrapper>drops</CardDropsWrapper>
            <span>^10%</span>
            <span>ha uma hora</span>
          </CardWrapper>
        </GrindTrackerWrapper>

        <ToolsGrindContainer>
          <BestSpotWrapper>
            <h2>Best Spot</h2>
            <BestSpot>
              <BestSpotTitle>
                <h3>Gyfin Rhasia Temple</h3>
                <img src={gyfin} alt="" />
              </BestSpotTitle>

              <BestSpotInfo>
                <InfoTotalSilver>
                  <span>2.5b</span>
                  <span>total de prata</span>
                </InfoTotalSilver>
                <InfoHours>
                  <span>25h</span>
                  <span>total de horas</span>
                </InfoHours>
                <InfoSilverHour>
                  <span>177kk</span>
                  <span>prata/hora</span>
                </InfoSilverHour>
              </BestSpotInfo>
            </BestSpot>
          </BestSpotWrapper>
          <div>price check</div>
        </ToolsGrindContainer>
      </Container>
    </div>
  );
}
