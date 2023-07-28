import { useState } from "react";
import { DescriptionModal, FooterModal, ModalContainer, ModalWrapper, SelectMeta, TitleModal } from "./styled";
import { useMetaContext } from "../../hooks/useMetaContext";

export function Modal() {
  const [radio, setRadio] = useState<"diaria" | "semanal">("diaria");
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const { handleCloseModal, handleCreateMeta } = useMetaContext();

  function handleSelectRadio(targetRadio: "diaria" | "semanal") {
    setRadio(targetRadio);
  }

  function handleOnChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleOnChangeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionInput(event.target.value);
  }

  function onCreateNewMeta() {
    handleCreateMeta(titleInput, descriptionInput, radio);
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
              <input type="radio" readOnly name="meta" value="diaria" checked={radio === "diaria"} />
              <label htmlFor="diaria" onClick={() => handleSelectRadio("diaria")}>
                Diaria
              </label>
            </div>
            <div>
              <input type="radio" readOnly name="meta" value="semanal" checked={radio === "semanal"} />
              <label htmlFor="semanal" onClick={() => handleSelectRadio("semanal")}>
                Semanal
              </label>
            </div>
          </div>
        </SelectMeta>
        <FooterModal>
          <button onClick={onCreateNewMeta}>Adicionar</button>
          <button onClick={handleCloseModal}>Cancelar</button>
        </FooterModal>
      </ModalWrapper>
    </ModalContainer>
  );
}
