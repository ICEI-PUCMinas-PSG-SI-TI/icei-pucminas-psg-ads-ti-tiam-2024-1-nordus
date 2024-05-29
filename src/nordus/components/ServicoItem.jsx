import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ServicoItem = ({ image, name, price, duration }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        {/* TODO: a duration não está aparecendo na estilização atual :( */}
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "#353535",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 150,
    height: 150,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  info: {
    marginLeft: 5,
    color: "#fff",
    padding: 5,
    alignItems: "left",
    height: "30%",
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    color: "#fff",
  },
  duration: {
    textAlign: "right",
    fontSize: 10,
    color: "#666",
  },
});

export default ServicoItem;
