import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export interface User {
  id: string;
  username: string;
  diaries: Diary[];
  weeklies: Weekly[];
}

export interface Diary {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isCompleted: boolean;
}

export interface Weekly {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isCompleted: boolean;
}

interface ContextProps {
  modalVisibility: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleCreateMeta: (title: string, description: string, type: "diaria" | "semanal") => void;
  handleDeleteMeta: (metaId: string, type: "diaria" | "semanal") => void;
  handleMetaCompleted: (id: string, type: "diaria" | "semanal") => void;
  handleResetAllMetas: (type: "diaria" | "semanal") => void;
  user: User;
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({} as User);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get("http://localhost:3000/users/1");
      setUser(res.data);
    }
    getUserData();
  }, []);

  function handleCreateMeta(title: string, description: string, type: "diaria" | "semanal") {
    const newUser = { ...user };

    if (type === "diaria") {
      newUser.diaries.push({
        id: uuid(),
        title: title,
        description: description,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      });
    }

    if (type === "semanal") {
      newUser.weeklies.push({
        id: uuid(),
        title: title,
        description: description,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      });
    }
    axios.put("http://localhost:3000/users/1", newUser).then(({ data }) => setUser(data));
  }

  function handleDeleteMeta(metaId: string, type: "diaria" | "semanal") {
    const newUser = { ...user };

    if (type === "diaria") {
      const newDiary = newUser.diaries.filter((diary) => metaId !== diary.id);
      newUser.diaries = newDiary;
    }
    if (type === "semanal") {
      const newWeekly = newUser.weeklies.filter((weekly) => metaId !== weekly.id);
      newUser.weeklies = newWeekly;
    }

    axios.put("http://localhost:3000/users/1", newUser).then(({ data }) => setUser(data));
  }

  function handleMetaCompleted(id: string, type: "diaria" | "semanal") {
    const newUser = { ...user };

    if (type === "diaria") {
      const newDiary = newUser.diaries.map((diary) => {
        if (diary.id === id) {
          diary.isCompleted = !diary.isCompleted;
          return diary;
        }
        return diary;
      });
      newUser.diaries = newDiary;
    }
    if (type === "semanal") {
      const newWeekly = newUser.weeklies.map((weekly) => {
        if (weekly.id === id) {
          weekly.isCompleted = !weekly.isCompleted;
          return weekly;
        }
        return weekly;
      });
      newUser.weeklies = newWeekly;
    }
    axios.put("http://localhost:3000/users/1", newUser).then(({ data }) => setUser(data));
  }

  function handleResetAllMetas(type: "diaria" | "semanal") {
    const newUser = { ...user };
    if (type === "diaria") {
      const newDiary = newUser.diaries.map((diary) => {
        diary.isCompleted = !diary.isCompleted;
        return diary;
      });
      newUser.diaries = newDiary;
    }
    if (type === "semanal") {
      const newWeekly = newUser.weeklies.map((weekly) => {
        weekly.isCompleted = !weekly.isCompleted;
        return weekly;
      });
      newUser.weeklies = newWeekly;
    }
    axios.put("http://localhost:3000/users/1", newUser).then(({ data }) => setUser(data));
  }

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  return (
    <Context.Provider
      value={{
        modalVisibility,
        handleOpenModal,
        handleCloseModal,
        handleCreateMeta,
        handleDeleteMeta,
        handleMetaCompleted,
        handleResetAllMetas,
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
}
