import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../assets/util/Colors";
import Logo from "../components/Logo";
import Form from "../components/Form";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo size="md" />
      </View>
      <View style={styles.formContainer}>
        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    flexDirection: "column", 
  },
  logoContainer: {
    flex: 1,
    marginTop: 100,
  },
  formContainer: {
    flex: 4,
  },
});
