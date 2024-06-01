import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Pressable } from "react-native";

import Barber from "../../components/Barber";
import Hour from "../../components/Hour";
import Calendar from "../../components/Calendar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAppointments } from "../../utils/AppointmentService";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function AgendamentoAdicional({duration}) {

  const [barbers, setBarbers] = useState([]);
  const [barbeiroEscolhido, setBarbeiroEscolhido] = useState(null);
  const [data, setData] = useState(null);
  const [horario, setHorario] = useState(null);

  const getBarbers = async () => {
    
    try {

      let barbersAsync = await AsyncStorage.getItem("barbers");
      var barbersArr = barbersAsync ? JSON.parse(barbersAsync) : null;
  
      if(!barbersArr) {

        console.log("buscando barbeiros.")
        const usersCollection = collection(FIREBASE_DB, "users");
        const q = query(usersCollection, where("barber", "==", true));
        const queryResponse = await getDocs(q);
  
        if (!queryResponse.empty) {
          barbersArr =  [];
          queryResponse.docs.map(doc => 
            {
              let dt = doc.data();
              barbersArr.push(dt);
              doc.data();
            }
            );
          setBarbers(barbersArr);
        } else {
            console.log("Nenhum barbeiro encontrado");
          return null;
        }
      } else {
        console.log("barbeiros já estão armazenados.")
        console.log(barbers)
        return barbers;
      }
    } catch (error) {
      console.log("Erro ao obter barbeiros:", error);
      throw error;
    }
  };

  useEffect(() => {
    getBarbers();
  }, []);

  useEffect(() => {
    try {
      getAppointments(barbeiroEscolhido, data);
    } catch (error) {
      console.log(error)
    }
  },[data]);

 

  return (
    <SafeAreaView style={styles.container} >
      <View style={{gap:12}}>
        <Text style={{color: '#fff', fontSize: 24}}>Escolha um profissional:</Text>
        <View style={{flexDirection: 'row', gap: 20}}>
            {
              barbers.map((barber, index) => (
                <Pressable key={index} onPress={() => 
                  {
                    setBarbeiroEscolhido(barber.id);
                    console.log(JSON.stringify(barber.id))
                  }}>
                  <Barber name={barber.name} escolhido={barbeiroEscolhido==barber.id? true: false} uri={barber.imageURL} />
                </Pressable>
              ))
            } 
        </View>
      </View>

      <View style={{gap: 24}}>
          <View style={{gap:12, height: 370, overflow: 'hidden', borderBottomEndRadius: 20, borderBottomLeftRadius: 20}}>
              <Text style={{color: '#fff', fontSize: 20}}>Escolha uma data: </Text>
              <Calendar setData={setData}/>
          </View>

          <View style={{gap:12}}>
              <Text style={{color: '#fff', fontSize: 20}}>Escolha uma horario: </Text>
              <Hour setHorario={setHorario}/>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1E21',
    flex: 1,
    alignItems: "left",
    paddingTop: 20,
    paddingHorizontal: 30,
    gap: 18,
  },
  text: {
    fontSize: 42,
    color: '#fff'
  }
})
 
