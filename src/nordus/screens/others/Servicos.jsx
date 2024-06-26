import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import ServicoItem from "../../components/ServicoItem";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Colors from "../../assets/util/Colors";

export default function Servicos({setServiceDuration, setServiceName}) {
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

  function handlePress(service) {
    setServiceDuration(service.duration);
    setServiceName(service.name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar</Text>
      <Text style={styles.subtitle}>Selecione um serviço:</Text>
      <ScrollView contentContainerStyle={styles.servicesList}>
        {services.map((service, index) => (
          <Pressable onPress={() =>handlePress(service)} key={index} style={styles.cardContainer}>
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
    paddingHorizontal: 16,
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
    paddingHorizontal: 8
  },
  servicesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8
  },
  cardContainer: {
    width: "47%",
    marginBottom: 20,
  },
});
