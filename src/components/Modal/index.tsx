import { useState } from "react";
import {
  Button,
  ButtonModal,
  DescriptionModal,
  FooterModal,
  ItemModal,
  LevelModal,
  Loading,
  MetaModal,
  ModalContainer,
  ModalWrapper,
  SelectMeta,
  TitleModal,
} from "./styled";
import { useMetaContext } from "../../hooks/useMetaContext";

export function Modal() {
  const [radio, setRadio] = useState<"diary" | "weekly" | "meta">("diary");
  const [level, setLevel] = useState("V");

  const [isFocused, setIsFocused] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const { handleCloseModal, handleCreateDiary, handleCreateWeekly, createDiaryLoading, createWeeklyLoading } =
    useMetaContext();

  function handleSelectRadio(targetRadio: "diary" | "weekly" | "meta") {
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

  function handleLevel(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLevel(event.currentTarget.innerHTML);
  }
  return (
    <ModalContainer>
      <ModalWrapper>
        <SelectMeta>
          <label>Meta</label>
          <div>
            <div>
              <input type="radio" readOnly name="metas" value="diaria" checked={radio === "diary"} />
              <label htmlFor="diaria" onClick={() => handleSelectRadio("diary")}>
                Diaria
              </label>
            </div>
            <div>
              <input type="radio" readOnly name="metas" value="semanal" checked={radio === "weekly"} />
              <label htmlFor="semanal" onClick={() => handleSelectRadio("weekly")}>
                Semanal
              </label>
            </div>
            <div>
              <input type="radio" readOnly name="metas" value="meta" checked={radio === "meta"} />
              <label htmlFor="meta" onClick={() => handleSelectRadio("meta")}>
                Meta
              </label>
            </div>
          </div>
        </SelectMeta>

        {radio === "meta" ? (
          <MetaModal>
            <ItemModal>
              <label htmlFor="">Item</label>
              <div>
                {isFocused && <span></span>}
                <input
                  type="text"
                  onChange={handleOnChangeTitle}
                  value={titleInput}
                  placeholder="Digite o titulo da meta."
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
            </ItemModal>
            <LevelModal>
              <span>Nivel de aprimoramento</span>
              <ul>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "V"}>
                    V
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "IV"}>
                    IV
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "III"}>
                    III
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "II"}>
                    II
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "I"}>
                    I
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "15"}>
                    15
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "14"}>
                    14
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "13"}>
                    13
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "12"}>
                    12
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "11"}>
                    11
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "10"}>
                    10
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "9"}>
                    9
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "8"}>
                    8
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "7"}>
                    7
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "6"}>
                    6
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "5"}>
                    5
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "4"}>
                    4
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "3"}>
                    3
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "1"}>
                    1
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "2"}>
                    2
                  </ButtonModal>
                </li>
                <li>
                  <ButtonModal onClick={handleLevel} selected={level === "0"}>
                    0
                  </ButtonModal>
                </li>
              </ul>
            </LevelModal>
          </MetaModal>
        ) : (
          <>
            <TitleModal>
              <label htmlFor="">Titulo</label>
              <input
                type="text"
                onChange={handleOnChangeTitle}
                value={titleInput}
                placeholder="Digite o titulo da meta."
              />
            </TitleModal>
            <DescriptionModal>
              <label htmlFor="">Descrição</label>
              <textarea
                placeholder="Digite a descrição da meta."
                onChange={handleOnChangeDescription}
                value={descriptionInput}
              />
            </DescriptionModal>
          </>
        )}

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
