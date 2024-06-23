import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlanoAssinatura = ({ title, price, description, isBestSeller }) => {
  return (
    <View style={styles.wrapper}>
      {isBestSeller && (
        <View style={styles.bestSellerTag}>
          <Text style={styles.bestSellerText}>MAIS VENDIDO</Text>
        </View>
      )}
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    alignItems: "center",
  },
  card: {
    width: "90%",
    padding: 20,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  currentPlan: {
    borderColor: "#0f0",
    borderWidth: 2,
  },
  bestSellerTag: {
    zIndex: 1,
    top: -4,
    position: "absolute",
    backgroundColor: "#EA714C",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bestSellerText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default PlanoAssinatura;
