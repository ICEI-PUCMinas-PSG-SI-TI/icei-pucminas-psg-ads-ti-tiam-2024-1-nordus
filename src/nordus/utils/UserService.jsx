import { query, where, collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_DB } from "../FirebaseConfig";
import { auth } from "../FirebaseConfig";

export const getUser = async (id) => {
  try {
    const usersCollection = collection(FIREBASE_DB, "users");
    const q = query(usersCollection, where("id", "==", id));
    const queryResponse = await getDocs(q);

    if (!queryResponse.empty) {
      const user = queryResponse.docs[0].data();
      return user;
    } else {
      console.log("Nenhum documento encontrado para o ID fornecido: " + id);
      return null;
    }
  } catch (error) {
    console.log("Erro ao obter usuário:", error);
    throw error;
  }
};

//TODO: Implementar função de logout do usuário
export const logoutUser = async () => {
  await AsyncStorage.removeItem("userToken");
  await auth.signOut();
  setIsUserLoggedIn(false);
};
