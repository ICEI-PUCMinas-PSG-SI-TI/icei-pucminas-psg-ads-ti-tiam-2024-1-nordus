import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import PlanoAssinatura from "../../components/PlanoAssinatura";
import Colors from "../../assets/util/Colors";
const Assinaturas = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Clube Nordus</Text>
      <PlanoAssinatura
        title="CORTE"
        price="R$ 119,90 / MÊS"
        description="Corte ilimitado"
      />
      <PlanoAssinatura
        title="BARBA"
        price="R$ 119,90 / MÊS"
        description="Barba ilimitado"
      />
      <PlanoAssinatura
        title="CORTE + BARBA"
        price="R$ 199,90 / MÊS"
        description="Cortes e barba ilimitados"
        isBestSeller={true}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    marginVertical: 20,
    paddingTop: 16,
    fontWeight: '300',

  },
});

export default Assinaturas;
