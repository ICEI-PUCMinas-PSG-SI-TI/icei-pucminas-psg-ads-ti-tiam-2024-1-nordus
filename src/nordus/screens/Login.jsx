import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Colors from "../assets/util/Colors";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ setIsUserLoggedIn }) {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken) {
        setIsUserLoggedIn(true);
      }
    } catch (error) {
      console.log("Erro ao verificar status de login:", error);
    }
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.login,
        formData.password
      );
      await AsyncStorage.setItem("userToken", response.user.uid);
      setIsUserLoggedIn(true);
    } catch (error) {
      console.log("Erro ao fazer login:", error);
      Alert.alert("Erro de Login", "Por favor, verifique seu email e senha.");
    } finally {
      setLoading(false);
    }
  };

  const navigateCadastro = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Logo size="md" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.formContainer}
      >
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
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
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
});
