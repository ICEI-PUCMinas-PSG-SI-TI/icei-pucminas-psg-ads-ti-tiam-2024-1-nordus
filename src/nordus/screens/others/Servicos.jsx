import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import ServicoItem from "../../components/ServicoItem";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Colors from "../../assets/util/Colors";

export default function Servicos({setDuration}) {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      console.log("Pesquisando serviços.");
      const query = await getDocs(collection(FIREBASE_DB, "services"));
      const servicesData = [];

      query.forEach((doc) => {
        servicesData.push(doc.data());
      });

      console.log("Pesquisa concluída.");
      setServices(servicesData);
    } catch (error) {
      console.error("Erro ao buscar serviços: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível buscar os serviços. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar</Text>
      <Text style={styles.subtitle}>Selecione um serviço:</Text>
      <ScrollView contentContainerStyle={styles.servicesList}>
        {services.map((service, index) => (
          <Pressable onPress={() => setDuration(service.duration)} key={index} style={styles.cardContainer}>
            <ServicoItem
              image={service.image}
              name={service.name}
              price={`R$ ${service.price}`}
              duration={`${service.duration}min`}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "300",
    color: "#fff",
    marginBottom: 20,
  },
  servicesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "47%",
    marginBottom: 20,
  },
});
