import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../assets/util/Colors";

export default function HistoryCard({
  serviceName,
  barberName,
  date,
  hour,
  price,
  status,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.serviceName}>{serviceName}</Text>
        <Text
          style={[
            styles.status,
            {
              color:
                  status === "Agendado"
                  ? Colors.TANGERINE
                  : status === "Cancelado"
                  ? Colors.DARK_GRAY
                  : Colors.NEON_GREEN,
            },
          ]}
        >
          {status}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Profissional: {barberName}</Text>
        <Text style={styles.detailsText}>Horario: {hour}</Text>
        <Text style={styles.detailsText}>Valor: {price}</Text>
        <Text style={styles.detailsText}>Data: {date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.DARKER_GRAY,
    backgroundColor: Colors.DARKER_GRAY,
    padding: 12,
    width: 350,
    height: 142,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceName: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5
  },
  status: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "300",
  },
  detailsContainer: {
    flexDirection: "column",
    marginLeft: 12
  },
  detailsText: {
    color: Colors.WHITE,
    fontSize: 14,
    marginBottom: 4,
  },
});
