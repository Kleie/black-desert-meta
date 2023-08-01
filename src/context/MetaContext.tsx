import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

type MetaList = {
  title: string;
  description: string;
  id: string;
  isCompleted: boolean;
};

interface ContextProps {
  modalVisibility: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleCreateMeta: (title: string, description: string, type: "diaria" | "semanal") => void;
  MetaListwithoutOne: (metaId: string, type: "diaria" | "semanal") => void;
  handleMetaCompleted: (id: string, type: "diaria" | "semanal") => void;
  handleResetAllMetas: (type: "diaria" | "semanal") => void;
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
          isCompleted: false,
        };
        return [...prevstate, newDiaria];
      });

    type === "semanal" &&
      setSemanalList((prevstate) => {
        const newDiaria = {
          title,
          description,
          id: uuid(),
          isCompleted: false,
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

  function handleMetaCompleted(id: string, type: "diaria" | "semanal") {
    type === "diaria" &&
      setDiariaList((prevstate) => {
        return prevstate.map((diaria) => {
          if (diaria.id === id) {
            return { ...diaria, isCompleted: !diaria.isCompleted };
          }
          return diaria;
        });
      });
    // diariaList.map((diaria) => {
    //   return diaria;
    // });

    type === "semanal" &&
      setSemanalList((prevstate) => {
        return prevstate.map((semanal) => {
          if (semanal.id === id) {
            return { ...semanal, isCompleted: !semanal.isCompleted };
          }
          return semanal;
        });
      });
  }

  function handleResetAllMetas(type: "diaria" | "semanal") {
    if (type === "diaria") {
      const resetAll = diariaList.map((diaria) => {
        diaria.isCompleted = false;
        return diaria;
      });
      setDiariaList(resetAll);
    } else {
      const resetAll = semanalList.map((semanal) => {
        semanal.isCompleted = false;
        return semanal;
      });
      setSemanalList(resetAll);
    }
  }

  return (
    <Context.Provider
      value={{
        modalVisibility,
        handleOpenModal,
        handleCloseModal,
        handleCreateMeta,
        MetaListwithoutOne,
        handleMetaCompleted,
        handleResetAllMetas,
        diariaList,
        semanalList,
      }}
    >
      {children}
    </Context.Provider>
  );
}
