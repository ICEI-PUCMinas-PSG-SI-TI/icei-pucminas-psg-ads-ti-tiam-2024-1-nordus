import React from "react";
import Colors from "../../assets/util/Colors";
import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, TextInput, SafeAreaView, Text, TouchableOpacity, StyleSheet, } from "react-native";4
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUser, logoutUser, getUserLoggedID, updateUsers} from '../../utils/UserService';
import { FIREBASE_DB } from "../../FirebaseConfig";





export default function MeusDados() {
  
  const [user, setUser] = useState("");
  const [password, setNewPassword] = useState(user.password);
  const [email, setNewEmail] = useState(user.email);
  const [name, setNewName] = useState(user.name);
  const [phoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (err) {
        console.log(err);
      }
     
    };

    fetchUser();
  }, []);

  const Save = async () => {
    var userId= user.id;
    console.log("User:"+ userId);
    const response = updateUsers({phoneNumber: phoneNumber, password: password}, userId)
    if(response){
      alert("Alterações realizadas com sucesso")
    }else{
      alert("Falha ao alterar informações, tente novamente mais tarde")
    }
    
  
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Meus Dados</Text>

      <Text style={styles.textInput}>Nome*</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={user.name} 
          placeholderTextColor={Colors.SILVER}
        ></TextInput>
      </View>

      <Text style={styles.textInput}>Telefone*</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={user.phoneNumber}
          onChangeText={setNewPhoneNumber}
          placeholderTextColor={Colors.SILVER}
        ></TextInput>
      </View>

      <Text style={styles.textInput}>Email</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={user.email}
          placeholderTextColor={Colors.SILVER}
        ></TextInput>
      </View>

      <Text style={styles.textInput}>Senha*</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="***********"
          onChangeText={setNewPassword}
          placeholderTextColor={Colors.SILVER}
        ></TextInput>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={Save}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.BLACK,
  },
  text: {
    fontSize:24 ,
    textAlign: "left",
    paddingLeft: 18,
    paddingTop: 18,
    fontWeight: "300",
    color: Colors.WHITE,
  },
  textInput: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 35,
    paddingTop: 12,
    paddingBottom: 6,
    fontWeight: "300",
    color: Colors.SILVER,
  },
  input: {
    width: "85%",
    height: 54,
    borderRadius: 18,
    fontSize: 16,
    backgroundColor: Colors.DARKER_GRAY,
    paddingLeft: 25,
    marginBottom: 3,
  },
  inputContainer: {
    alignItems: "center",
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "12%",
  },
  button: {
    backgroundColor: Colors.TANGERINE,
    width: "50%",
    padding: 20,
    borderRadius: 25,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
