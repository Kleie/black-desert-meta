import {
  BestSpot,
  BestSpotInfoWrapper,
  BestSpotTitle,
  BestSpotWrapper,
  ButtonWrapper,
  CardDropsWrapper,
  CardWrapper,
  ComingSoonWrapper,
  Container,
  GrindToolsContainer,
  GrindTrackerContainer,
  HourlyInfo,
  HourlySilverInfo,
  PriceCheckContainer,
  TotalSilverInfo,
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
        <GrindTrackerContainer>
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
        </GrindTrackerContainer>

        <GrindToolsContainer>
          <BestSpotWrapper>
            <h2>Best Spot</h2>
            <BestSpot>
              <BestSpotTitle>
                <h3>Gyfin Rhasia Temple</h3>
                <img src={gyfin} alt="" />
              </BestSpotTitle>

              <BestSpotInfoWrapper>
                <TotalSilverInfo>
                  <span>2.5b</span>
                  <span>total de prata</span>
                </TotalSilverInfo>
                <HourlyInfo>
                  <span>25h</span>
                  <span>total de horas</span>
                </HourlyInfo>
                <HourlySilverInfo>
                  <span>177kk</span>
                  <span>prata/hora</span>
                </HourlySilverInfo>
              </BestSpotInfoWrapper>
            </BestSpot>
          </BestSpotWrapper>

          <PriceCheckContainer>
            <h2>Price Check</h2>
            <ComingSoonWrapper>
              <span>Coming Soon We're working hard to bring you something awesome. Stay tuned!</span>
              <SmileyXEyes size={48} weight="fill" />
            </ComingSoonWrapper>
          </PriceCheckContainer>
        </GrindToolsContainer>
      </Container>
    </div>
  );
}
