import { startOfDay, addDays, startOfWeek } from "date-fns";
// import axios from "axios";

// const obj = {
//   id: "1",
//   username: "Farelo",
//   diaries: [],
//   weeklies: [],
// };

// axios.put("http://localhost:3000/users/1", obj).then((res) => console.log(res.data));

function diaDeReset() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // Dia da semana atual (0 = domingo, 1 = segunda, ..., 6 = sábado)

  // Calcula a diferença de dias entre o dia atual e a próxima quinta-feira (4).
  const daysUntilNextThursday = (4 - dayOfWeek + 7) % 7;

  // Adiciona a diferença de dias para obter a próxima quinta-feira.
  const resetWeek = addDays(now, daysUntilNextThursday);

  return startOfDay(resetWeek);
}

console.log(diaDeReset());
