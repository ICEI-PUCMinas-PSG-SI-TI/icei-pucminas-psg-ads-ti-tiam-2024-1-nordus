import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Colors from "../../assets/util/Colors";
import HistoryCard from "../../components/HistoryCard";
import {FIREBASE_DB} from '../../FirebaseConfig'
import {collection, getDocs} from 'firebase/firestore'
export default function Equipe() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <View style={styles.cards}>
        <HistoryCard serviceName={'Corte'} barberName={'Tiel'} hour={'09:00'} price={'15,00'} date={'28-05-2024'} status={'Agendado'}
        />
      </View>
    </SafeAreaView>
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
