import { addDays, startOfDay } from "date-fns";
import { createContext, useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../data/querys";
import {
  CREATE_DIARY,
  CREATE_WEEKLY,
  DELETE_DIARY,
  DELETE_WEEKLY,
  UPDATE_DAILY_IS_COMPLETED,
  UPDATE_WEEKLY_IS_COMPLETED,
} from "../data/mutations";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface ContextProps {
  modalVisibility: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleCreateDaily: (title: string, description: string) => void;
  handleCreateWeekly: (title: string, description: string) => void;
  handleDeleteDaily: (metaId: string) => void;
  handleDeleteWeekly: (metaId: string) => void;
  handleLogout: () => void;
  handleDiaryCompleted: (dailyToChange: Daily) => void;
  user?: User;
  loading: boolean;
  createDailyLoading: boolean;
  createWeeklyLoading: boolean;
  deleteDailyLoading: boolean;
  deleteWeeklyLoading: boolean;
}

export interface GetUserResponse {
  user: User;
}

export interface CreateDailyResponse {
  createDaily: Daily;
}

export interface CreateWeeklyResponse {
  createWeekly: Weekly;
}

export interface User {
  id: string;
  discord_id: string;
  username: string;
  avatar: string;
  goals: Goal[];
  dailies: Daily[];
  weeklies: Weekly[];
}

export interface Daily {
  id: string;
  userId: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface Weekly {
  id: string;
  userId: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

type Item = {
  id: string;
  name: string;
  price: number;
  tier: number;
  image: string;
  type: string;
};

type Goal = {
  id: string;
  item: Item;
};

export interface NewDaily {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface NewWeekly {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({} as User);
  const [modalVisibility, setModalVisibility] = useState(false);

  const { data, loading, error } = useQuery<GetUserResponse>(GET_USER);

  const [createDaily, { loading: createDailyLoading }] = useMutation<CreateDailyResponse>(CREATE_DIARY);
  const [createWeekly, { loading: createWeeklyLoading }] = useMutation<CreateWeeklyResponse>(CREATE_WEEKLY);
  const [updateDailyIsCompleted] = useMutation<User>(UPDATE_DAILY_IS_COMPLETED);
  const [updateWeeklyIsCompleted] = useMutation<User>(UPDATE_WEEKLY_IS_COMPLETED);
  
  const [deleteDaily, { loading: deleteDailyLoading }] = useMutation(DELETE_DIARY);
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
  }, [navigate, data, loading, error]);

  async function handleCreateDaily(title: string, description: string) {
    const now = new Date();
    const resetDay = startOfDay(addDays(now, 1));

    const newDaily = {
      title: title,
      description: description,
      resetDay: resetDay.toISOString(),
    };
    const { data } = await createDaily({ variables: { userId: user?.id, newDaily: newDaily } });
    data && setUser((prevState) => ({ ...prevState, dailies: [...prevState.dailies, data.createDaily] }));
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

  async function handleDeleteDaily(metaId: string) {
    const dailiesWhithoutOne = user.dailies.filter((daily) => {
      if (daily.id !== metaId) {
        return daily;
      }
    });
    await deleteDaily({ variables: { id: metaId } });
    setUser((prevState) => ({ ...prevState, dailies: dailiesWhithoutOne }));
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

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  async function handleDiaryCompleted(dailyToChange: Daily) {
    setUser((prevstate) => {
      const newDailyList = prevstate.dailies.map((daily) => {
        if (daily.id === dailyToChange.id) {
          return { ...daily, isCompleted: true };
        }

        return daily;
      });
      return { ...prevstate, dailies: newDailyList };
    });

    await updateDailyIsCompleted({
      variables: { updateDailyIsCompletedId: dailyToChange.id },
    });
  }

  console.log(user);
  return (
    <Context.Provider
      value={{
        modalVisibility,
        handleOpenModal,
        handleCloseModal,
        handleCreateDaily,
        handleCreateWeekly,
        handleDeleteDaily,
        handleDeleteWeekly,
        handleLogout,
        handleDiaryCompleted,
        user,
        loading,
        createDailyLoading,
        createWeeklyLoading,
        deleteDailyLoading,
        deleteWeeklyLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
