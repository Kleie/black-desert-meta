import { useState, useEffect } from "react";
import { addDays, startOfWeek, startOfDay, formatDistance, isThursday, formatDistanceStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

export function TimeLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximoReset = startOfDay(addDays(agora, 1)); // Calcula o próximo reset diário (amanhã à meia-noite)
    const distancia = formatDistance(agora, proximoReset, {
      addSuffix: true,
      locale: ptBR,
    });
    return distancia;
  }

  useEffect(() => {
    function atualizarTempoRestante() {
      const tempoRestanteAtualizado = calcularTempoRestante();
      setTempoRestante(tempoRestanteAtualizado);
    }

    atualizarTempoRestante(); // Atualiza o tempo restante imediatamente após o componente ser montado

    const intervalId = setInterval(atualizarTempoRestante, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{tempoRestante}</span>;
}

export function WeekLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const hoje = new Date();
    let proximaQuinta = startOfWeek(hoje, { weekStartsOn: 4 });

    // Se hoje é quinta-feira e já passou do horário da próxima quinta-feira, ajusta para a próxima semana
    if (isThursday(hoje) && hoje >= proximaQuinta) {
      proximaQuinta = startOfWeek(addDays(hoje, 7), { weekStartsOn: 4 });
    }

    // Se hoje for sexta-feira ou depois, calcula a distância até a próxima quinta-feira
    if (hoje.getDay() >= 5) {
      proximaQuinta = startOfWeek(addDays(hoje, 6), { weekStartsOn: 4 });
    }

    const distancia = formatDistanceStrict(new Date(), proximaQuinta, {
      // addSuffix: true,
      unit: "day",
      roundingMethod: "ceil",
      locale: ptBR,
    });

    return distancia;
  }

  useEffect(() => {
    function atualizarTempoRestante() {
      const tempoRestanteAtualizado = calcularTempoRestante();
      setTempoRestante(tempoRestanteAtualizado);
    }

    atualizarTempoRestante(); // Atualiza o tempo restante imediatamente após o componente ser montado

    const intervalId = setInterval(atualizarTempoRestante, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{tempoRestante}</span>;
}
