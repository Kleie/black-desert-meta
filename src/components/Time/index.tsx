import { useState, useEffect } from "react";
import { addDays, startOfWeek, startOfDay, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function TimeLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximoReset = startOfDay(addDays(agora, 1)); // Calcula o próximo reset diário (amanhã à meia-noite)
    const distancia = formatDistance(agora, proximoReset, {
      // addSuffix: true,
      locale: ptBR,
    });
    return distancia;
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

export function WeekLeft() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximaQuinta = startOfWeek(agora, { weekStartsOn: 4 }); // Calcula a próxima quinta-feira
    const distancia = formatDistance(new Date(agora), new Date(proximaQuinta), {
      addSuffix: true,
      locale: ptBR,
    });
    return distancia;
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

export function TerraDoAmanhecer() {
  const [tempoRestante, setTempoRestante] = useState("");

  function calcularTempoRestante(): string {
    const agora = new Date();
    const proximoSabado = startOfWeek(agora, { weekStartsOn: 6 }); // Calcula o próximo sábado
    const distance = formatDistance(new Date(agora), new Date(proximoSabado), {
      // addSuffix: true,
      locale: ptBR,
    });
    return distance;
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
