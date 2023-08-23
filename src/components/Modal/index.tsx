import { useState, useRef, useEffect } from "react";
import {
  BackgroundToCloseGrindLIst,
  Border,
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
  Item,
  ItemImageWrapper,
  ItemInputWrapper,
  ItemList,
  ItemListWrapper,
  ItemModal,
  LevelModal,
  ListArrow,
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
import polygon from "../../assets/polygon.svg";

import { useMetaContext } from "../../hooks/useMetaContext";
import { Button } from "../UI/Button";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../../data/querys";

interface ModalProps {
  type: "meta" | "grind";
}

interface GetItemsResponse {
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  price: string;
  tier: "1" | "2" | "3" | "4" | "5";
  image: string;
  type: "accessory" | "armor" | "weapon";
}

export function Modal(props: ModalProps) {
  const { data, loading, error } = useQuery<GetItemsResponse>(GET_ITEMS);

  const [radio, setRadio] = useState<"daily" | "weekly" | "meta">("daily");
  const [level, setLevel] = useState("V");

  const [isFocused, setIsFocused] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [grindLocale, setGrindLocale] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);

  const [selectedItem, setSelectedItem] = useState<Item>();
  const [itemInputFilter, setItemInputFilter] = useState("");

  const itemListRef = useRef<HTMLDivElement>(null);

  const { handleCloseModal, handleCreateDaily, handleCreateWeekly, createDailyLoading, createWeeklyLoading } =
    useMetaContext();

  function handleSelectRadio(targetRadio: "daily" | "weekly" | "meta") {
    setRadio(targetRadio);
  }

  function handleOnChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleOnChangeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionInput(event.target.value);
  }

  function onCreateNewMeta() {
    radio === "daily" && handleCreateDaily(titleInput, descriptionInput);
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (itemListRef.current && !itemListRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [itemListRef]);

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
                  <input type="radio" readOnly name="metas" value="diaria" checked={radio === "daily"} />
                  <label htmlFor="diaria" onClick={() => handleSelectRadio("daily")}>
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
                <ItemModal hasContent={!!selectedItem?.id} isFocused={isFocused}>
                  <label htmlFor="">Item</label>
                  <div>
                    {(isFocused && <span>{selectedItem?.image && <img src={selectedItem?.image} alt="" />}</span>) ||
                      (!!selectedItem?.id && (
                        <span>{selectedItem?.image && <img src={selectedItem?.image} alt="" />}</span>
                      ))}

                    <ItemInputWrapper ref={itemListRef}>
                      <input
                        type="text"
                        onChange={(e) => setItemInputFilter(e.target.value)}
                        value={itemInputFilter}
                        placeholder="Digite o nome to seu item."
                        onFocus={() => setIsFocused(true)}
                      />
                      <ListArrow collapsed={isFocused}>
                        <img src={polygon} alt="" />
                      </ListArrow>
                      {isFocused && (
                        <ItemList>
                          {data &&
                            data.items
                              .filter((item) => item.name.toLowerCase().includes(itemInputFilter.toLowerCase()))
                              .map((item) => (
                                <Item
                                  onClick={() => {
                                    setSelectedItem(item);
                                    setItemInputFilter(item.name);
                                    setIsFocused(false);
                                  }}
                                >
                                  <ItemImageWrapper>
                                    <img src={item.image} alt="" />
                                  </ItemImageWrapper>
                                  <span>{item.name}</span>
                                </Item>
                              ))}
                        </ItemList>
                      )}
                    </ItemInputWrapper>
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
              {createDailyLoading || createWeeklyLoading ? (
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
