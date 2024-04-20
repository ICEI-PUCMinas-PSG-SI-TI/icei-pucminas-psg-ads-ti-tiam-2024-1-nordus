import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Produto() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>Produtos</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2e2e',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    fontSize: 42,
    color: '#fff'
  }
})
 
