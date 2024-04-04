import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "../assets/util/Colors";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
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

  const navigateCadastro = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.logoContainer}>
        <Logo size="md" />
      </View>
      <View style={styles.formContainer}>
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
          <TouchableOpacity
            style={[styles.text, styles.centeredText]}
            onPress={navigateCadastro}
          >
            <Text style={[styles.text, styles.boldText, styles.centeredText]}>
              Cadastrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.text, styles.centeredText]}>
            <Text style={[styles.text, styles.centeredText, styles.linkItem]}>
              Entrar sem Login
            </Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 10,
  },
  link: {
    color: Colors.WHITE,
    fontWeight: "600",
  },
  text: {
    fontSize: 17,
    fontWeight: "300",
    color: Colors.WHITE,
  },
  centeredText: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  linkItem: {
    marginTop: 10,
  },
});
