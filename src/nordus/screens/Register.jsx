import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../assets/util/Colors";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [logoVisible, setLogoVisible] = useState(true);

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

  const navigation = useNavigation();

  const keyboardDidShow = () => {
    setLogoVisible(false);
  };

  const keyboardDidHide = () => {
    setLogoVisible(true);
  };

  Keyboard.addListener("keyboardDidShow", keyboardDidShow);
  Keyboard.addListener("keyboardDidHide", keyboardDidHide);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {logoVisible && (
        <View style={styles.logoContainer}>
          <Logo size="md" />
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
        <View>
          <Text style={styles.label}>Nome*</Text>
          <Input
            placeholder="Digite seu nome"
            value={formData.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          <Text style={styles.label}>Telefone*</Text>
          <Input
            placeholder="( xx ) xxxxx-xxxx"
            value={formData.phoneNumber}
            onChangeText={(text) => handleInputChange("phoneNumber", text)}
          />
          <Text style={styles.label}>Email*</Text>
          <Input
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          <Text style={styles.label}>Senha*</Text>
          <Input
            secureTextEntry={true}
            placeholder="Digite sua senha"
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>
            Já tem conta?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Logar
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  logoContainer: {
    alignItems: "center",
  },
  formContainer: {
    flex: 3,
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
    fontSize: 17,
    fontWeight: "300",
    color: Colors.WHITE,
  },
  link: {
    fontWeight: "bold",
    color: Colors.TANGERINE,
  },
});
