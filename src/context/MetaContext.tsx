import axios from "axios";
import { addDays, isThursday, startOfDay, startOfWeek } from "date-fns";
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
  resetDay: string;
  isCompleted: boolean;
}

export interface Weekly {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  resetDay: string;
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

    async function fatchData() {
      await getUserData();
    }
    fatchData();
  }, []);

  useEffect(() => {
    async function handleResetMeta() {
      await user.diaries.forEach((diary) => {
        const now = new Date();
        const resetDayDate = new Date(diary.resetDay);
        now >= resetDayDate && handleResetDiary(diary.id);
      });

      await user.weeklies.forEach((weekly) => {
        const now = new Date();
        const resetWeekDate = new Date(weekly.resetDay);
        now >= resetWeekDate && handleResetWeekly(weekly.id);
      });
    }

    function handleResetDiary(id: string) {
      const updatedDiaries = user.diaries.map((diary) => {
        const timeNow = new Date();
        const resetDaily = startOfDay(addDays(timeNow, 1));

        if (diary.id === id) {
          return {
            ...diary,
            isCompleted: false,
            createdAt: timeNow.toISOString(),
            resetDay: resetDaily.toISOString(),
          };
        } else {
          return diary;
        }
      });
      const newUser = { ...user, diaries: updatedDiaries };
      axios.patch("http://localhost:3000/users/1", newUser);
    }

    function handleResetWeekly(id: string) {
      const updatedWeekly = user.weeklies.map((weekly) => {
        const timeNow = new Date();
        let resetWeek = startOfWeek(timeNow, { weekStartsOn: 4 }); // quinta

        if (isThursday(timeNow) && timeNow >= resetWeek) {
          resetWeek = startOfWeek(addDays(timeNow, 7), { weekStartsOn: 4 });
        }
        if (timeNow.getDay() >= 5) {
          resetWeek = startOfWeek(addDays(timeNow, 6), { weekStartsOn: 4 });
        }

        if (weekly.id === id) {
          return {
            ...weekly,
            isCompleted: false,
            createdAt: timeNow.toISOString(),
            resetDay: resetWeek.toISOString(),
          };
        } else {
          return weekly;
        }
      });
      const newUser = { ...user, weeklies: updatedWeekly };
      axios.patch("http://localhost:3000/users/1", newUser);
    }

    handleResetMeta();
  }, [user]);

  function handleCreateMeta(title: string, description: string, type: "diaria" | "semanal") {
    const newUser = { ...user };

    const now = new Date();
    const resetDay = startOfDay(addDays(now, 1));
    // let resetWeek = startOfWeek(now, { weekStartsOn: 4 }); // quinta

    // if (isThursday(now) && now >= resetWeek) {
    //   resetWeek = startOfWeek(addDays(now, 7), { weekStartsOn: 4 });
    // }
    // if (now.getDay() >= 5) {
    //   resetWeek = startOfWeek(addDays(now, 6), { weekStartsOn: 4 });
    // }

    function getCurrentTimePlusFiveMinutes(): Date {
      const currentTime = new Date();
      const fiveMinutesLater = new Date(currentTime.getTime() + 1 * 60 * 1000); // Add 5 minutes in milliseconds

      return fiveMinutesLater;
    }

    if (type === "diaria") {
      newUser.diaries.push({
        id: uuid(),
        title: title,
        description: description,
        isCompleted: false,
        createdAt: now.toISOString(),
        resetDay: resetDay.toISOString(),
      });
    }

    if (type === "semanal") {
      newUser.weeklies.push({
        id: uuid(),
        title: title,
        description: description,
        isCompleted: false,
        createdAt: now.toISOString(),
        // resetDay: resetWeek.toISOString(),
        resetDay: getCurrentTimePlusFiveMinutes().toISOString(),
      });
    }
    axios.patch("http://localhost:3000/users/1", newUser).then(({ data }) => setUser(data));
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
