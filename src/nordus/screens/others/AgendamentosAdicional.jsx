import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Barber from "../../components/Barber";
import Calendar from "../../components/Calendar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppointments } from "../../utils/AppointmentService";
import { FIREBASE_DB } from "../../FirebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function AgendamentoAdicional({
  serviceDuration,
  serviceName,
  clientID,
}) {
  const [barbers, setBarbers] = useState([]);
  const [barbeiroEscolhido, setBarbeiroEscolhido] = useState(null);
  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);
  const status = "valid";
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        let storedBarbers = await AsyncStorage.getItem("barbers");
        let barberArray = storedBarbers ? JSON.parse(storedBarbers) : null;

        if (!barberArray) {
          console.log("Buscando barbeiros do Firebase.");
          const usersCollection = collection(FIREBASE_DB, "users");
          const q = query(usersCollection, where("barber", "==", true));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            barberArray = querySnapshot.docs.map((doc) => doc.data());
            await AsyncStorage.setItem("barbers", JSON.stringify(barberArray));
          } else {
            console.log("Nenhum barbeiro encontrado");
          }
        } else {
          console.log("Barbeiros carregados do AsyncStorage.");
        }

        setBarbers(barberArray);
      } catch (error) {
        console.error("Erro ao obter barbeiros:", error);
      }
    };

    fetchBarbers();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (barbeiroEscolhido && data) {
        try {
          const appointments = await getAppointments(barbeiroEscolhido);
          console.log("Compromissos obtidos:", appointments);
          //console.log("Data vem em obj:", appointments[0].date.toDate());
        } catch (error) {
          console.error("Erro ao obter compromissos:", error);
        }
      }
    };

    fetchAppointments();
  }, [barbeiroEscolhido]);

  const generateTimeSlots = () => {
    const qntHorarios = 66;
    const startHour = 9;
    let min = 0;
    let hour = startHour;
    const slots = [];

    for (let i = 0; i < qntHorarios; i++) {
      min = (i % 6) * 10;
      if (i !== 0 && min === 0) hour++;
      slots.push(`${hour}:${min < 10 ? "0" + min : min}`);
    }

    return slots;
  };

  const handleSubmit = async () => {
    if (barbeiroEscolhido && data && horario) {
      let horarioDividido = horario.split(":");
      let hora = horarioDividido[0];
      let minuto = horarioDividido[1];
      data.setHours(hora, minuto);

      let date = Timestamp.fromDate(new Date(data));

      try {
        await addDoc(collection(getFirestore(), "appointments"), {
          barberID: barbeiroEscolhido,
          clientID,
          date: date,
          hour: horario,
          serviceDuration,
          serviceName,
          status: status,
        });
        setShowModal(true);
        console.log("Agendamento realizado com sucesso.");
      } catch (error) {
        console.error("Erro ao agendar horário:", error);
      }
    } else {
      console.log("Preencha todos os campos antes de agendar.");
    }
  };

  const timeSlots = generateTimeSlots();

  const ConfirmationModal = () => {
    const handleReturnHome = () => {
      setShowModal(false);
      navigation.navigate("Home");
    };

    if (!showModal) {
      return null; // Não renderiza nada se showModal for falso
    }

    return (
      <View style={[styles.modalContainer]}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 20}}>Agendamento realizado com sucesso!</Text>
          <TouchableHighlight
            underlayColor="#d96541"
            style={styles.buttonModal}
            onPress={handleReturnHome} // Evento de pressionar para voltar para a página inicial
          >
            <Text style={styles.buttonTextModal}>Voltar para página Inicial</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ gap: 12 }}>
        <Text style={{ color: "#fff", fontSize: 24 }}>
          Escolha um profissional:
        </Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          {barbers.map((barber, index) => (
            <Pressable
              key={index}
              onPress={() => setBarbeiroEscolhido(barber.id)}
            >
              <Barber
                name={barber.name}
                escolhido={barbeiroEscolhido === barber.id}
                uri={barber.imageURL}
              />
            </Pressable>
          ))}
        </View>
      </View>

      <View style={{ gap: 24 }}>
        <View style={styles.calendarContainer}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Escolha uma data:</Text>
          <Calendar setData={setData} />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Escolha um horário:
          </Text>
          <View style={styles.timeSlotsContainer}>
            {timeSlots.map((slot, index) => (
              <Pressable
                key={index}
                onPress={() => setHorario(slot)}
                style={[
                  styles.timeSlot,
                  horario === slot && styles.timeSlotSelected,
                ]}
              >
                <Text style={styles.timeSlotText}>{slot}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.handleButton}>
          <TouchableHighlight
            underlayColor="#d96541"
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableHighlight>
        </View>
      </View>
      {showModal && <ConfirmationModal />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1E21",
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    gap: 18,
  },
  text: {
    fontSize: 42,
    color: "#fff",
  },
  calendarContainer: {
    gap: 12,
    height: 400,
    overflow: "hidden",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeSlot: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "22%",
    margin: "1%",
  },
  timeSlotSelected: {
    backgroundColor: "#555",
  },
  timeSlotText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.TANGERINE,
    height: 50,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: Colors.BLACK,
  },
  handleButton: {
    paddingBottom: 50,
    alignItems: "center",
  },
  modalContainer: {
    // backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonModal: {
    backgroundColor: Colors.TANGERINE,
    height: 50,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 8,
  },
  buttonTextModal: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: Colors.BLACK,
  },
});
