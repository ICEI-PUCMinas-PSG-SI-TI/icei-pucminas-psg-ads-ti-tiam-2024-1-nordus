import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Servicos from "./Servicos";
import AgendamentoAdicional from "./AgendamentosAdicional";
import { getUserLoggedID } from "../../utils/UserService";
export default function Agendamento() {
  const [serviceDuration, setServiceDuration] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [clientID, setClientID] = useState(null);

  async function getUserID() {
    try {
      let ID = await getUserLoggedID();
      setClientID(ID);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getUserID();
  }, []);

  if (serviceDuration == null) {
    return (
      <Servicos
        setServiceDuration={setServiceDuration}
        setServiceName={setServiceName}
      />
    );
  } else {
    return (
      <AgendamentoAdicional
        setServiceDuration={setServiceDuration}
        serviceDuration={serviceDuration}
        serviceName={serviceName}
        clientID={clientID}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e2e2e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    color: "#fff",
  },
});
