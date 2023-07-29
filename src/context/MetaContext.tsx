import { createContext, useState } from "react";

type MetaList = {
  title: string;
  description: string;
  id: string;
};

import { v4 as uuid } from "uuid";

interface ContextProps {
  modalVisibility: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleCreateMeta: (title: string, description: string, type: "diaria" | "semanal") => void;
  MetaListwithoutOne: (metaId: string, type: "diaria" | "semanal") => void;
  diariaList: MetaList[];
  semanalList: MetaList[];
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [diariaList, setDiariaList] = useState([] as MetaList[]);
  const [semanalList, setSemanalList] = useState([] as MetaList[]);

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  function handleCreateMeta(title: string, description: string, type: "diaria" | "semanal") {
    type === "diaria" &&
      setDiariaList((prevstate) => {
        const newDiaria = {
          title,
          description,
          id: uuid(),
        };
        return [...prevstate, newDiaria];
      });

    type === "semanal" &&
      setSemanalList((prevstate) => {
        const newDiaria = {
          title,
          description,
          id: uuid(),
        };
        return [...prevstate, newDiaria];
      });
  }

  function MetaListwithoutOne(metaId: string, type: "diaria" | "semanal") {
    type === "diaria" &&
      setDiariaList((prevstate) => {
        return prevstate.filter((item) => item.id !== metaId);
      });

    type === "semanal" &&
      setSemanalList((prevstate) => {
        return prevstate.filter((item) => item.id !== metaId);
      });
  }

  return (
    <Context.Provider
      value={{
        modalVisibility,
        handleOpenModal,
        handleCloseModal,
        handleCreateMeta,
        MetaListwithoutOne,
        diariaList,
        semanalList,
      }}
    >
      {children}
    </Context.Provider>
  );
}
