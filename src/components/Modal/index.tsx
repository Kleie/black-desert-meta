import { useState } from "react";
import {
  Button,
  DescriptionModal,
  FooterModal,
  Loading,
  ModalContainer,
  ModalWrapper,
  SelectMeta,
  TitleModal,
} from "./styled";
import { useMetaContext } from "../../hooks/useMetaContext";

export function Modal() {
  const [radio, setRadio] = useState<"diary" | "weekly">("diary");
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const { handleCloseModal, handleCreateDiary, handleCreateWeekly, createDiaryLoading, createWeeklyLoading } =
    useMetaContext();

  function handleSelectRadio(targetRadio: "diary" | "weekly") {
    setRadio(targetRadio);
  }

  function handleOnChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleOnChangeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionInput(event.target.value);
  }

  function onCreateNewMeta() {
    radio === "diary" && handleCreateDiary(titleInput, descriptionInput);
    radio === "weekly" && handleCreateWeekly(titleInput, descriptionInput);

    setTitleInput("");
    setDescriptionInput("");
  }

  return (
    <ModalContainer>
      <ModalWrapper>
        <TitleModal>
          <label htmlFor="">Titulo</label>
          <input type="text" onChange={handleOnChangeTitle} value={titleInput} placeholder="Digite o titulo da meta." />
        </TitleModal>
        <DescriptionModal>
          <label htmlFor="">Descrição</label>
          <textarea
            placeholder="Digite a descrição da meta."
            onChange={handleOnChangeDescription}
            value={descriptionInput}
          />
        </DescriptionModal>
        <SelectMeta>
          <label>Meta</label>
          <div>
            <div>
              <input type="radio" readOnly name="meta" value="diaria" checked={radio === "diary"} />
              <label htmlFor="diaria" onClick={() => handleSelectRadio("diary")}>
                Diaria
              </label>
            </div>
            <div>
              <input type="radio" readOnly name="meta" value="semanal" checked={radio === "weekly"} />
              <label htmlFor="semanal" onClick={() => handleSelectRadio("weekly")}>
                Semanal
              </label>
            </div>
          </div>
        </SelectMeta>
        <FooterModal>
          {createDiaryLoading || createWeeklyLoading ? (
            <Loading />
          ) : (
            <Button onClick={onCreateNewMeta} disabled={titleInput.length <= 0 && descriptionInput.length <= 0}>
              Adicionar
            </Button>
          )}

          <button onClick={handleCloseModal}>Cancelar</button>
        </FooterModal>
      </ModalWrapper>
    </ModalContainer>
  );
}
