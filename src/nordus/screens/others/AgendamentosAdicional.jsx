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
import Colors from "../../assets/util/Colors";

export default function AgendamentoAdicional({
  serviceDuration,
  serviceName,
  setServiceDuration,
  clientID,
  clientName,
}) {
  const [barbers, setBarbers] = useState([]);
  const [barbeiroEscolhido, setBarbeiroEscolhido] = useState(null);
  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);
  const status = "valid";
  const [showModal, setShowModal] = useState(false);
  const [barberName, setBarberName] = useState("");
  const [dayTimeSlots, setDayTimeSlots] = useState(new Map());
  const [selectedTurno, setSelectedTurno] = useState("Manhã"); // Estado para o turno selecionado
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        let storedBarbers = await AsyncStorage.getItem("barbers");
        let barberArray = storedBarbers ? JSON.parse(storedBarbers) : null;

        if (!barberArray) {
          console.log("Buscando barbeiros do Firebase.");
          const usersCollection = collection(getFirestore(), "users");
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

  const fetchAppointments = async (barberId) => {
    if (barberId) {
      try {
        const appointments = await getAppointments(barberId);
        return appointments;
      } catch (error) {
        console.error("Erro ao obter compromissos:", error);
      }
    }
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
          clientName: clientName,
          date: date,
          hour: horario,
          serviceDuration,
          serviceName,
          status: status,
          barberName: barberName,
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

  const ConfirmationModal = () => {
    const handleReturnHome = () => {
      setShowModal(false);
      navigation.navigate("Home");
      setServiceDuration(null);
    };

    if (!showModal) {
      return null; // Não renderiza nada se showModal for falso
    }

    return (
      <View style={[styles.modalContainer]}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 20 }}>
            Agendamento realizado com sucesso!
          </Text>
          <TouchableHighlight
            underlayColor="#d96541"
            style={styles.buttonModal}
            onPress={handleReturnHome} // Evento de pressionar para voltar para a página inicial
          >
            <Text style={styles.buttonTextModal}>
              Voltar para página Inicial
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const agendamentosPorBarbeiro = new Map();

  async function escolherBarbeiro() {
    try {
      if (agendamentosPorBarbeiro.has(barbeiroEscolhido.toString())) {
        console.log("Barbeiro com dados já salvos.");
      } else {
        const result = await fetchAppointments(barbeiroEscolhido);

        result.forEach((appointment) => {
          appointment.date = appointment.date.toDate();
          console.log("Existe um agendamento: ", appointment.date);
        });
        console.log("Salvando no hashmap.");
        agendamentosPorBarbeiro.set(barbeiroEscolhido.toString(), result);
      }
      let agg = agendamentosPorBarbeiro.get(barbeiroEscolhido.toString());
      return agg;
    } catch (error) {
      console.error("Erro ao buscar os agendamentos:", error);
    }
  }

  async function calculaHorariosDisponiveis(dayTimeSlots) {
    let objAppointments = await escolherBarbeiro(barbeiroEscolhido);

    if (objAppointments == undefined || objAppointments == null) {
      console.log("undefined");
      return;
    } else {
      objAppointments.map((el) => {
        const data = el.date;

        if (dayTimeSlots.has(data.toString())) {
          let qntPeriodosMinimos = el.serviceDuration / 10;

          for (let i = 0; i < qntPeriodosMinimos; i++) {
            var qntMinutoPorPeriodo = 0;
            if (i != 0) qntMinutoPorPeriodo = 10;

            let horaAntiga = data.getHours();
            let minutoAntiga = data.getMinutes();

            let minutoNovo = minutoAntiga + qntMinutoPorPeriodo;

            if (minutoNovo > 59) {
              let horaNova = Math.floor(minutoNovo / 60);
              minutoNovo = minutoNovo % 60;
              data.setHours(horaNova + horaAntiga);
            }

            data.setMinutes(minutoNovo);

            dayTimeSlots.delete(data.toString());
          }
        }
      });
      console.log(dayTimeSlots);
      setDayTimeSlots(new Map(dayTimeSlots));
    }
    return dayTimeSlots;
  }

  const generateDayTimeSlots = (diaEscolhido) => {
    const qntHorarios = 66;
    const startHour = 9;
    const startMinute = 0;
    const timeSlots = new Map();

    let date = new Date(diaEscolhido);
    date.setHours(startHour, startMinute, 0, 0);

    for (let i = 0; i < qntHorarios; i++) {
      const slot = new Date(date.getTime() + i * 10 * 60000);
      timeSlots.set(slot.toString(), slot);
    }

    calculaHorariosDisponiveis(timeSlots);
    return timeSlots;
  };

  useEffect(() => {
    if (data && barbeiroEscolhido) {
      generateDayTimeSlots(data);
    }
  }, [data, barbeiroEscolhido]);

  const filterPastTimeSlots = (slots, currentDate) => {
    return slots.filter((slot) => {
      const slotDate = new Date(slot);
      return slotDate >= currentDate;
    });
  };

  const renderTimeSlots = (slots) => {
    const currentDate = new Date();
    const filteredSlots = filterPastTimeSlots(slots, currentDate);

    return (
      <View style={styles.timeSlotsContainer}>
        {filteredSlots.length > 0 ? (
          filteredSlots.map((slot, index) => {
            const date = new Date(slot);
            const hour = String(date.getHours()).padStart(2, "0");
            const minute = String(date.getMinutes()).padStart(2, "0");
            const formattedTime = `${hour}:${minute}`;
            return (
              <Pressable
                key={index}
                onPress={() => setHorario(formattedTime)}
                style={[
                  styles.timeSlot,
                  horario === formattedTime && styles.timeSlotSelected,
                ]}
              >
                <Text style={styles.timeSlotText}>{formattedTime}</Text>
              </Pressable>
            );
          })
        ) : (
          <Text style={styles.noAvailableSlotsText}>Nenhum horário disponível</Text>
        )}
      </View>
    );
  };

  const categorizeTimeSlots = (slots) => {
    const currentDate = new Date();
    const filteredSlots = filterPastTimeSlots(slots, currentDate);
    
    const manha = [];
    const tarde = [];
    const noite = [];

    filteredSlots.forEach((slot) => {
      const date = new Date(slot);
      const hour = date.getHours();
      if (hour < 12) {
        manha.push(slot);
      } else if (hour < 18) {
        tarde.push(slot);
      } else {
        noite.push(slot);
      }
    });

    return { manha, tarde, noite };
  };

  const { manha, tarde, noite } = categorizeTimeSlots(
    Array.from(dayTimeSlots.values())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={{ gap: 12 }}>
        <Text style={styles.title}>
          Escolha um profissional:
        </Text>
        <View style={styles.barberList}>
          {barbers.map((barber, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setBarbeiroEscolhido(barber.id);
                setBarberName(barber.name);
              }}
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

      <View>
        {barbeiroEscolhido ? (
          <View style={styles.calendarContainer}>
            <Text style={styles.title}>
              Escolha uma data:
            </Text>
            <Calendar setData={setData} barberId={barbeiroEscolhido} />
          </View>
        ) : (
          <></>
        )}

        {data ? (
          <View style={{ gap: 12 }}>
            <Text style={styles.title}>
              Escolha um horário:
            </Text>
            <View style={styles.turnosContainer}>
              <Pressable
                onPress={() => setSelectedTurno("Manhã")}
                style={[
                  styles.turnoButton,
                  selectedTurno === "Manhã" && styles.turnoButtonSelected,
                ]}
              >
                <Text style={styles.turnoButtonText}>Manhã</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedTurno("Tarde")}
                style={[
                  styles.turnoButton,
                  selectedTurno === "Tarde" && styles.turnoButtonSelected,
                ]}
              >
                <Text style={styles.turnoButtonText}>Tarde</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedTurno("Noite")}
                style={[
                  styles.turnoButton,
                  selectedTurno === "Noite" && styles.turnoButtonSelected,
                ]}
              >
                <Text style={styles.turnoButtonText}>Noite</Text>
              </Pressable>
            </View>
            {selectedTurno === "Manhã" && renderTimeSlots(manha)}
            {selectedTurno === "Tarde" && renderTimeSlots(tarde)}
            {selectedTurno === "Noite" && renderTimeSlots(noite)}
          </View>
        ) : (
          <></>
        )}

        {data ? (
          <View style={styles.handleButton}>
            <TouchableHighlight
              underlayColor="#d96541"
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Agendar</Text>
            </TouchableHighlight>
          </View>
        ) : (
          <></>
        )}
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
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
    marginTop: 10,
  },
  barberList: {
    flexDirection: "row",
     gap: 20,
  },
  text: {
    fontSize: 42,
    color: "#fff",
  },
  calendarContainer: {
    gap: 12,
    height: 320,
    overflow: "hidden",
    borderRadius: 20,
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeSlot: {
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
    width: "22%",
    margin: "1%",
  },
  timeSlotSelected: {
    backgroundColor: Colors.TANGERINE,
  },
  timeSlotText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#d96541",
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
    color: "#000",
  },
  handleButton: {
    paddingBottom: 50,
    alignItems: "center",
  },
  modalContainer: {
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
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonModal: {
    backgroundColor: "#d96541",
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
    color: "#000",
  },
  turnosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  turnoButton: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  turnoButtonSelected: {
    backgroundColor: Colors.TANGERINE,
  },
  turnoButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  noAvailableSlotsText: {
    display: 'flex',
    color: "#d96541",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 68
  },
});
