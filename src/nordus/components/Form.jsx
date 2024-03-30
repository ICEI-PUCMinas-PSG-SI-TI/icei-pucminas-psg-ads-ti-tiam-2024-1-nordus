import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../assets/util/Colors";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    alert(name);
    alert(phoneNumber);
    alert(email);
    alert(password);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Nome*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor={Colors.SILVER}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>Telefone*</Text>
        <TextInput
          style={styles.input}
          placeholder="( xx ) xxxxx-xxxx"
          placeholderTextColor={Colors.SILVER}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Text style={styles.label}>Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor={Colors.SILVER}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Senha*</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={Colors.SILVER}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Já tem conta? <Text style={styles.link}>Logar</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: Colors.SILVER,
    padding: 8,
    marginTop: 5,
  },
  input: {
    width: 281,
    height: 54,
    borderRadius: 18,
    fontSize: 16,
    backgroundColor: Colors.DARKER_GRAY,
    paddingLeft: 25,
    marginBottom: 3,
  },
  button: {
    backgroundColor: Colors.TANGERINE,
    width: 225,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: Colors.BLACK,
    textAlign: "center",
    fontSize: 18,
  },
  linkContainer: {
    marginTop: 30,
  },
  linkText: {
    fontSize: 18,
    color: Colors.SILVER,
    textAlign: "center",
  },
  link: {
    color: Colors.WHITE,
    fontWeight: 600,
  },
});
