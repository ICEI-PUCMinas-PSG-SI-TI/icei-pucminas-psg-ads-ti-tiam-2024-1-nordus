import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputForm from "./components/inputForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>O inicio de tudo, agora deu foi o arai</Text>
      <InputForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
