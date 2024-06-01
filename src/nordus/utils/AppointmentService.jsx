import { query, where, collection, getDocs, and } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_DB } from "../FirebaseConfig";

// saber quais horarios estao disponiveis:
// Get no appointments
// Get no appointments da data selecionada e que o status esteja valido.
// Verifico o tipo de servico (duracao) e o horario. (horario+duracao = tempo indisponivel)
// -> verificacoes do horario de trabalho - tempos indisponiveis.


export const getAppointments = async (barberID, dataEscolhida) => {
    var appointments;
    console.log("barberID", barberID)
    console.log("dataEscolhida", dataEscolhida)

  try {
      const usersCollection = collection(FIREBASE_DB, "appointments");
      const q = query(usersCollection);
      const queryResponse = await getDocs(q);
    
      if (!queryResponse.empty) {
        appointments = queryResponse.docs[0].data();
        return appointments;
      } else {
        console.log("Nenhum documento encontrado para o ID fornecido: " + id);
        return null;
      }
    } catch (error) {
        console.log("Erro:", error);
        throw error;
    }
};
