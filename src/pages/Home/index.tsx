import { Card } from "../../components/UI/Card";
import {
  CardDiariasWrapper,
  // CardGrindTrackerContainer,
  // CardListContainer,
  CardSemanaisWrapper,
  // CardWrapper,
  // CardWrapperGrindTracker,
  // CardWrapperMetaAtual,
  Diarias,
  DiariasContainer,
  DiariasList,
  DiariasSemanaisContainer,
  // GrindTrackerContainer,
  HomeContainer,
  MetaAndTrackerContainer,
  MetaAtualContainer,
  MetaContainer,
  ProgressBar,
  // ProximaMetaContainer,
  // ProximaMetaList,
  Semanais,
  SemanaisContainer,
  SemanaisList,
  TitleDiarias,
  // TitleGrindTracker,
  TitleMetaAtual,
  // TitleProximaMeta,
  TitleSemanais,
} from "./styles";

// import itemTeste from "../../assets/Item-test.svg.svg";
// import gyfinTeste from "../../assets/gyfin-teste.svg";

import { useMetaContext } from "../../hooks/useMetaContext";
import { TimeLeft, WeekLeft } from "../../components/Time";

export function Home() {
  const { user, loading, handleMetaCompleted } = useMetaContext();

  if (loading) {
    return <p>Loading</p>;
  }

  if (!user?.id) {
    return <p>Error no user</p>;
  }

  const diariasCompletas = user?.diaries.filter((diaria) => {
    if (diaria.isCompleted) {
      return diaria;
    }
  });

  const semanaisCompletas = user?.weeklies.filter((semanal) => {
    if (semanal.isCompleted) {
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
            {/* <CardWrapperMetaAtual>
              <Card padding={0.5}>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>{" "}
              </Card>
            </CardWrapperMetaAtual> */}
          </MetaAtualContainer>

          {/* <ProximaMetaContainer>
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
          </ProximaMetaContainer> */}
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
              <span>{`concluidas ${diariasCompletas?.length} de ${user.diaries.length}`}</span>
              <TimeLeft />
            </div>
          </TitleDiarias>

          <Diarias>
            <DiariasList>
              <CardDiariasWrapper>
                {user.diaries.length > 0 ? (
                  user.diaries.map((diary) => {
                    return (
                      <Card padding={1} key={diary.id} onClick={() => handleMetaCompleted(diary.id, "diary")}>
                        <h3>{diary.title}</h3>
                        <p>{diary.description}</p>
                      </Card>
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
              <span>{`concluidas ${semanaisCompletas?.length} de ${user.weeklies.length}`}</span>

              <WeekLeft />
            </div>
          </TitleSemanais>

          <Semanais>
            <SemanaisList>
              <CardSemanaisWrapper>
                {user.weeklies.length > 0 ? (
                  user.weeklies.map((weekly) => {
                    return (
                      <Card padding={1} key={weekly.id} onClick={() => handleMetaCompleted(weekly.id, "weekly")}>
                        <h3>{weekly.title}</h3>
                        <p>{weekly.description}</p>
                      </Card>
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
