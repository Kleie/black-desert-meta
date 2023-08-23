import { useState } from "react";
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

import { Trash } from "@phosphor-icons/react";
import { Modal } from "../../components/Modal";

import { useMetaContext } from "../../hooks/useMetaContext";
import { defaultTheme } from "../../styles/themes/default";
import { Button } from "../../components/UI/Button";

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

  const [deletingMeta, setDeletingMeta] = useState("");

  if (!user?.id) {
    return <p>Error no user</p>;
  }

  return (
    <>
      {modalVisibility && <Modal type="meta" />}

      <ModalWrapper>
        <Button onClick={handleOpenModal}>Adicionar uma nova meta</Button>
      </ModalWrapper>

      <MetasContainer>
        <DailyArea>
          <DailyTitle>Diárias</DailyTitle>

          <DiariaCardWrapper>
            {user.dailies.length > 0 ? (
              user.dailies.map((daily) => {
                return (
                  <DailyCard>
                    <Card padding={1.5} key={daily.id}>
                      <TitleCard>
                        <h3>{daily.title}</h3>
                        {deleteDailyLoading && deletingMeta === daily.id ? (
                          <Loading />
                        ) : (
                          <button
                            onClick={() => {
                              setDeletingMeta(daily.id);
                              handleDeleteDaily(daily.id);
                            }}
                            disabled={deleteDailyLoading}
                          >
                            <Trash size={20} color={defaultTheme["base-red"]} />
                          </button>
                        )}
                      </TitleCard>
                      <p>{daily.description}</p>
                    </Card>
                  </DailyCard>
                );
              })
            ) : (
              <span>...</span>
            )}
          </DiariaCardWrapper>
        </DailyArea>

        <WeeklyArea>
          <WeeklyTitle>Semanais</WeeklyTitle>

          <WeeklyCardWrapper>
            {user.weeklies.length > 0 ? (
              user.weeklies.map((weekly) => {
                return (
                  <WeeklyCard>
                    <Card padding={1.5} key={weekly.id}>
                      <TitleCard>
                        <h3>{weekly.title}</h3>
                        {deleteWeeklyLoading && deletingMeta === weekly.id ? (
                          <Loading />
                        ) : (
                          <button
                            onClick={() => {
                              setDeletingMeta(weekly.id);
                              handleDeleteWeekly(weekly.id);
                            }}
                            disabled={deleteDailyLoading}
                          >
                            <Trash size={20} color={defaultTheme["base-red"]} />
                          </button>
                        )}
                      </TitleCard>
                      <p>{weekly.description}</p>
                    </Card>
                  </WeeklyCard>
                );
              })
            ) : (
              <span>...</span>
            )}
          </WeeklyCardWrapper>
        </WeeklyArea>

        <MetasArea>
          <MetaTitle>Metas</MetaTitle>

          <MetaCardWrapper>
            {user.goals.length > 0 ? (
              user.goals.map(({ id, item }) => (
                <CardMeta key={id}>
                  <Card>
                    <img src={item.image} alt="" />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.price.toLocaleString("pt-BR")}</p>
                    </div>
                  </Card>
                </CardMeta>
              ))
            ) : (
              <p>Você ainda não tem nenhuma meta</p>
            )}
          </MetaCardWrapper>
        </MetasArea>
      </MetasContainer>
    </>
  );
}
