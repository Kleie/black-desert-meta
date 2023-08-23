import { Card } from "../../components/UI/Card";
import {
  CardListContainer,
  CardVisibilityToggle,
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

import gyfinTeste from "../../assets/gyfin-teste.svg";

import { useMetaContext } from "../../hooks/useMetaContext";

export function Home() {
  const { user, loading, handleDiaryCompleted } = useMetaContext();

  if (loading) {
    return <p>Loading</p>;
  }

  if (!user?.id) {
    return <p>Error no user</p>;
  }

  const completedDaily = user?.dailies.filter((diaria) => {
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
            <ProgressBar progress={(user.goals[0].item.price / 2000000000) * 100}></ProgressBar>
            <CurrentMetaCardWrapper>
              <Card padding={0.5}>
                <img src={user.goals[0].item.image} alt="" />
                <div>
                  <h3>{user.goals[0].item.name}</h3>
                  <p>{user.goals[0].item.price.toLocaleString("pt-BR")}</p>
                </div>
              </Card>
            </CurrentMetaCardWrapper>
          </CurrentMetaContainer>

          {user.goals.length > 1 && (
            <NextMetaContainer>
              <NextMetaTitle>Proximas Metas</NextMetaTitle>
              <NextMetaList>
                {user.goals
                  .filter((goal) => goal.id !== user.goals[0].id)
                  .map(({ id, item }) => (
                    <CardWrapper key={id}>
                      <Card padding={0.5}>
                        <img src={item.image} alt="" />
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.price.toLocaleString("pt-BR")}</p>
                        </div>
                      </Card>
                    </CardWrapper>
                  ))}
              </NextMetaList>
            </NextMetaContainer>
          )}
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
              <span>{`concluidas ${completedDaily?.length} de ${user.dailies.length}`}</span>
            </div>
          </DailyTitle>

          <Daily>
            <DailyList>
              <DailyCardWrapper>
                {user.dailies.length > 0 ? (
                  user.dailies.map((daily) => {
                    return (
                      <CardVisibilityToggle completed={daily.isCompleted}>
                        <Card padding={1} key={daily.id} onClick={() => handleDiaryCompleted(daily)}>
                          <h3>{daily.title}</h3>
                          <p>{daily.description}</p>
                        </Card>
                      </CardVisibilityToggle>
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
