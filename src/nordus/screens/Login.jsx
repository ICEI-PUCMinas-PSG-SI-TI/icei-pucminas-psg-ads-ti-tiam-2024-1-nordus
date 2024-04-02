import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "center",
    color: "white" 
  },
  text: {
    color: "white",
    fontSize: 28,
  }
});
