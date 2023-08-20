import { useState, useRef } from "react";
import {
  BackgroundToCloseGrindLIst,
  Border,
  Button,
  ButtonModal,
  DescriptionModal,
  FooterModal,
  GrindDrops,
  GrindInfo,
  GrindSelected,
  GrindTitle,
  GrindWrapper,
  InputStyled,
  InputWrapper,
  ItemModal,
  LevelModal,
  Loading,
  MetaModal,
  MetaWrapper,
  ModalBackGround,
  ModalContainer,
  ModalWrapper,
  SelectMeta,
  TitleModal,
  ULStyled,
} from "./styled";

import gyfin from "../../assets/gyfin.svg";
import agrisIcon from "../../assets/agris-icon.svg";
import border from "../../assets/border-icon.svg";

import { useMetaContext } from "../../hooks/useMetaContext";

interface ModalProps {
  type: "meta" | "grind";
}

export function Modal(props: ModalProps) {
  const [radio, setRadio] = useState<"diary" | "weekly" | "meta">("diary");
  const [level, setLevel] = useState("V");

  const [isFocused, setIsFocused] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [grindLocale, setGrindLocale] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const grindInputRef = useRef<HTMLInputElement>(null);

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

  function handleSelectListItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setGrindLocale(e.currentTarget.innerHTML);
    setInputIsFocused(false);
  }

  return (
    <ModalContainer>
      <ModalBackGround onClick={handleCloseModal} />
      {props.type === "meta" ? (
        <ModalWrapper>
          <MetaWrapper>
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
          </MetaWrapper>
        </ModalWrapper>
      ) : (
        <ModalWrapper>
          <GrindWrapper>
            <BackgroundToCloseGrindLIst onClick={() => setInputIsFocused(false)} />
            <InputWrapper>
              <InputStyled
                type="text"
                value={grindLocale}
                onChange={(e) => setGrindLocale(e.target.value)}
                ref={grindInputRef}
                onFocus={() => setInputIsFocused(true)}
              />

              {inputIsFocused && (
                <ULStyled>
                  <li onClick={handleSelectListItem}>item 1</li>
                  <li onClick={handleSelectListItem}>item 2</li>
                  <li onClick={handleSelectListItem}>item 3</li>
                </ULStyled>
              )}
            </InputWrapper>

            {grindLocale && (
              <GrindSelected>
                <GrindTitle>
                  <h1>Gyfin Rhasia Temple</h1>
                  <img src={gyfin} alt="" />
                </GrindTitle>
                <Border>
                  <img src={border} alt="" />
                </Border>
                <GrindInfo>
                  <label htmlFor="hour minutes">Timer:</label>
                  <input type="number" id="hour" name="hour" min={1} max={24} />
                  <span>:</span>
                  <input type="number" id="minutes" name="minutes" min={0} max={60} />

                  <div>
                    <span>Silver --</span>
                    <span>Trash/hr --</span>
                  </div>
                </GrindInfo>
                <Border>
                  <img src={border} alt="" />
                </Border>
                <GrindDrops>
                  <img src={agrisIcon} alt="" />
                  <ul>
                    <li>
                      <span>drop01</span>
                      <input type="number" min={0} id="drop1" name="drop1" />
                    </li>
                    <li>
                      <span>item02</span>
                      <input type="number" min={0} id="item2" name="item2" />
                    </li>
                    <li>
                      <span>item03</span>
                      <input type="number" min={0} id="item3" name="item3" />
                    </li>
                    <li>
                      <span>item04</span>
                      <input type="number" min={0} id="item4" name="item4" />
                    </li>
                    <li>
                      <span>item05</span>
                      <input type="number" min={0} id="item5" name="item5" />
                    </li>
                    <li>
                      <span>item06</span>
                      <input type="number" min={0} id="item6" name="item6" />
                    </li>
                    <li>
                      <span>item07</span>
                      <input type="number" min={0} id="item7" name="item7" />
                    </li>
                    <li>
                      <span>item08</span>
                      <input type="number" min={0} id="item8" name="item8" />
                    </li>
                    <li>
                      <span>item09</span>
                      <input type="number" min={0} id="item9" name="item9" />
                    </li>
                    <li>
                      <span>item10</span>
                      <input type="number" min={0} id="item10" name="item10" />
                    </li>
                    <li>
                      <span>item11</span>
                      <input type="number" min={0} id="item11" name="item11" />
                    </li>
                    <li>
                      <span>item12</span>
                      <input type="number" min={0} id="item12" name="item12" />
                    </li>
                    <li>
                      <span>item13</span>
                      <input type="number" min={0} id="item13" name="item13" />
                    </li>
                  </ul>
                </GrindDrops>
              </GrindSelected>
            )}

            <FooterModal>
              <Button>Adicionar</Button>

              <button onClick={handleCloseModal}>Cancelar</button>
            </FooterModal>
          </GrindWrapper>
        </ModalWrapper>
      )}
    </ModalContainer>
  );
}
