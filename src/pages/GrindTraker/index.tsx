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
import { SmileyXEyes } from "@phosphor-icons/react";

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
          <div>
            <h2>price check</h2>
            <div>
              <span>Coming Soon We're working hard to bring you something awesome. Stay tuned!</span>
              <SmileyXEyes size={48} weight="fill" />
            </div>
          </div>
        </ToolsGrindContainer>
      </Container>
    </div>
  );
}
