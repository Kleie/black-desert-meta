import { Card } from "../../components/UI/Card";
import {
  CardMeta,
  DailyArea,
  DailyCard,
  DailyTitle,
  DiariaCardWrapper,
  Loading,
  MetaCardWrapper,
  MetaTitle,
  MetasArea,
  MetasContainer,
  ModalWrapper,
  TitleCard,
  WeeklyArea,
  WeeklyCard,
  WeeklyCardWrapper,
  WeeklyTitle,
} from "./styles";

import itemTeste from "../../assets/Item-test.svg.svg";
import { Trash } from "@phosphor-icons/react";
import { Modal } from "../../components/Modal";

import { useMetaContext } from "../../hooks/useMetaContext";
import { defaultTheme } from "../../styles/themes/default";

export function Metas() {
  const {
    user,
    modalVisibility,
    handleOpenModal,
    handleDeleteDaily,
    handleDeleteWeekly,
    deleteDailyLoading,
    deleteWeeklyLoading,
  } = useMetaContext();

  if (!user?.id) {
    return <p>Error no user</p>;
  }

  return (
    <>
      {modalVisibility && <Modal type="meta" />}

      <ModalWrapper>
        <button onClick={handleOpenModal}>Adicionar uma nova meta</button>
      </ModalWrapper>

      <MetasContainer>
        <DailyArea>
          <DailyTitle>Diárias</DailyTitle>

          <DiariaCardWrapper>
            <DailyCard>
              {user.dailies.length > 0 ? (
                user.dailies.map((daily) => {
                  return (
                    <Card padding={1.5} key={daily.id}>
                      <TitleCard>
                        <h3>{daily.title}</h3>
                        {deleteDailyLoading ? (
                          <Loading />
                        ) : (
                          <button onClick={() => handleDeleteDaily(daily.id)} disabled={deleteDailyLoading}>
                            <Trash size={20} color={defaultTheme["base-red"]} />
                          </button>
                        )}
                      </TitleCard>
                      <p>{daily.description}</p>
                    </Card>
                  );
                })
              ) : (
                <span>...</span>
              )}
            </DailyCard>
          </DiariaCardWrapper>
        </DailyArea>

        <WeeklyArea>
          <WeeklyTitle>Semanais</WeeklyTitle>

          <WeeklyCardWrapper>
            <WeeklyCard>
              {user.weeklies.length > 0 ? (
                user.weeklies.map((weekly) => {
                  return (
                    <Card padding={1.5} key={weekly.id}>
                      <TitleCard>
                        <h3>{weekly.title}</h3>
                        {deleteWeeklyLoading ? (
                          <Loading />
                        ) : (
                          <button onClick={() => handleDeleteWeekly(weekly.id)} disabled={deleteDailyLoading}>
                            <Trash size={20} color={defaultTheme["base-red"]} />
                          </button>
                        )}
                      </TitleCard>
                      <p>{weekly.description}</p>
                    </Card>
                  );
                })
              ) : (
                <span>...</span>
              )}
            </WeeklyCard>
          </WeeklyCardWrapper>
        </WeeklyArea>

        <MetasArea>
          <MetaTitle>Metas</MetaTitle>

          <MetaCardWrapper>
            <CardMeta>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardMeta>
          </MetaCardWrapper>
        </MetasArea>
      </MetasContainer>
    </>
  );
}
