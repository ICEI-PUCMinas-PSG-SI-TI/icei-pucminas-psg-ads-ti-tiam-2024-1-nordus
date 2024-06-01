import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Servicos from "./Servicos";
import AgendamentoAdicional from "./AgendamentosAdicional";

export default function Agendamento() {
  const [duration, setDuration] = useState(null);

  if(duration==null) {
    return (
      <Servicos setDuration={setDuration}/>
    );
  } else {
    return (
      <AgendamentoAdicional duration={duration}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2e2e',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    fontSize: 42,
    color: '#fff'
  }
})
 
