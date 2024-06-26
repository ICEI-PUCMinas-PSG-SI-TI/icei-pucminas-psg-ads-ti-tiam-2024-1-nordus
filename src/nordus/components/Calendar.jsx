import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { FIREBASE_DB } from "../FirebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

export default function Calendar({ setData, barberId }) {
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    const fetchDisabledDates = async () => {
      if (barberId) {
        const dates = await fetchBarberDaysOff(barberId);
        setDisabledDates(dates);
      }
    };

    fetchDisabledDates();
  }, [barberId]);

  async function fetchBarberDaysOff(barberId) {
    if (!barberId) return [];

    try {
      const daysOffCollection = collection(FIREBASE_DB, "daysOff");
      const q = query(daysOffCollection, where("barberId", "==", barberId));
      const querySnapshot = await getDocs(q);
      const disabledDates = querySnapshot.docs.map((doc) => {
        const timestamp = doc.data().date;
        const date = moment(timestamp.toDate()).toDate();
        return date;
      });
      console.log(disabledDates);
      return disabledDates;
    } catch (error) {
      console.error("Erro ao buscar dias de folga do barbeiro:", error);
      return [];
    }
  }

  const today = moment();
  const minimumDate = today.toDate();
  const futureDate = moment(today).add(30, "days");
  const maximumDate = futureDate.toDate();

  function handleDate(date) {
    setData(date);
  }

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={false}
        minDate={minimumDate}
        maxDate={maximumDate}
        disabledDates={disabledDates}
        weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
        months={[
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ]}
        previousTitle="Anterior"
        nextTitle="Próximo"
        todayBackgroundColor="#353535"
        selectedDayColor="#EA714C"
        selectedDayTextColor="#FFFFFF"
        textStyle={{ color: "#fff" }}
        onDateChange={handleDate}
        disabledDatesTextStyle={{ color: "#575757" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
  },
});
