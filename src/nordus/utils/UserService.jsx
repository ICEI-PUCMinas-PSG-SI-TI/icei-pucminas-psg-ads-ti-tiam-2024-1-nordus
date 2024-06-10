import { query, where, collection, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_APP, FIREBASE_DB } from "../FirebaseConfig";
import { auth } from "../FirebaseConfig";
import { useId } from "react";


export const getUser = async () => {
  try {
    let userData = await AsyncStorage.getItem("userData");
    let user=null;

    if(!userData) {
      user = JSON.parse(userData);
    }
   
    if(!user) {
      console.log("buscando user.")
      const id = await getUserLoggedID();
      const usersCollection = collection(FIREBASE_DB, "users");
      const q = query(usersCollection, where("id", "==", id));
      const queryResponse = await getDocs(q);

      if (!queryResponse.empty) {
        user = queryResponse.docs[0].data();
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        console.log(user);
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
  await AsyncStorage.removeItem("userData");
  await auth.signOut();
  setIsUserLoggedIn(false);
};

const getUserLoggedID = async () => {
  return await AsyncStorage.getItem("userToken");
};

export async function getDocID(userId){
  try {
    const querySnapshot = await getDocs(collection(FIREBASE_DB, 'users'));

    const userDoc = querySnapshot.docs.find((doc) => doc.data().id === userId);

    if (userDoc) {
      console.log("Documento encontrado:", userDoc.id);
      return userDoc.id;
    } else {
      console.log("Documento não encontrado");
      return null; // Retorna null se o documento não for encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar documentos:', error);
    return null;
  }
}

export async function updateUsers(body, userId){
  const DocID =  await getDocID(userId)
  if(DocID != null){
const userDocRef = doc(FIREBASE_DB, 'users', DocID);
const update = async () => {
  try {
    await updateDoc(userDocRef, body);
    console.log('Documento do usuário atualizado com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar documento do usuário:', error);
  }
};

update();
console.log("funcionei")
return true
}
return false
}

