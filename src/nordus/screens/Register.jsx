import { StyleSheet, Text, View } from "react-native";
import Colors from "../assets/util/Colors"
import Logo from "../components/Logo"

export default function Register() {
  return (
    <View style={styles.container}> 
    <View style={styles.logoContainer}>
    <Logo size="md" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logoContainer: {
    marginTop: 150,
  }
});