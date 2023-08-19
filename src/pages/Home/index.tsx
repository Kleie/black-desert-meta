import { Card } from "../../components/UI/Card";
import {
  CardListContainer,
  CardWrapper,
  CurrentMetaCardWrapper,
  CurrentMetaContainer,
  CurrentMetaTitle,
  Daily,
  DailyAndWeeklyContainer,
  DailyCardWrapper,
  DailyContainer,
  DailyList,
  DailyTitle,
  GrindTrackerCardContainer,
  GrindTrackerCardWrapper,
  GrindTrackerContainer,
  GrindTrackerTitle,
  HomeContainer,
  MetaAndGrindTrackerContainer,
  MetaContainer,
  NextMetaContainer,
  NextMetaList,
  NextMetaTitle,
  ProgressBar,
  Weekly,
  WeeklyCardWrapper,
  WeeklyContainer,
  WeeklyList,
  WeeklyTitle,
} from "./styles";

import itemTeste from "../../assets/Item-test.svg.svg";
import gyfinTeste from "../../assets/gyfin-teste.svg";

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

  const completedDaily = user?.diaries.filter((diaria) => {
    if (diaria.isCompleted) {
      return diaria;
    }
  });

  const completedWeekly = user?.weeklies.filter((semanal) => {
    if (semanal.isCompleted) {
      return semanal;
    }
  });

  return (
    <HomeContainer>
      <MetaAndGrindTrackerContainer>
        <MetaContainer>
          <CurrentMetaContainer>
            <CurrentMetaTitle>
              Meta <span>2.000.000.000</span>
            </CurrentMetaTitle>
            {/* barra de progresso aqui */}
            <ProgressBar></ProgressBar>
            <CurrentMetaCardWrapper>
              <Card padding={0.5}>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>{" "}
              </Card>
            </CurrentMetaCardWrapper>
          </CurrentMetaContainer>

          <NextMetaContainer>
            <NextMetaTitle>Proximas Metas</NextMetaTitle>
            <NextMetaList>
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
                  </div>
                </Card>
              </CardWrapper>
            </NextMetaList>
          </NextMetaContainer>
        </MetaContainer>

        <GrindTrackerContainer>
          <GrindTrackerTitle>Grind Tracker</GrindTrackerTitle>
          <GrindTrackerCardContainer>
            <CardListContainer>
              <GrindTrackerCardWrapper>
                <Card>
                  <img src={gyfinTeste} alt="" />
                  <h3>Gyfin</h3>
                  <p>750k</p>
                  <span>ha uma hora</span>
                  <span>^^ 10%</span>
                </Card>
              </GrindTrackerCardWrapper>
            </CardListContainer>
          </GrindTrackerCardContainer>
        </GrindTrackerContainer>
      </MetaAndGrindTrackerContainer>

      <DailyAndWeeklyContainer>
        <DailyContainer>
          <DailyTitle>
            <h2>Diarias</h2>
            <div>
              <span>{`concluidas ${completedDaily?.length} de ${user.diaries.length}`}</span>
              <TimeLeft />
            </div>
          </DailyTitle>

          <Daily>
            <DailyList>
              <DailyCardWrapper>
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
              </DailyCardWrapper>
            </DailyList>
          </Daily>
        </DailyContainer>

        <WeeklyContainer>
          <WeeklyTitle>
            <h2>Semanais</h2>
            <div>
              <span>{`concluidas ${completedWeekly?.length} de ${user.weeklies.length}`}</span>

              <WeekLeft />
            </div>
          </WeeklyTitle>

          <Weekly>
            <WeeklyList>
              <WeeklyCardWrapper>
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
              </WeeklyCardWrapper>
            </WeeklyList>
          </Weekly>
        </WeeklyContainer>
      </DailyAndWeeklyContainer>
    </HomeContainer>
  );
}
