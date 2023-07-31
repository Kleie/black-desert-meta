import { Card } from "../../components/UI/Card";
import {
  CardDiaria,
  // CardMeta,
  CardSemanal,
  CardWrapperDiaria,
  // CardWrapperMeta,
  CardWrapperSemanal,
  DiariaArea,
  // MetasArea,
  MetasContainer,
  ModalWrapper,
  SemanalArea,
  TimeInTitleDiaria,
  TimeInTitleSemanal,
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
  const { modalVisibility, handleOpenModal, diariaList, semanalList, MetaListwithoutOne } = useMetaContext();

  return (
    <>
      {modalVisibility && <Modal />}

      <ModalWrapper>
        <button onClick={handleOpenModal}>Adicionar uma nova meta</button>
      </ModalWrapper>

      <MetasContainer>
        <DiariaArea>
          <TitleDiaria>
            Diárias
            <TimeInTitleDiaria>2h horas restante</TimeInTitleDiaria>
          </TitleDiaria>

          <CardWrapperDiaria>
            <CardDiaria>
              {diariaList.length > 0 ? (
                diariaList.map((diaria) => {
                  return (
                    <Card padding={1.5} key={diaria.id}>
                      <TitleCard>
                        <h3>{diaria.title}</h3>
                        <button onClick={() => MetaListwithoutOne(diaria.id, "diaria")}>
                          <Trash size={20} color="#A9543F" />
                        </button>
                      </TitleCard>
                      <p>{diaria.description}</p>
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
          <TitleSemanal>
            Semanais
            <TimeInTitleSemanal>2h horas restante</TimeInTitleSemanal>
          </TitleSemanal>

          <CardWrapperSemanal>
            <CardSemanal>
              {semanalList.length > 0 ? (
                semanalList.map((semanal) => {
                  return (
                    <Card padding={1.5} key={semanal.id}>
                      <TitleCard>
                        <h3>{semanal.title}</h3>
                        <button onClick={() => MetaListwithoutOne(semanal.id, "semanal")}>
                          <Trash size={20} color="#A9543F" />
                        </button>
                      </TitleCard>
                      <p>{semanal.description}</p>
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
