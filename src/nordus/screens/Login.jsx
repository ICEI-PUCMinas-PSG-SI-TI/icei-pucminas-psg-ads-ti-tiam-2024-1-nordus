import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import Colors from "../assets/util/Colors";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FirebaseConfig";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
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
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro de Login", getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const recoverPassword = () => {
    sendPasswordResetEmail(formData.login)
      .then(() => {
        alert("Email de recuperação enviado com sucesso");
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  };

  const getErrorMessage = (error) => {
    if (error.code === "auth/user-not-found") {
      return "Usuário não encontrado";
    } else if (error.code === "auth/invalid-email") {
      return "Email inválido";
    } else if (error.code === "auth/wrong-password") {
      return "Senha incorreta";
    } else {
      return error.message;
    }
  };

  const navigateCadastro = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={[styles.container, styles.outerView]}>
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

            {loading ? (
              <ActivityIndicator size="large" color={Colors.TANGERINE} />
            ) : (
              <>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleLogin()}
                  >
                    <Text style={styles.buttonText}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>

          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={[styles.text, styles.centeredText]}
              onPress={navigateCadastro}
            >
              <Text style={[styles.text, styles.boldText, styles.centeredText]}>
                Cadastrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.text, styles.centeredText]}
              onPress={recoverPassword}
            >
              <Text style={[styles.text, styles.centeredText, styles.linkItem]}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    justifyContent: "center",
    paddingTop: 50,
    justifyContent: "center",
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: "center",
    alignItems: "center",
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  linkItem: {
    marginTop: 10,
  },
});
