import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Colors from "../../assets/util/Colors";
import HistoryCard from "../../components/HistoryCard";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getUserLoggedID } from "../../utils/UserService";
import moment from "moment";
import "moment/locale/pt-br";
import { ScrollView } from "react-native-gesture-handler";

export default function Historico() {
  /** TODO
   * [ ] Fazer o fetch de agendamento do usuário
   * [ ] Fazer a iteração para mostrar os cards com os agendamentos
   *
   */

  moment.locale("pt-br");

  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        console.log("Buscando agendamentos do usuário.");
        const userID = await getUserLoggedID();
        if (userID) {
          const appointments = collection(FIREBASE_DB, "appointments");
          const q = query(appointments, where("clientID", "==", userID));
          const querySnapshot = await getDocs(q);

          const agendamentosData = [];
          querySnapshot.forEach((doc) => {
            const agendamento = doc.data();

            const formattedDate = moment(agendamento.date.toDate()).format(
              "DD [de] MMMM"
            );

            agendamento.date = formattedDate;
            agendamentosData.push(agendamento);
          });

          setAgendamentos(agendamentosData);
          console.log("Agendamentos encontrados:", agendamentosData);
        } else {
          console.log("Usuário não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    };

    fetchAgendamentos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <View style={styles.cards}>
        {agendamentos.map((agendamento, index) => (
          <HistoryCard
            key={index}
            serviceName={agendamento.serviceName}
            barberName={agendamento.barberName}
            hour={agendamento.hour}
            price={agendamento.price}
            date={agendamento.date.toString()}
            status={agendamento.status}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#fff",
    marginTop: 10,
    paddingVertical: 20,
    paddingLeft: 12,
  },
  cards: {
    gap: 12,
  },
});
