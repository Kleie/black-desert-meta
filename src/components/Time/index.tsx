import React, { useState, useEffect } from "react";
import { format, addDays, startOfWeek, startOfDay, differenceInSeconds } from "date-fns";

export function TimeLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  // Função para calcular o tempo restante até o próximo reset diário (00:00)
  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximoReset = startOfDay(addDays(agora, 1)); // Calcula o próximo reset diário (amanhã à meia-noite)
    const diferencaSegundos = differenceInSeconds(proximoReset, agora);
    const duracaoFormatada = format(new Date(0, 0, 0, 0, 0, diferencaSegundos), `HH:mm 'horas restantes'`);
    return duracaoFormatada;
  }

  // Atualizar o tempo restante quando o componente é montado
  useEffect(() => {
    const intervalId = setInterval(() => {
      const tempoRestanteAtualizado = calcularTempoRestante();
      setTempoRestante(tempoRestanteAtualizado);
    }, 60000);

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O array de dependências vazio garante que o efeito seja executado apenas uma vez na montagem do componente

  return <span>{tempoRestante}</span>;
}

export function WeekLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximoSabado = startOfWeek(addDays(agora, ((6 - agora.getDay() + 7) % 7) + 1)); // Calcula o próximo sábado
    const diferencaSegundos = differenceInSeconds(proximoSabado, agora);
    const duracaoFormatada = format(new Date(0, 0, 0, 0, 0, diferencaSegundos), `HH:mm 'horas restantes'`);
    return duracaoFormatada;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const tempoRestanteAtualizado = calcularTempoRestante();
      setTempoRestante(tempoRestanteAtualizado);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{tempoRestante}</span>;
}
