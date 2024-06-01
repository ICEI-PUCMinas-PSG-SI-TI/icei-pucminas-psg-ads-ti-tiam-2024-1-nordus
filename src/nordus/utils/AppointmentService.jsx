import { query, where, collection, getDocs, and } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_DB } from "../FirebaseConfig";

// [ ] saber quais horarios estao disponiveis:
// [X] Get no appointments
// [ ] Get no appointments da data selecionada e que o status esteja valido.
// [ ] Verifico o tipo de servico (duracao) e o horario. (horario+duracao = tempo indisponivel)
// [ ]-> verificacoes do horario de trabalho - tempos indisponiveis.

export const getAppointments = async (barberID, dataEscolhida) => {
  try {
    console.log("barberID", barberID);
    console.log("dataEscolhida", dataEscolhida);

    const appointmentsCollection = collection(FIREBASE_DB, "appointments");
    const q = query(
      appointmentsCollection,
      where("barberID", "==", barberID),
      where("date", "==", dataEscolhida)
    );

    const queryResponse = await getDocs(q);

    if (!queryResponse.empty) {
      const appointments = queryResponse.docs.map(doc => doc.data());
      return appointments;
    } else {
      console.log("Nenhum agendamento encontrado para o barbeiro e data fornecidos.");
      return [];
    }
  } catch (error) {
    console.log("Erro ao obter agendamentos:", error);
    throw error;
  }
};
