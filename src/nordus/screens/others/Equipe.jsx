import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import TeamCard from "../../components/TeamCard";
import Colors from "../../assets/util/Colors";
import Divider from "../../components/Divider";

export default function Equipe() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Conheça nossa equipe</Text>
      <View style={styles.cards}>
        <TeamCard
          image={require("../../assets/teamPhoto/cabral.png")}
          name="Cabral"
          text="Sou cabeleireiro há mais de uma década, especializado em cortes modernos e coloração criativa. Estou aqui para trazer inovação e estilo ao seu visual!"
        />

        <View>
          <Divider color={"#353535"} />
        </View>

        <TeamCard
          image={require("../../assets/teamPhoto/emanuel.png")}
          name="Emanuel"
          text="Sou apaixonado por cabelos cacheados e crespos, buscando sempre realçar a beleza natural de cada pessoa e promover a aceitação e empoderamento capilar."
        />

        <View>
          <Divider color={"#353535"} />
        </View>

        <TeamCard
          image={require("../../assets/teamPhoto/tiel.png")}
          name="Tiel Santos"
          text="Sou conhecido pela minha habilidade em criar penteados despojados e naturais, proporcionando um toque de autenticidade a cada cliente que passa pela minha cadeira."
        />
        <View style={{ height: 20 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    color: "#fff",
    marginTop: 10,
    paddingVertical: 20,
  },
  cards: {
    gap: 12,
    alignItems: 'center'
  },
});
