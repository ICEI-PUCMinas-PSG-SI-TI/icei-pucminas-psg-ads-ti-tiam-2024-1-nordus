import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import Barber from "../../components/Barber";
import Calendar from "../../components/Calendar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppointments } from "../../utils/AppointmentService";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, getDocs, query, where, addDoc, getFirestore } from "firebase/firestore";

export default function AgendamentoAdicional({ duration }) {
  const [barbers, setBarbers] = useState([]);
  const [barbeiroEscolhido, setBarbeiroEscolhido] = useState(null);
  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);

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
          const appointments = await getAppointments(barbeiroEscolhido, data);
          console.log("Compromissos obtidos:", appointments);
        } catch (error) {
          console.error("Erro ao obter compromissos:", error);
        }
      }
    };

    fetchAppointments();
  }, [barbeiroEscolhido, data]);

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

  const handleSubmit = async (hour) => {
    try {
      await addDoc(collection(getFirestore(), "appointments"), { 
        hour 
      });
      console.log(`Horário ${hour} agendado com sucesso.`);
    } catch (error) {
      console.error("Erro ao agendar horário:", error);
    }
  };

  const timeSlots = generateTimeSlots();

  return (
    <ScrollView style={styles.container}>
      <View style={{ gap: 12 }}>
        <Text style={{ color: "#fff", fontSize: 24 }}>Escolha um profissional:</Text>
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
          <Text style={{ color: "#fff", fontSize: 20 }}>Escolha um horário:</Text>
          <View style={styles.timeSlotsContainer}>
            {timeSlots.map((slot, index) => (
              <Pressable key={index} onPress={() => handleSubmit(slot)} style={styles.timeSlot}>
                <Text style={styles.timeSlotText}>{slot}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
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
    gap: 15,
    height: 400,
    overflow: "hidden",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '23%',
    margin: '1%',
  },
  timeSlotText: {
    color: '#fff',
    fontSize: 16,
  },
});
