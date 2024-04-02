import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Colors from "../assets/util/Colors";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.logoContainer}>
        <Logo size="md" />
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </KeyboardAvoidingView>
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
