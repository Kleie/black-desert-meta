import { Card } from "../../components/UI/Card";
import {
  CardDiariasWrapper,
  // CardGrindTrackerContainer,
  // CardListContainer,
  CardSemanaisWrapper,
  CardWrapper,
  // CardWrapperGrindTracker,
  CardWrapperMetaAtual,
  Diarias,
  DiariasContainer,
  DiariasList,
  DiariasSemanaisContainer,
  // GrindTrackerContainer,
  HomeContainer,
  MetaAndTrackerContainer,
  MetaAtualContainer,
  MetaCardWrapper,
  MetaContainer,
  ProgressBar,
  ProximaMetaContainer,
  ProximaMetaList,
  Semanais,
  SemanaisContainer,
  SemanaisList,
  TitleDiarias,
  // TitleGrindTracker,
  TitleMetaAtual,
  TitleProximaMeta,
  TitleSemanais,
} from "./styles";

import itemTeste from "../../assets/Item-test.svg.svg";
// import gyfinTeste from "../../assets/gyfin-teste.svg";

import { useMetaContext } from "../../hooks/useMetaContext";
import { TimeLeft, WeekLeft } from "../../components/Time";

export function Home() {
  const { diariaList, semanalList, handleMetaCompleted } = useMetaContext();

  const diariasCompletas = diariaList.filter((diaria) => {
    if (diaria.isCompleted === true) {
      return diaria;
    }
  });

  const semanaisCompletas = semanalList.filter((semanal) => {
    if (semanal.isCompleted === true) {
      return semanal;
    }
  });

  return (
    <HomeContainer>
      <MetaAndTrackerContainer>
        <MetaContainer>
          <MetaAtualContainer>
            <TitleMetaAtual>
              Meta <span>2.000.000.000</span>
            </TitleMetaAtual>
            {/* barra de progresso aqui */}
            <ProgressBar></ProgressBar>
            <CardWrapperMetaAtual>
              <Card padding={0.5}>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>{" "}
              </Card>
            </CardWrapperMetaAtual>
          </MetaAtualContainer>

          <ProximaMetaContainer>
            <TitleProximaMeta>Proximas Metas</TitleProximaMeta>
            <ProximaMetaList>
              <CardWrapper>
                <Card padding={0.5}>
                  <img src={itemTeste} alt="" />
                  <div>
                    <h3>Cinto Tungrade V</h3>
                    <p>10.000.000</p>
                  </div>{" "}
                </Card>
              </CardWrapper>
              <CardWrapper>
                <Card padding={0.5}>
                  <img src={itemTeste} alt="" />
                  <div>
                    <h3>Cinto Tungrade V</h3>
                    <p>10.000.000</p>
                  </div>{" "}
                </Card>
              </CardWrapper>
            </ProximaMetaList>
          </ProximaMetaContainer>
        </MetaContainer>

        {/* <GrindTrackerContainer>
          <TitleGrindTracker>Grind Tracker</TitleGrindTracker>
          <CardGrindTrackerContainer>
            <CardListContainer>
              <CardWrapperGrindTracker>
                <Card>
                  <img src={gyfinTeste} alt="" />
                  <h3>Gyfin</h3>
                  <p>750k</p>
                  <span>ha uma hora</span>
                  <span>^^ 10%</span>
                </Card>
              </CardWrapperGrindTracker>
              <CardWrapperGrindTracker>
                <Card>
                  <img src={gyfinTeste} alt="" />
                  <h3>Gyfin</h3>
                  <p>750k</p>
                  <span>ha uma hora</span>
                  <span>^^ 10%</span>
                </Card>
              </CardWrapperGrindTracker>
              <CardWrapperGrindTracker>
                <Card>
                  <img src={gyfinTeste} alt="" />
                  <h3>Gyfin</h3>
                  <p>750k</p>
                  <span>ha uma hora</span>
                  <span>^^ 10%</span>
                </Card>
              </CardWrapperGrindTracker>
              <CardWrapperGrindTracker>
                <Card>
                  <img src={gyfinTeste} alt="" />
                  <h3>Gyfin</h3>
                  <p>750k</p>
                  <span>ha uma hora</span>
                  <span>^^ 10%</span>
                </Card>
              </CardWrapperGrindTracker>
            </CardListContainer>
          </CardGrindTrackerContainer>
        </GrindTrackerContainer> */}
      </MetaAndTrackerContainer>

      <DiariasSemanaisContainer>
        <DiariasContainer>
          <TitleDiarias>
            <h2>Diarias</h2>
            <div>
              <span>{`concluidas ${diariasCompletas.length} de ${diariaList.length}`}</span>
              <TimeLeft />
            </div>
          </TitleDiarias>

          <Diarias>
            <DiariasList>
              <CardDiariasWrapper>
                {diariaList.length > 0 ? (
                  diariaList.map((diaria) => {
                    return (
                      <MetaCardWrapper iscompleted={diaria.isCompleted}>
                        <Card padding={1} key={diaria.id} onClick={() => handleMetaCompleted(diaria.id, "diaria")}>
                          <h3>{diaria.title}</h3>
                          <p>{diaria.description}</p>
                        </Card>
                      </MetaCardWrapper>
                    );
                  })
                ) : (
                  <span>...</span>
                )}
              </CardDiariasWrapper>
            </DiariasList>
          </Diarias>
        </DiariasContainer>

        <SemanaisContainer>
          <TitleSemanais>
            <h2>Semanais</h2>
            <div>
              <span>{`concluidas ${semanaisCompletas.length} de ${semanalList.length}`}</span>

              <WeekLeft />
            </div>
          </TitleSemanais>

          <Semanais>
            <SemanaisList>
              <CardSemanaisWrapper>
                {semanalList.length > 0 ? (
                  semanalList.map((semanal) => {
                    return (
                      <MetaCardWrapper iscompleted={semanal.isCompleted}>
                        <Card padding={1} key={semanal.id} onClick={() => handleMetaCompleted(semanal.id, "semanal")}>
                          <h3>{semanal.title}</h3>
                          <p>{semanal.description}</p>
                        </Card>
                      </MetaCardWrapper>
                    );
                  })
                ) : (
                  <span>...</span>
                )}
              </CardSemanaisWrapper>
            </SemanaisList>
          </Semanais>
        </SemanaisContainer>
      </DiariasSemanaisContainer>
    </HomeContainer>
  );
}
