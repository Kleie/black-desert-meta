import { addDays, startOfDay } from "date-fns";
import { createContext, useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../data/querys";
import { CREATE_DIARY, CREATE_WEEKLY, DELETE_DIARY, DELETE_WEEKLY, UPDATE_META_IS_COMPLETED } from "../data/mutations";
import { redirect, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface ContextProps {
  modalVisibility: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleCreateDiary: (title: string, description: string) => void;
  handleCreateWeekly: (title: string, description: string) => void;
  handleDeleteDiary: (metaId: string) => void;
  handleDeleteWeekly: (metaId: string) => void;
  handleMetaCompleted: (id: string, type: "diary" | "weekly") => void;
  handleLogout: () => void;
  user?: User;
  loading: boolean;
  createDiaryLoading: boolean;
  createWeeklyLoading: boolean;
  deleteDiaryLoading: boolean;
  deleteWeeklyLoading: boolean;
}

export interface GetUserResponse {
  user: User;
}

export interface CreateDiaryResponse {
  createDiary: Diary;
}

export interface CreateWeeklyResponse {
  createWeekly: Weekly;
}

export interface User {
  __typename: string;
  id: string;
  discord_id: string;
  username: string;
  avatar: string;
  diaries: Diary[];
  weeklies: Weekly[];
  createdAt: string;
  updatedAt: string;
}

export interface Diary {
  __typename: string;
  id: string;
  userId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  resetDay: string;
  createdAt: string;
  updatedAt: string;
}

export interface Weekly {
  __typename: string;
  id: string;
  userId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  resetDay: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewDiary {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  resetDay: string;
  createdAt: string;
}

export interface NewWeekly {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  resetDay: string;
  createdAt: string;
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({} as User);
  const [modalVisibility, setModalVisibility] = useState(false);

  const { data, loading, error } = useQuery<GetUserResponse>(GET_USER);

  const [createDiary, { loading: createDiaryLoading }] = useMutation<CreateDiaryResponse>(CREATE_DIARY);
  const [createWeekly, { loading: createWeeklyLoading }] = useMutation<CreateWeeklyResponse>(CREATE_WEEKLY);
  const [updateMetaIsCompleted] = useMutation<User>(UPDATE_META_IS_COMPLETED);
  const [deleteDiary, { loading: deleteDiaryLoading }] = useMutation(DELETE_DIARY);
  const [deleteWeekly, { loading: deleteWeeklyLoading }] = useMutation(DELETE_WEEKLY);

  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (error) {
      navigate("/login");
    }

    if (!loading && !error && data) {
      setUser(data.user);
    }
  }, [data, loading, error]);

  async function handleCreateDiary(title: string, description: string) {
    const now = new Date();
    const resetDay = startOfDay(addDays(now, 1));

    const newDiary = {
      title: title,
      description: description,
      resetDay: resetDay.toISOString(),
    };
    const { data } = await createDiary({ variables: { userId: user?.id, newDiary: newDiary } });
    data && console.log("CRIEI ISSO AQUI Ó: ", data);
    data && setUser((prevState) => ({ ...prevState, diaries: [...prevState.diaries, data.createDiary] }));
  }

  async function handleCreateWeekly(title: string, description: string) {
    function resetWeek() {
      const now = new Date();
      const dayOfWeek = now.getDay(); // Dia da semana atual (0 = domingo, 1 = segunda, ..., 6 = sábado)

      // Calcula a diferença de dias entre o dia atual e a próxima quinta-feira (4).
      const daysUntilNextThursday = (4 - dayOfWeek + 7) % 7;

      // Adiciona a diferença de dias para obter a próxima quinta-feira.
      const resetWeek = addDays(now, daysUntilNextThursday);

      return startOfDay(resetWeek);
    }

    const newWeekly = {
      title: title,
      description: description,
      resetDay: resetWeek().toISOString(),
    };
    const { data } = await createWeekly({ variables: { userId: user?.id, newWeekly: newWeekly } });
    data && setUser((prevState) => ({ ...prevState, weeklies: [...prevState.weeklies, data.createWeekly] }));
  }

  async function handleDeleteDiary(metaId: string) {
    const diariesWhithoutOne = user.diaries.filter((diary) => {
      if (diary.id !== metaId) {
        return diary;
      }
    });
    await deleteDiary({ variables: { id: metaId } });
    setUser((prevState) => ({ ...prevState, diaries: diariesWhithoutOne }));
  }

  async function handleDeleteWeekly(metaId: string) {
    const weekliesWhithoutOne = user.weeklies.filter((weeklie) => {
      if (weeklie.id !== metaId) {
        return weeklie;
      }
    });
    await deleteWeekly({ variables: { id: metaId } });
    setUser((prevState) => ({ ...prevState, weeklies: weekliesWhithoutOne }));
  }

  function handleLogout() {
    removeCookie("token");
    navigate("/login");
  }

  function handleMetaCompleted(id: string, type: "diary" | "weekly") {
    updateMetaIsCompleted({
      variables: { id: id, metaType: type },
    });
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
        handleCreateDiary,
        handleCreateWeekly,
        handleDeleteDiary,
        handleDeleteWeekly,
        handleMetaCompleted,
        handleLogout,
        user,
        loading,
        createDiaryLoading,
        createWeeklyLoading,
        deleteDiaryLoading,
        deleteWeeklyLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
