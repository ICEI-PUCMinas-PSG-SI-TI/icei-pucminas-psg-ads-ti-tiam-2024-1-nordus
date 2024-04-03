import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/util/Colors";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native"; // Corrigido para useNavigation

const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation(); // Usando o hook useNavigation

  const handleInputChange = (key, value) => {
    // Atualiza o estado do formulário quando um campo é alterado
    setFormData({ ...formData, [key]: value });
  };

  const handleLogin = () => {
    navigation.navigate("Home"); // Acesso direto ao objeto de navegação
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Login*</Text>
        <Input
          placeholder="Digite seu email"
          onChangeText={(text) => handleInputChange("login", text)}
        />
        <Text style={styles.label}>Senha*</Text>
        <Input
          secureTextEntry={true}
          placeholder="Digite sua senha"
          onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          <Text style={styles.link}>Cadastrar</Text>
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

export default LoginForm;
