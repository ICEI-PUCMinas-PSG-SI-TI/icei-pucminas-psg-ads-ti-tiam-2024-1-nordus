import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/util/Colors";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    //Atualiza o estado do formulário quando um campo é alterado
    setFormData({ ...formData, [key]: value });
  };

  const handleRegister = () => {
    //extrai os valores do estado e exibe (temporário)
    const { name, phoneNumber, email, password } = formData;
    alert(name);
    alert(phoneNumber);
    alert(email);
    alert(password);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Nome*</Text>
        <Input
          placeholder="Digite seu nome"
          onChangeText={(text) => handleInputChange("name", text)}
        />
        <Text style={styles.label}>Telefone*</Text>
        <Input
          placeholder="( xx ) xxxxx-xxxx"
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
        />
        <Text style={styles.label}>Email*</Text>
        <Input
          placeholder="Digite seu e-mail"
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <Text style={styles.label}>Senha*</Text>
        <Input
          secureTextEntry={true}
          placeholder="Digite sua senha"
          onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Já tem conta? <Text style={styles.link}>Logar</Text>
        </Text>
      </View>
    </View>
  );
};

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
    fontWeight: "600",
  },
});

export default Form;
