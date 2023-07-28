import { Card } from "../../components/UI/Card";
<<<<<<< HEAD
import {
  CardContainerDiariasArea,
  CardContainerMetaArea,
  CardContainerSemanaisArea,
  CardWrapperDiariasAndSemanais,
  CardWrapperMetaArea,
  DiariasArea,
  MetasArea,
  MetasContainer,
  ModalButtonContainer,
  SemanaisArea,
  TimeInTitleDiariasArea,
  TimeInTitleSemanaisArea,
  TitleCard,
  TitleDiariasArea,
  TitleMetaArea,
  TitleSemanaisArea,
} from "./styles";
=======
import { InputArea, MetasContainer, BaseAreas, CardWrapper, DiariasArea, MetasArea, SemanaisArea } from "./styles";
>>>>>>> d219c923550ea69d1b322465c0af5c6f72944e81

import itemTeste from "../../assets/Item-test.svg.svg";
import { Trash } from "@phosphor-icons/react";
import { Modal } from "../../components/Modal";

import { useMetaContext } from "../../hooks/useMetaContext";

export function Metas() {
  const { modalVisibility, handleOpenModal, diariaList, semanalList } = useMetaContext();

  return (
    <>
      {modalVisibility && <Modal />}

      <ModalButtonContainer>
        <button onClick={handleOpenModal}>Adicionar uma nova meta</button>
      </ModalButtonContainer>
      <MetasContainer>
        <DiariasArea>
          <TitleDiariasArea>
            Diárias
            <TimeInTitleDiariasArea>2h horas restante</TimeInTitleDiariasArea>
          </TitleDiariasArea>

          <CardContainerDiariasArea>
            {diariaList.length > 0 ? (
              diariaList.map((diaria) => {
                return (
                  <Card padding={1.5} key={diaria.id}>
                    <TitleCard>
                      <h3>{diaria.title}</h3>
                      <button>
                        <Trash size={20} color="#A9543F" />
                      </button>
                    </TitleCard>
                    <p>{diaria.description}</p>
                  </Card>
                );
              })
            ) : (
              <span>Sem Diaria</span>
            )}
          </CardContainerDiariasArea>
        </DiariasArea>

        <SemanaisArea>
          <TitleSemanaisArea>
            Semanais
            <TimeInTitleSemanaisArea>2h horas restante</TimeInTitleSemanaisArea>
          </TitleSemanaisArea>

          <CardContainerSemanaisArea>
            <CardWrapperDiariasAndSemanais>
              {semanalList.length > 0 ? (
                semanalList.map((diaria) => {
                  return (
                    <Card padding={1.5} key={diaria.id}>
                      <TitleCard>
                        <h3>{diaria.title}</h3>
                        <button>
                          <Trash size={20} color="#A9543F" />
                        </button>
                      </TitleCard>
                      <p>{diaria.description}</p>
                    </Card>
                  );
                })
              ) : (
                <span>Sem semanal</span>
              )}
            </CardWrapperDiariasAndSemanais>
          </CardContainerSemanaisArea>
        </SemanaisArea>

        <MetasArea>
          <TitleMetaArea>Metas</TitleMetaArea>

          <CardContainerMetaArea>
            <CardWrapperMetaArea>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardWrapperMetaArea>

            <CardWrapperMetaArea>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardWrapperMetaArea>

            <CardWrapperMetaArea>
              <Card>
                <img src={itemTeste} alt="" />
                <div>
                  <h3>Cinto Tungrade V</h3>
                  <p>10.000.000</p>
                </div>
              </Card>
            </CardWrapperMetaArea>
          </CardContainerMetaArea>
        </MetasArea>
      </MetasContainer>
    </>
  );
}
