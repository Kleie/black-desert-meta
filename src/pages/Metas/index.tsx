import { Card } from "../../components/UI/Card";
import {
  CardDiaria,
  // CardMeta,
  CardSemanal,
  CardWrapperDiaria,
  // CardWrapperMeta,
  CardWrapperSemanal,
  DiariaArea,
  Loading,
  // MetasArea,
  MetasContainer,
  ModalWrapper,
  SemanalArea,
  // TimeInTitleDiaria,
  // TimeInTitleSemanal,
  TitleCard,
  TitleDiaria,
  // TitleMeta,
  TitleSemanal,
} from "./styles";

// import itemTeste from "../../assets/Item-test.svg.svg";
import { Trash } from "@phosphor-icons/react";
import { Modal } from "../../components/Modal";

import { useMetaContext } from "../../hooks/useMetaContext";

export function Metas() {
  const {
    user,
    modalVisibility,
    handleOpenModal,
    handleDeleteDiary,
    handleDeleteWeekly,
    deleteDiaryLoading,
    deleteWeeklyLoading,
  } = useMetaContext();

  if (!user?.id) {
    return <p>Error no user</p>;
  }

  return (
    <>
      {modalVisibility && <Modal />}

      <ModalWrapper>
        <button onClick={handleOpenModal}>Adicionar uma nova meta</button>
      </ModalWrapper>

      <MetasContainer>
        <DiariaArea>
          <TitleDiaria>Diárias</TitleDiaria>

          <CardWrapperDiaria>
            <CardDiaria>
              {user.diaries.length > 0 ? (
                user.diaries.map((diary) => {
                  return (
                    <Card padding={1.5} key={diary.id}>
                      <TitleCard>
                        <h3>{diary.title}</h3>
                        {deleteDiaryLoading ? (
                          <Loading />
                        ) : (
                          <button onClick={() => handleDeleteDiary(diary.id)} disabled={deleteDiaryLoading}>
                            <Trash size={20} color="#A9543F" />
                          </button>
                        )}
                      </TitleCard>
                      <p>{diary.description}</p>
                    </Card>
                  );
                })
              ) : (
                <span>...</span>
              )}
            </CardDiaria>
          </CardWrapperDiaria>
        </DiariaArea>

        <SemanalArea>
          <TitleSemanal>Semanais</TitleSemanal>

          <CardWrapperSemanal>
            <CardSemanal>
              {user.weeklies.length > 0 ? (
                user.weeklies.map((weekly) => {
                  return (
                    <Card padding={1.5} key={weekly.id}>
                      <TitleCard>
                        <h3>{weekly.title}</h3>
                        {deleteWeeklyLoading ? (
                          <Loading />
                        ) : (
                          <button onClick={() => handleDeleteWeekly(weekly.id)} disabled={deleteDiaryLoading}>
                            <Trash size={20} color="#A9543F" />
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
            </CardSemanal>
          </CardWrapperSemanal>
        </SemanalArea>

        {/* <MetasArea>
          <TitleMeta>Metas</TitleMeta>

          <CardWrapperMeta>
            <CardMeta>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardMeta>

            <CardMeta>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardMeta>

            <CardMeta>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardMeta>
          </CardWrapperMeta>
        </MetasArea> */}
      </MetasContainer>
    </>
  );
}
