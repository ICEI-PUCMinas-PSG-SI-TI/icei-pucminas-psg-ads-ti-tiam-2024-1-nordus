import { query, where, collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_DB } from "../FirebaseConfig";
import { auth } from "../FirebaseConfig";

export const getUser = async () => {
  try {
    let userData = await AsyncStorage.getItem("userData");
    let user = userData ? JSON.parse(userData) : null;

    if(!user) {
      console.log("buscando user.")
      const id = await getUserLoggedID();
      console.log(id);
      const usersCollection = collection(FIREBASE_DB, "users");
      const q = query(usersCollection, where("id", "==", id));
      const queryResponse = await getDocs(q);

      if (!queryResponse.empty) {
        user = queryResponse.docs[0].data();
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        return user;
      } else {
        console.log("Nenhum documento encontrado para o ID fornecido: " + id);
        return null;
      }
    } else {
      console.log("user já esta armazenado.")
      console.log(user)
      return user;
    }
  } catch (error) {
    console.log("Erro ao obter usuário:", error);
    throw error;
  }
};

//TODO: Implementar função de logout do usuário
export const logoutUser = async (setIsUserLoggedIn) => {
  await AsyncStorage.removeItem("userToken");
  await auth.signOut();
  setIsUserLoggedIn(false);
};

const getUserLoggedID = async () => {
  return await AsyncStorage.getItem("userToken");
};
